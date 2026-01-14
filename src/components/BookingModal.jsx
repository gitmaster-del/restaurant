import React from 'react'

const BookingModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-[90%] max-w-md text-center">

        <h2 className="text-2xl font-bold text-green-600 mb-4">
          Booking Confirmed 🎉
        </h2>

        <p className="text-gray-700 mb-6">
          Your table has been successfully booked.  
          We look forward to serving you!
        </p>

        <button
          onClick={onClose}
          className="bg-primary text-white px-6 py-2 rounded font-semibold hover:opacity-90"
        >
          Close
        </button>

      </div>
    </div>
  )
}

export default BookingModal
