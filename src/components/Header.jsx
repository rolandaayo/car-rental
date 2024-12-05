/* eslint-disable no-unused-vars */
import React from 'react'

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row justify-between h-[90vh] items-center max-w-7xl mx-auto px-4 py-8">
      <div className="flex-1 space-y-8 mb-8 md:mb-0">
        <h1 className="text-4xl font-bold leading-tight">The easy way to takeover a lease</h1>
        <p className="text-xl text-gray-600">Live in New York, New Jerset and Connecticut!</p>
        <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-3 hover:bg-gray-50 p-4 rounded-lg transition-all">
                    <p className="text-sm text-gray-500">Car, model, or brand</p>
                    <h2 className="text-lg font-semibold">What car are you looking?</h2>
                </div>

                <div className="space-y-3 hover:bg-gray-50 p-4 rounded-lg transition-all">
                    <p className="text-sm text-gray-500">Max. monthly payment</p>
                    <h2 className="text-lg font-semibold">Add a minimal make year</h2>
                </div>

                <div className="space-y-3 hover:bg-gray-50 p-4 rounded-lg transition-all">
                    <p className="text-sm text-gray-500">Car, model, or brand</p>
                    <h2 className="text-lg font-semibold">What car are you looking?</h2>
                </div>
            </div>
        </div>
      </div>      <div className="flex-1">
        <img
        src='/images/hero-banner.jpg'
        alt="Hero Banner"
        className="rounded-lg shadow-lg w-full h-auto"/>
      </div>
    </div>
  )
}