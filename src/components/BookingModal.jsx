/* eslint-disable no-unused-vars */
import { useState } from 'react'
import PropTypes from 'prop-types'
import { saveBooking, isCarAvailable } from '../utils/bookingUtils'
import { isAuthenticated, getCurrentUser } from '../utils/authUtils'
import SuccessModal from './SuccessModal'

export default function BookingModal({ car, isOpen, onClose }) {
  const [bookingData, setBookingData] = useState({
    startDate: '',
    endDate: '',
    name: '',
    email: '',
    phone: ''
  })
  const [error, setError] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)

  if (!isOpen) return null

  const calculateTotalPrice = () => {
    if (!bookingData.startDate || !bookingData.endDate) return 0
    const start = new Date(bookingData.startDate)
    const end = new Date(bookingData.endDate)
    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24))
    const pricePerMonth = parseInt(car.price)
    const pricePerDay = pricePerMonth / 30
    return (pricePerDay * days).toFixed(2)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!isAuthenticated()) {
      window.location.href = '/login'
      return
    }

    // Validate dates
    const start = new Date(bookingData.startDate)
    const end = new Date(bookingData.endDate)
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    if (start < today) {
      setError('Pick-up date cannot be in the past')
      return
    }

    if (end <= start) {
      setError('Return date must be after pick-up date')
      return
    }

    // Check if car is available for selected dates
    if (!isCarAvailable(car.name, bookingData.startDate, bookingData.endDate)) {
      setError('Car is not available for selected dates')
      return
    }

    // Add user info to booking
    const user = getCurrentUser()
    const booking = {
      ...bookingData,
      carName: car.name,
      carPrice: car.price,
      totalPrice: calculateTotalPrice(),
      bookingDate: new Date().toISOString(),
      status: 'confirmed',
      userEmail: user.email,
      carDetails: {
        brand: car.brand,
        type: car.type,
        year: car.year,
        features: car.features
      }
    }

    try {
      saveBooking(booking)
      setShowSuccess(true)
    } catch (error) {
      setError('Failed to save booking. Please try again.')
    }
  }

  const handleSuccessClose = () => {
    setShowSuccess(false)
    onClose()
  }

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Book {car.name}</h2>
              <p className="text-gray-600">{car.brand} • {car.year} • {car.type}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            {/* Car Details */}
            <div>
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Features:</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {car.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Specifications:</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    <p>Capacity: {car.people}</p>
                    <p>Type: {car.type}</p>
                    <p>Consumption: {car.consumption1}</p>
                    <p>Base Price: ${car.price}/month</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    {error}
                  </div>
                )}

                <div>
                  <label className="block mb-1">Pick-up Date</label>
                  <input
                    type="date"
                    className="w-full p-2 border rounded"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={bookingData.startDate}
                    onChange={(e) => setBookingData({...bookingData, startDate: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block mb-1">Return Date</label>
                  <input
                    type="date"
                    className="w-full p-2 border rounded"
                    required
                    min={bookingData.startDate}
                    value={bookingData.endDate}
                    onChange={(e) => setBookingData({...bookingData, endDate: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block mb-1">Full Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    required
                    value={bookingData.name}
                    onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full p-2 border rounded"
                    required
                    value={bookingData.email}
                    onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block mb-1">Phone</label>
                  <input
                    type="tel"
                    className="w-full p-2 border rounded"
                    required
                    value={bookingData.phone}
                    onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                  />
                </div>

                {bookingData.startDate && bookingData.endDate && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Booking Summary</h3>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">
                        Duration: {Math.ceil((new Date(bookingData.endDate) - new Date(bookingData.startDate)) / (1000 * 60 * 60 * 24))} days
                      </p>
                      <p className="text-sm text-gray-600">
                        Base Price: ${car.price}/month
                      </p>
                      <p className="text-lg font-bold text-blue-600">
                        Total Price: ${calculateTotalPrice()}
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Confirm Booking
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <SuccessModal
        isOpen={showSuccess}
        onClose={handleSuccessClose}
        message="Your booking has been confirmed successfully! You can view your booking details in the My Bookings section."
      />
    </>
  )
}

BookingModal.propTypes = {
  car: PropTypes.shape({
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    people: PropTypes.string.isRequired,
    consumption1: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}