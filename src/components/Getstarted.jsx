/* eslint-disable no-unused-vars */
import React from 'react'

export default function Getstarted() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="text-center mb-12 px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Get started with 4 simple steps</h1>
      </div>
      <div className='flex flex-col md:flex-row gap-6 px-4 md:px-8 lg:px-16 xl:px-36'>
        <div className="bg-blue-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full">
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">Create a profile</h2>
          <p className="text-gray-600 mb-4">If you are going to use a passage of Lorem Ipsum, you need to be sure.</p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300">Get Started</button>
        </div>
        <div className="bg-green-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full">
          <h2 className="text-2xl font-semibold text-green-800 mb-3">Create a profile</h2>
          <p className="text-gray-600 mb-4">If you are going to use a passage of Lorem Ipsum, you need to be sure.</p>
          <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors duration-300">Get Started</button>
        </div>
        <div className="bg-purple-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full">
          <h2 className="text-2xl font-semibold text-purple-800 mb-3">Create a profile</h2>
          <p className="text-gray-600 mb-4">If you are going to use a passage of Lorem Ipsum, you need to be sure.</p>
          <button className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition-colors duration-300">Get Started</button>
        </div>
        <div className="bg-orange-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full">
          <h2 className="text-2xl font-semibold text-orange-800 mb-3">Create a profile</h2>
          <p className="text-gray-600 mb-4">If you are going to use a passage of Lorem Ipsum, you need to be sure.</p>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors duration-300">Get Started</button>
        </div>
      </div>
    </div>
  )
}