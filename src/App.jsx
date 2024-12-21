/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'
import Featured from './components/Featured'
import Getstarted from './components/Getstarted'
import Blog from './components/Blog'
import Login from './components/Login'
import MyBookings from './components/MyBookings'
import { isAuthenticated } from './utils/authUtils'
import Rides from './components/Rides'

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/bookings" element={
          <PrivateRoute>
            <MyBookings />
          </PrivateRoute>
        } />
        <Route path="/" element={
          <>
            <Header />
            <Featured />
            <Getstarted />
            <Blog />
          </>
        } />
        <Route path="/rides" element={<Rides />} />
      </Routes>
      <Footer />
    </Router>
  )
}
