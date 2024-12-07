/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'
import Featured from './components/Featured'
import Getstarted from './components/Getstarted'
import Blog from './components/Blog'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Featured/>
      <Getstarted/>
      <Blog/>
      <Footer/>
    </div>
  )
}
