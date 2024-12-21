import React, { useEffect, useState } from 'react'
import { getBookings, updateBooking, deleteBooking } from '../utils/bookingUtils'
import { isAuthenticated, getCurrentUser } from '../utils/authUtils'
import SuccessModal from './SuccessModal'
import ModifyBookingModal from './ModifyBookingModal'

export default function MyBookings() {
  const [bookings, setBookings] = useState([])
  const [selectedBooking, setSelectedBooking] = useState(null)
  const [showModifyModal, setShowModifyModal] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  useEffect(() => {
    if (!isAuthenticated()) {
      window.location.href = '/login'
      return
    }
    loadBookings()
  }, [])

  const loadBookings = () => {
    const user = getCurrentUser()
    const allBookings = getBookings()
    setBookings(allBookings.filter(booking => booking.userEmail === user?.email))
  }

  const handleModify = (booking) => {
    setSelectedBooking(booking)
    setShowModifyModal(true)
  }

  const handleCancel = (booking) => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      deleteBooking(booking.bookingDate)
      setSuccessMessage('Booking cancelled successfully!')
      setShowSuccessModal(true)
      loadBookings()
    }
  }

  const handleModifySuccess = () => {
    setShowModifyModal(false)
    setSuccessMessage('Booking modified successfully!')
    setShowSuccessModal(true)
    loadBookings()
  }

  // Helper function to calculate total price
  const calculateTotalPrice = (booking) => {
    const start = new Date(booking.startDate)
    const end = new Date(booking.endDate)
    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24))
    const pricePerMonth = parseInt(booking.carPrice.replace(/[^0-9]/g, ''))
    const pricePerDay = pricePerMonth / 30
    return (pricePerDay * days).toFixed(2)
  }

  if (bookings.length === 0) {
    return (
      <div className="text-center py-8 mt-20">
        <p className="text-gray-500">No bookings found</p>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-20">
      <h2 className="text-2xl font-bold mb-6">My Bookings</h2>
      <div className="grid gap-6">
        {bookings.map((booking, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Car Image Section */}
              <div className="md:w-1/3">
                <img
                  src={`/images/car-${(index % 6) + 1}.jpg`}
                  alt={booking.carName}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              {/* Booking Details Section */}
              <div className="md:w-2/3">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{booking.carName}</h3>
                    <p className="text-gray-600 text-lg">{booking.carPrice}</p>
                  </div>
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    booking.status === 'confirmed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {booking.status}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="text-sm text-gray-600">Pick-up Date</p>
                    <p className="font-semibold">
                      {new Date(booking.startDate).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="text-sm text-gray-600">Return Date</p>
                    <p className="font-semibold">
                      {new Date(booking.endDate).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Booked By</p>
                    <p className="font-semibold">{booking.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Contact</p>
                    <p className="font-semibold">{booking.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-semibold">{booking.email}</p>
                  </div>
                </div>

                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-600">Duration</p>
                      <p className="font-bold text-lg">
                        {Math.ceil((new Date(booking.endDate) - new Date(booking.startDate)) / (1000 * 60 * 60 * 24))} days
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Total Price</p>
                      <p className="font-bold text-lg text-blue-600">
                        ${calculateTotalPrice(booking)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end gap-4 mt-4">
                  <button 
                    className="px-4 py-2 text-sm text-red-600 hover:text-red-800 font-medium"
                    onClick={() => handleCancel(booking)}
                  >
                    Cancel Booking
                  </button>
                  <button 
                    className="px-4 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={() => handleModify(booking)}
                  >
                    Modify Booking
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Modals */}
      {selectedBooking && (
        <ModifyBookingModal
          booking={selectedBooking}
          isOpen={showModifyModal}
          onClose={() => setShowModifyModal(false)}
          onSuccess={handleModifySuccess}
        />
      )}

      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        message={successMessage}
      />
    </div>
  )
} 