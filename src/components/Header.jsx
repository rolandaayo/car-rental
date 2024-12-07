/* eslint-disable no-unused-vars */
import React from 'react'

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 pt-40 max-w-7xl mx-auto">
      <div className="flex-1 pr-0 md:pr-12 text-left md:text-left mb-8 md:mb-0">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">The easy way to takeover a lease</h1>
        <p className="text-lg md:text-xl text-gray-600">Live in New York, New Jersey and Connecticut!</p>
      </div>
      <div className="flex-1 w-full md:w-auto">
        <img
          src='/images/hero-banner.jpg'
          alt="Hero Banner"
          className="rounded-lg shadow-2xl w-full h-auto object-cover"
        />
      </div>
    </div>
  )
}