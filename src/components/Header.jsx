/* eslint-disable no-unused-vars */
import React from 'react'

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 pt-16 md:pt-40 max-w-7xl mx-auto">
      <div className="flex-1 pr-0 md:pr-12 text-center md:text-left mb-8 md:mb-0 w-full md:w-auto pt-8 md:pt-0">
        <h1 className="text-3xl text-start sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">The easy way to takeover a lease</h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6">Live in New York, New Jersey and Connecticut!</p>
        <div className="space-y-3 md:space-y-4">
          <div className="flex items-center">
            <div className="bg-green-100 p-1.5 md:p-2 rounded-full mr-3 md:mr-4">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-gray-700">Quick and hassle-free lease transfer process</p>
          </div>
          <div className="flex items-center">
            <div className="bg-green-100 p-1.5 md:p-2 rounded-full mr-3 md:mr-4">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-gray-700">Thousands of verified listings</p>
          </div>
          <div className="flex items-center">
            <div className="bg-green-100 p-1.5 md:p-2 rounded-full mr-3 md:mr-4">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-gray-700">24/7 customer support</p>
          </div>
        </div>
        <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4">
          <button className="w-full sm:w-auto bg-blue-600 text-white px-4 sm:px-6 md:px-8 py-2.5 md:py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg text-xs sm:text-sm md:text-base">
            Get Started
          </button>
          <button className="w-full sm:w-auto border border-gray-300 text-gray-700 px-4 sm:px-6 md:px-8 py-2.5 md:py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-xs sm:text-sm md:text-base">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex-1 w-full md:w-auto relative mt-6 md:mt-0 px-2 md:px-0">
        <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-full h-full bg-blue-100 rounded-lg transform -rotate-2"></div>
        <img
          src='/images/hero-banner.jpg'
          alt="Hero Banner"
          className="rounded-lg shadow-2xl w-full h-auto object-cover relative z-10 transform transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-yellow-100 rounded-full z-0"></div>
      </div>
    </div>
  )
}