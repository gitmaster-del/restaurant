import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaMapMarkedAlt,
  FaPhone
} from 'react-icons/fa'
import { supabase } from '../supabase'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [statusMessage, setStatusMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setStatusMessage(null)

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatusMessage('All fields are required')
      return
    }

    const nameRegex = /^[A-Za-z\s]{2,}$/
    if (!nameRegex.test(name)) {
      setStatusMessage('Invalid name')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setStatusMessage('Invalid email')
      return
    }

    setLoading(true)

    const { error } = await supabase
      .from('contacts')
      .insert([{ name, email, message }])

    if (error) {
      setStatusMessage('Failed to send message')
      console.error(error)
    } else {
      setStatusMessage('Message sent successfully')
      setName('')
      setEmail('')
      setMessage('')
    }

    setLoading(false)
  }

  const clearStatus = () => setStatusMessage(null)

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Lets<span className="text-primary"> Talk</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Contact for booking!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

          <form onSubmit={handleFormSubmit} className="space-y-6" noValidate>
            <div>
              <label className="block text-gray-300 mb-2">Your Name</label>
              <input
                type="text"
                value={name}
                onChange={e => { setName(e.target.value); clearStatus() }}
                className="w-full bg-dark-300 border rounded-lg px-4 py-3"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={e => { setEmail(e.target.value); clearStatus() }}
                className="w-full bg-dark-300 border rounded-lg px-4 py-3"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Your Message</label>
              <textarea
                value={message}
                onChange={e => { setMessage(e.target.value); clearStatus() }}
                className="w-full h-40 bg-dark-300 border rounded-lg px-4 py-3 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full px-6 py-3 rounded-lg font-medium ${
                loading ? 'bg-gray-400' : 'bg-primary text-white'
              }`}
            >
              {loading ? 'Sending...' : 'Send'}
            </button>

            {statusMessage && (
              <p className="text-center text-sm text-red-500">
                {statusMessage}
              </p>
            )}
          </form>

          <div className="space-y-6">
            <div className="flex items-start">
              <FaMapMarkedAlt className="text-purple text-2xl mr-4" />
              <p className="text-gray-400">Chandigarh, India</p>
            </div>

            <div className="flex items-start">
              <FaEnvelope className="text-purple text-2xl mr-4" />
              <p className="text-gray-400">info@gmail.com</p>
            </div>

            <div className="flex items-start">
              <FaPhone className="text-purple text-2xl mr-4" />
              <p className="text-gray-400">(+91) 98765-43210</p>
            </div>

            <div className="flex space-x-4 text-2xl text-gray-400">
              <a href="https://linkedin.com" target="_blank"><FaLinkedin /></a>
              <a href="https://instagram.com" target="_blank"><FaInstagram /></a>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  )
}

export default Contact
