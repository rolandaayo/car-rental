/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { getBookings, cancelBooking } from '../utils/bookingUtils'
import { isAuthenticated, getCurrentUser } from '../utils/authUtils'
import BookingModal from './BookingModal'

export default function Rides() {
  const [searchTerm, setSearchTerm] = useState('')
  const [priceRange, setPriceRange] = useState('all')
  const [sortBy, setSortBy] = useState('name')
  const [capacity, setCapacity] = useState('all')
  const [brand, setBrand] = useState('all')
  const [selectedCar, setSelectedCar] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const cars = [
    {
      id: 1,
      image: '/images/car-1.jpg',
      name: 'Toyota RAV4',
      people: '6 People',
      type: 'Hybrid',
      consumption1: '2.1km / 1-litre',
      consumption2: '7.1km / 1-litre',
      price: '440',
      features: ['GPS Navigation', 'Bluetooth', 'USB Port', 'Air Conditioning'],
      brand: 'Toyota',
      year: '2023'
    },
    {
      id: 2,
      image: '/images/car-2.jpg',
      name: 'BMW 3 Series',
      people: '4 People',
      type: 'Electric',
      consumption1: '6.1km / 1-litre',
      consumption2: '6.1km / 1-litre',
      price: '790',
      features: ['Leather Seats', 'Sunroof', 'Parking Sensors', 'Cruise Control'],
      brand: 'BMW',
      year: '2023'
    },
    {
      id: 3,
      image: '/images/car-3.jpg',
      name: 'Volkswagen T-Cross',
      people: '8 People',
      type: 'Gas',
      consumption1: '99.1km / 3-litre',
      consumption2: '63.1km / 1-litre',
      price: '350',
      features: ['360° Camera', 'Child Seat', 'WiFi', 'Heated Seats'],
      brand: 'Volkswagen',
      year: '2022'
    },
    {
      id: 4,
      image: '/images/car-4.jpg',
      name: 'Cadillac Escalade',
      people: '2 People',
      type: 'Hybrid',
      consumption1: '623.1km / 1-litre',
      consumption2: '62.1km / 4-litre',
      price: '410',
      features: ['Premium Audio', 'Apple CarPlay', 'Android Auto', 'Lane Assist'],
      brand: 'Cadillac',
      year: '2023'
    },
    {
      id: 5,
      image: '/images/car-5.jpg',
      name: 'BMW 4 Series GTI',
      people: '5 People',
      type: 'Electric',
      consumption1: '91.1km / 4-litre',
      consumption2: '64.1km / 1-litre',
      price: '440',
      features: ['Keyless Entry', 'Push Start', 'Blind Spot Monitor', 'Premium Sound'],
      brand: 'BMW',
      year: '2023'
    },
    {
      id: 6,
      image: '/images/car-6.jpg',
      name: 'BMW 4 Series',
      people: '9 People',
      type: 'Hybrid',
      consumption1: '65.1km / 9-litre',
      consumption2: '66.1km / 3-litre',
      price: '7000',
      features: ['Panoramic Roof', 'Wireless Charging', 'Night Vision', 'Premium Package'],
      brand: 'BMW',
      year: '2023'
    },
    {
      id: 7,
      image: '/images/car-1.jpg',
      name: 'Mercedes-Benz S-Class',
      people: '4 People',
      type: 'Electric',
      consumption1: '0km / 1-litre',
      consumption2: 'Electric',
      price: '1200',
      features: ['Massage Seats', 'AR Display', 'Night Vision', 'Executive Package'],
      brand: 'Mercedes',
      year: '2023'
    },
    {
      id: 8,
      image: '/images/car-2.jpg',
      name: 'Audi e-tron GT',
      people: '4 People',
      type: 'Electric',
      consumption1: '0km / 1-litre',
      consumption2: 'Electric',
      price: '1100',
      features: ['Matrix LED', 'Virtual Cockpit', 'Bang & Olufsen Sound', 'Sport Package'],
      brand: 'Audi',
      year: '2023'
    },
    {
      id: 9,
      image: '/images/car-3.jpg',
      name: 'Tesla Model S',
      people: '5 People',
      type: 'Electric',
      consumption1: '0km / 1-litre',
      consumption2: 'Electric',
      price: '950',
      features: ['Autopilot', 'Gaming Computer', 'Premium Sound', 'Full Self Driving'],
      brand: 'Tesla',
      year: '2023'
    },
    {
      id: 10,
      image: '/images/car-4.jpg',
      name: 'Porsche Taycan',
      people: '4 People',
      type: 'Electric',
      consumption1: '0km / 1-litre',
      consumption2: 'Electric',
      price: '1300',
      features: ['Sport Chrono', 'Adaptive Air Suspension', 'Premium Sound', 'Performance Battery Plus'],
      brand: 'Porsche',
      year: '2023'
    },
    {
      id: 11,
      image: '/images/car-5.jpg',
      name: 'Range Rover Sport',
      people: '7 People',
      type: 'Hybrid',
      consumption1: '12.5km / 1-litre',
      consumption2: '10.2km / 1-litre',
      price: '890',
      features: ['Terrain Response', 'Meridian Sound', 'Panoramic Roof', 'Off-Road Package'],
      brand: 'Land Rover',
      year: '2023'
    },
    {
      id: 12,
      image: '/images/car-6.jpg',
      name: 'Lexus RX',
      people: '5 People',
      type: 'Hybrid',
      consumption1: '15.2km / 1-litre',
      consumption2: '13.1km / 1-litre',
      price: '680',
      features: ['Mark Levinson Audio', 'Head-Up Display', 'Safety System+', 'Luxury Package'],
      brand: 'Lexus',
      year: '2023'
    },
    {
      id: 13,
      image: '/images/car-1.jpg',
      name: 'Genesis GV80',
      people: '7 People',
      type: 'Gas',
      consumption1: '11.2km / 1-litre',
      consumption2: '9.8km / 1-litre',
      price: '820',
      features: ['3D Cluster', 'Remote Smart Parking', 'Lexicon Audio', 'Premium Package'],
      brand: 'Genesis',
      year: '2023'
    },
    {
      id: 14,
      image: '/images/car-2.jpg',
      name: 'Volvo XC90',
      people: '7 People',
      type: 'Hybrid',
      consumption1: '14.3km / 1-litre',
      consumption2: '12.1km / 1-litre',
      price: '870',
      features: ['Bowers & Wilkins Audio', 'Air Suspension', 'Pilot Assist', 'Luxury Package'],
      brand: 'Volvo',
      year: '2023'
    },
    {
      id: 15,
      image: '/images/car-3.jpg',
      name: 'Maserati Ghibli',
      people: '4 People',
      type: 'Gas',
      consumption1: '9.8km / 1-litre',
      consumption2: '8.2km / 1-litre',
      price: '1500',
      features: ['Harman Kardon Sound', 'Sport Mode', 'Italian Leather', 'Performance Package'],
      brand: 'Maserati',
      year: '2023'
    }
  ]

  // Filter and sort cars
  const filteredCars = cars
    .filter(car => {
      const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesPrice = priceRange === 'all' ? true :
        priceRange === 'low' ? parseInt(car.price) < 500 :
        priceRange === 'mid' ? parseInt(car.price) >= 500 && parseInt(car.price) < 1000 :
        parseInt(car.price) >= 1000
      const matchesCapacity = capacity === 'all' ? true :
        parseInt(car.people) === parseInt(capacity)
      const matchesBrand = brand === 'all' ? true : car.brand === brand
      return matchesSearch && matchesPrice && matchesCapacity && matchesBrand
    })
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name)
      if (sortBy === 'price-low') return parseInt(a.price) - parseInt(b.price)
      if (sortBy === 'price-high') return parseInt(b.price) - parseInt(a.price)
      if (sortBy === 'capacity') return parseInt(a.people) - parseInt(b.people)
      return 0
    })

  // Add this function to handle booking clicks
  const handleBookingClick = (car) => {
    if (!isAuthenticated()) {
      window.location.href = '/login'
      return
    }
    setSelectedCar(car)
    setIsModalOpen(true)
  }

  // Add this new function inside the Rides component, before the return statement
  const handleCancelBooking = (bookingId) => {
    if (!isAuthenticated()) {
      window.location.href = '/login'
      return
    }
    
    cancelBooking(bookingId)
    // Refresh the component to show updated availability
    setSearchTerm(searchTerm)
  }

  // Modify the isCarAvailable function to be more detailed
  const isCarAvailable = (carName) => {
    const bookings = getBookings()
    const today = new Date()
    const currentUser = getCurrentUser()
    
    const carBooking = bookings.find(booking => 
      booking.carName === carName && 
      new Date(booking.endDate) > today
    )

    // If there's no booking or the booking belongs to current user, car is available
    return !carBooking || (currentUser && carBooking.userId === currentUser.id)
  }

  // Add this function to get booking status and details
  const getCarBookingStatus = (carName) => {
    const bookings = getBookings()
    const today = new Date()
    const currentUser = getCurrentUser()
    
    const carBooking = bookings.find(booking => 
      booking.carName === carName && 
      new Date(booking.endDate) > today
    )

    if (!carBooking) return { status: 'available' }
    
    if (currentUser && carBooking.userId === currentUser.id) {
      return {
        status: 'self-booked',
        booking: carBooking
      }
    }

    return { status: 'booked' }
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <input
                type="text"
                placeholder="Search cars..."
                className="w-full p-2 border rounded-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
              <select
                className="w-full p-2 border rounded-md"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              >
                <option value="all">All Prices</option>
                <option value="low">Under $500</option>
                <option value="mid">$500 - $1000</option>
                <option value="high">Above $1000</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Capacity</label>
              <select
                className="w-full p-2 border rounded-md"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
              >
                <option value="all">All Capacities</option>
                <option value="2">2 People</option>
                <option value="4">4 People</option>
                <option value="5">5 People</option>
                <option value="6">6 People</option>
                <option value="8">8 People</option>
                <option value="9">9 People</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Brand</label>
              <select
                className="w-full p-2 border rounded-md"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              >
                <option value="all">All Brands</option>
                <option value="Toyota">Toyota</option>
                <option value="BMW">BMW</option>
                <option value="Mercedes">Mercedes</option>
                <option value="Audi">Audi</option>
                <option value="Tesla">Tesla</option>
                <option value="Porsche">Porsche</option>
                <option value="Land Rover">Land Rover</option>
                <option value="Lexus">Lexus</option>
                <option value="Genesis">Genesis</option>
                <option value="Volvo">Volvo</option>
                <option value="Maserati">Maserati</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
              <select
                className="w-full p-2 border rounded-md"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="name">Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="capacity">Capacity</option>
              </select>
            </div>
          </div>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.map((car) => (
            <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-48 object-cover"
                />
                {!isCarAvailable(car.name) && (
                  <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 m-2 rounded-full text-sm">
                    Booked
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{car.name}</h3>
                  <p className="text-lg font-semibold text-blue-600">${car.price}/month</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {car.people}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    {car.type}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Features:</p>
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

                <div className="mt-6">
                  {(() => {
                    const bookingStatus = getCarBookingStatus(car.name)
                    
                    if (bookingStatus.status === 'self-booked') {
                      return (
                        <div>
                          <p className="text-sm text-gray-600 mb-2">
                            Your booking: {new Date(bookingStatus.booking.startDate).toLocaleDateString()} - 
                            {new Date(bookingStatus.booking.endDate).toLocaleDateString()}
                          </p>
                          <button
                            className="w-full px-4 py-2 rounded-md text-white font-medium bg-red-500 hover:bg-red-600"
                            onClick={() => handleCancelBooking(bookingStatus.booking.id)}
                          >
                            Cancel Booking
                          </button>
                        </div>
                      )
                    }
                    
                    if (bookingStatus.status === 'booked') {
                      return (
                        <button
                          className="w-full px-4 py-2 rounded-md text-white font-medium bg-gray-400 cursor-not-allowed"
                          disabled
                        >
                          Currently Booked
                        </button>
                      )
                    }
                    
                    return (
                      <button
                        className="w-full px-4 py-2 rounded-md text-white font-medium bg-blue-500 hover:bg-blue-600"
                        onClick={() => handleBookingClick(car)}
                      >
                        Rent Now
                      </button>
                    )
                  })()}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add the BookingModal */}
        {selectedCar && (
          <BookingModal
            car={selectedCar}
            isOpen={isModalOpen}
            onClose={() => {
              setIsModalOpen(false)
              setSelectedCar(null)
            }}
          />
        )}

        {filteredCars.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No cars found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  )
} 