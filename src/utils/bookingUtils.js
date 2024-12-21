export const saveBooking = (booking) => {
  const bookings = JSON.parse(localStorage.getItem('bookings') || '[]')
  bookings.push(booking)
  localStorage.setItem('bookings', JSON.stringify(bookings))
}

export const getBookings = () => {
  const bookings = localStorage.getItem('bookings')
  return bookings ? JSON.parse(bookings) : []
}

export const isCarAvailable = (carName, startDate, endDate, excludeBookingDate = null) => {
  const bookings = getBookings()
  const start = new Date(startDate)
  const end = new Date(endDate)
  
  return !bookings.some(booking => 
    booking.carName === carName && 
    booking.bookingDate !== excludeBookingDate &&
    !(new Date(booking.endDate) < start || new Date(booking.startDate) > end)
  )
}

export const updateBooking = (updatedBooking) => {
  const bookings = getBookings()
  const index = bookings.findIndex(b => b.bookingDate === updatedBooking.bookingDate)
  if (index !== -1) {
    bookings[index] = updatedBooking
    localStorage.setItem('bookings', JSON.stringify(bookings))
  }
}

export const deleteBooking = (bookingDate) => {
  const bookings = getBookings()
  const filteredBookings = bookings.filter(b => b.bookingDate !== bookingDate)
  localStorage.setItem('bookings', JSON.stringify(filteredBookings))
}

export const cancelBooking = (bookingId) => {
  const bookings = getBookings()
  const updatedBookings = bookings.filter(booking => booking.id !== bookingId)
  saveBookings(updatedBookings)
}

export const addBooking = (booking) => {
  const bookings = getBookings()
  const newBooking = {
    ...booking,
    id: Date.now().toString(), // Simple way to generate unique IDs
  }
  bookings.push(newBooking)
  saveBookings(bookings)
  return newBooking
}