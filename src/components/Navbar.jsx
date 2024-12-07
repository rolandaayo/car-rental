/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex justify-between items-center px-8 py-6 bg-gray-800 text-white fixed top-0 left-0 right-0 z-50">
      <div className="text-2xl font-bold">RideX</div>
      
      {/* Hamburger button for mobile */}
      <button 
        className="md:hidden z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>

      {/* Navigation menu */}
      <nav className={`md:space-x-6 md:static fixed top-0 right-0 h-full bg-gray-800 w-64 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out md:w-auto md:bg-transparent md:h-auto flex flex-col md:flex-row items-center justify-center md:justify-end space-y-6 md:space-y-0 pt-20 md:pt-0`}>
        <a href="/" className="hover:text-gray-300">Home</a>
        <a href="/rides" className="hover:text-gray-300">Explore Cars</a>
        <a href="/offer" className="hover:text-gray-300">About Us</a>
        <a href="/profile" className="hover:text-gray-300">Blog</a>
        <a href="/login" className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600">Explore Cars</a>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </nav>
    </div>
  )
}