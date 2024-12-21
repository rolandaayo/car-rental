/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import BookingModal from './BookingModal'

export default function Featured() {
  const [searchTerm, setSearchTerm] = useState('')
  const [priceFilter, setPriceFilter] = useState('all')
  const [typeFilter, setTypeFilter] = useState('all')
  const [selectedCar, setSelectedCar] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const cars = [
    {
      image: '/images/car-1.jpg',
      name: 'Toyota RAV4',
      people: '6 People',
      type: 'Hybrid',
      consumption1: '2.1km / 1-litre',
      consumption2: '7.1km / 1-litre',
      price: '$440 / month'
    },
    {
      image: '/images/car-2.jpg',
      name: 'BMW 3 Series',
      people: '4 People',
      type: 'Hybrid',
      consumption1: '6.1km / 1-litre',
      consumption2: '6.1km / 1-litre',
      price: '$790 / month'
    },
    {
      image: '/images/car-3.jpg',
      name: 'Volkswagen T-Cross',
      people: '8 People',
      type: 'Hybrid',
      consumption1: '99.1km / 3-litre',
      consumption2: '63.1km / 1-litre',
      price: '$350 / month'
    },
    {
      image: '/images/car-4.jpg',
      name: 'Cadillac Escalade',
      people: '2 People',
      type: 'Hybrid',
      consumption1: '623.1km / 1-litre',
      consumption2: '62.1km / 4-litre',
      price: '$410 / month'
    },
    {
      image: '/images/car-5.jpg',
      name: 'BMW 4 Series GTI',
      people: '5 People',
      type: 'Hybrid',
      consumption1: '91.1km / 4-litre',
      consumption2: '64.1km / 1-litre',
      price: '$440 / month'
    },
    {
      image: '/images/car-6.jpg',
      name: 'BMW 4 Series',
      people: '9 People',
      type: 'Hybrid',
      consumption1: '65.1km / 9-litre',
      consumption2: '66.1km / 3-litre',
      price: '$7k / month'
    }
  ]

  const filteredCars = cars.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesPrice = priceFilter === 'all' ? true :
      priceFilter === 'low' ? car.price.replace(/[^0-9]/g, '') < 500 :
      priceFilter === 'high' ? car.price.replace(/[^0-9]/g, '') >= 500 : true
    const matchesType = typeFilter === 'all' ? true : car.type === typeFilter

    return matchesSearch && matchesPrice && matchesType
  })

  return (
    <div className='px-4 py-10'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='px-4 md:px-24 text-2xl md:text-4xl py-6 md:py-10 text-center md:text-left font-bold'>
          Featured Cars
        </h2>
        
        {/* Search and Filter Controls */}
        <div className='mb-8 flex flex-col md:flex-row gap-4'>
          <input
            type="text"
            placeholder="Search cars..."
            className='p-2 border rounded-md flex-grow'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          <select 
            className='p-2 border rounded-md'
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          >
            <option value="all">All Prices</option>
            <option value="low">Under $500</option>
            <option value="high">$500 and above</option>
          </select>

          <select 
            className='p-2 border rounded-md'
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option value="all">All Types</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Electric">Electric</option>
            <option value="Gas">Gas</option>
          </select>
        </div>

        {/* Cars Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {filteredCars.map((car, index) => (
            <div key={index} className='bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow'>
              <img
                src={car.image}
                alt={car.name}
                className='w-full h-48 object-cover rounded-md mb-4'
              />
              <h2 className='text-xl font-semibold mb-3'>{car.name}</h2>

              <div className='flex justify-between mb-3'>
                <p className='text-gray-600'>{car.people}</p>
                <p className='text-gray-600'>{car.type}</p>
              </div>
              <div className='flex justify-between mb-4'>
                <p className='text-gray-600'>{car.consumption1}</p>
                <p className='text-gray-600'>{car.consumption2}</p>
              </div>

              <div className='flex justify-between items-center'>
                <h3 className='text-xl font-bold'>{car.price}</h3>
                <button 
                  className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors'
                  onClick={() => {
                    setSelectedCar(car)
                    setIsModalOpen(true)
                  }}
                >
                  Rent now
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredCars.length === 0 && (
          <div className='text-center py-8 text-gray-500'>
            No cars found matching your criteria
          </div>
        )}

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
      </div>
    </div>
  )
}