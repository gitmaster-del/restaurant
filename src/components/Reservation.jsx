import React, { useState } from 'react'
import InputField from '../components/InputField'
import SelectInput from './SelectInput'
import TextAreaField from './TextAreaField'
import BookingModal from '../components/BookingModal'
import {
  partySizeOptions,
  tableRefOptions,
  timeOptions
} from '../assets/assets'
import { supabase } from '../supabase'

const Reservation = () => {
  const [showModal, setShowModal] = useState(false)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    date: '',
    time: '',
    partySize: '',
    tableRef: '',
    fullname: '',
    phone: '',
    email: '',
    specialRequest: '',
  })

  const validate = () => {
    const newErrors = {}

    if (!formData.date) newErrors.date = 'Date is required'
    if (!formData.time) newErrors.time = 'Time is required'
    if (!formData.partySize) newErrors.partySize = 'Party Size is required'
    if (!formData.tableRef) newErrors.tableRef = 'Table Reference is required'
    if (!formData.fullname.trim()) newErrors.fullname = 'Full Name is required'
    if (!formData.phone.trim()) newErrors.phone = 'Phone Number is required'

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))

    if (errors[name]) {
      setErrors(prev => {
        const copy = { ...prev }
        delete copy[name]
        return copy
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)

    const { error } = await supabase
      .from('reservations')
      .insert([{
        date: formData.date,
        time: formData.time,
        party_size: Number(formData.partySize),
        table_ref: formData.tableRef,
        fullname: formData.fullname,
        phone: formData.phone,
        email: formData.email,
        special_request: formData.specialRequest,
      }])

    setLoading(false)

    if (error) {
      alert('Booking failed')
      console.error(error)
      return
    }

    setShowModal(true)
    setFormData({
      date: '',
      time: '',
      partySize: '',
      tableRef: '',
      fullname: '',
      phone: '',
      email: '',
      specialRequest: '',
    })
    setErrors({})
  }

  return (
    <>
      <div id="reservation" className="w-full bg-secondary py-20">
        <div className="container mx-auto px-6">

          <div className="text-center mb-12">
            <h1 className="text-3xl text-dark font-bold mb-4">
              Make a Reservation
            </h1>
            <div className="w-20 h-1 bg-primary mb-4 mx-auto"></div>
            <p className="text-gray-700">
              Book your table in advance to ensure the best dining experience.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded shadow">
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <InputField
                  label="Date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                />
                {errors.date && <p className="text-red-600 text-xs">{errors.date}</p>}

                <SelectInput
                  label="Time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  options={timeOptions}
                />
                {errors.time && <p className="text-red-600 text-xs">{errors.time}</p>}

                <SelectInput
                  label="Party Size"
                  name="partySize"
                  value={formData.partySize}
                  onChange={handleChange}
                  options={partySizeOptions}
                />
                {errors.partySize && <p className="text-red-600 text-xs">{errors.partySize}</p>}

                <SelectInput
                  label="Table Reference"
                  name="tableRef"
                  value={formData.tableRef}
                  onChange={handleChange}
                  options={tableRefOptions}
                />
                {errors.tableRef && <p className="text-red-600 text-xs">{errors.tableRef}</p>}

                <InputField
                  label="Full Name"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                />
                {errors.fullname && <p className="text-red-600 text-xs">{errors.fullname}</p>}

                <InputField
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <p className="text-red-600 text-xs">{errors.phone}</p>}

                <InputField
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-600 text-xs">{errors.email}</p>}

                <div className="md:col-span-2">
                  <TextAreaField
                    label="Special Request"
                    name="specialRequest"
                    value={formData.specialRequest}
                    onChange={handleChange}
                  />
                </div>

              </div>

              <button
                type="submit"
                disabled={loading}
                className={`mt-8 w-full py-3 rounded font-semibold text-white ${
                  loading ? 'bg-gray-400' : 'bg-primary hover:opacity-90'
                }`}
              >
                {loading ? 'Booking...' : 'Book Table'}
              </button>
            </form>
          </div>

        </div>
      </div>

      <BookingModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  )
}

export default Reservation
