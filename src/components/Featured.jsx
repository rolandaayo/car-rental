/* eslint-disable no-unused-vars */
import React from 'react'

export default function Featured() {
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

  return (
    <div className='px-4 py-10 '>
      <div className=''>
        <h2 className='px-4 md:px-24 text-2xl md:text-4xl py-6 md:py-10 text-center md:text-left font-bold'>Featured Cars</h2>
      </div>      
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto'>
        {cars.map((car, index) => (
          <div key={index} className='bg-white p-4 rounded-lg shadow-md'>
            <img
              src={car.image}
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
              <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'>Rent now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}