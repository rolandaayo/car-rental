/* eslint-disable no-unused-vars */
import React from 'react'

export default function Blog() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto gap-8 pb-4 snap-x">
          <div className="flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 snap-start">
            <div className="h-64 overflow-hidden">
              <img src="images/blog-1.jpg" alt="Blog 1" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <span className="text-sm text-blue-600 font-medium">20 December 2023 / Cars</span>
              <h4 className="text-xl font-bold mt-2 mb-3 text-gray-800">The Evolution of Electric Vehicles</h4>
              <p className="text-gray-600 mb-4">Discover how electric vehicles have transformed the automotive industry and what the future holds.</p>
              <a href="#" className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Read More</a>
            </div>
          </div>

          <div className="flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 snap-start">
            <div className="h-64 overflow-hidden">
              <img src="images/blog-2.jpg" alt="Blog 2" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <span className="text-sm text-blue-600 font-medium">18 December 2023 / Luxury</span>
              <h4 className="text-xl font-bold mt-2 mb-3 text-gray-800">Top Luxury Cars of 2024</h4>
              <p className="text-gray-600 mb-4">Explore the most exclusive and luxurious vehicles hitting the market in 2024.</p>
              <a href="#" className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Read More</a>
            </div>
          </div>

          <div className="flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 snap-start">
            <div className="h-64 overflow-hidden">
              <img src="images/blog-3.jpg" alt="Blog 3" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <span className="text-sm text-blue-600 font-medium">15 December 2023 / Technology</span>
              <h4 className="text-xl font-bold mt-2 mb-3 text-gray-800">Advanced Driver Assistance Systems</h4>
              <p className="text-gray-600 mb-4">Learn about the latest safety features and autonomous driving technologies.</p>
              <a href="#" className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Read More</a>
            </div>
          </div>

          <div className="flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 snap-start">
            <div className="h-64 overflow-hidden">
              <img src="images/blog-4.jpg" alt="Blog 4" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <span className="text-sm text-blue-600 font-medium">12 December 2023 / Maintenance</span>
              <h4 className="text-xl font-bold mt-2 mb-3 text-gray-800">Essential Car Maintenance Tips</h4>
              <p className="text-gray-600 mb-4">Keep your vehicle running smoothly with these professional maintenance guidelines.</p>
              <a href="#" className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Read More</a>
            </div>
          </div>

          <div className="flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 snap-start">
            <div className="h-64 overflow-hidden">
              <img src="images/blog-5.jpg" alt="Blog 5" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <span className="text-sm text-blue-600 font-medium">10 December 2023 / Performance</span>
              <h4 className="text-xl font-bold mt-2 mb-3 text-gray-800">Sports Cars Performance Guide</h4>
              <p className="text-gray-600 mb-4">Understanding performance metrics and what makes a great sports car.</p>
              <a href="#" className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}