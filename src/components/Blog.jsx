/* eslint-disable no-unused-vars */
import React from 'react'

export default function Blog() {
  const blogPosts = [
    {
      image: "images/blog-1.jpg",
      date: "20 December 2023",
      category: "Cars",
      title: "The Evolution of Electric Vehicles",
      description: "Discover how electric vehicles have transformed the automotive industry and what the future holds."
    },
    {
      image: "images/blog-2.jpg",
      date: "18 December 2023",
      category: "Luxury",
      title: "Top Luxury Cars of 2024",
      description: "Explore the most exclusive and luxurious vehicles hitting the market in 2024."
    },
    {
      image: "images/blog-3.jpg",
      date: "15 December 2023",
      category: "Technology",
      title: "Advanced Driver Assistance Systems",
      description: "Learn about the latest safety features and autonomous driving technologies."
    },
    {
      image: "images/blog-4.jpg",
      date: "12 December 2023",
      category: "Maintenance",
      title: "Essential Car Maintenance Tips",
      description: "Keep your vehicle running smoothly with these professional maintenance guidelines."
    },
    {
      image: "images/blog-5.jpg",
      date: "10 December 2023",
      category: "Performance",
      title: "Sports Cars Performance Guide",
      description: "Understanding performance metrics and what makes a great sports car."
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto gap-8 pb-4 snap-x">
          {blogPosts.map((post, index) => (
            <div key={index} className="flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 snap-start">
              <div className="h-64 overflow-hidden">
                <img src={post.image} alt={`Blog ${index + 1}`} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <span className="text-sm text-blue-600 font-medium">{post.date} / {post.category}</span>
                <h4 className="text-xl font-bold mt-2 mb-3 text-gray-800">{post.title}</h4>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <a href="#" className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}