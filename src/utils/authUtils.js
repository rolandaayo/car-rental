export const demoUsers = [
  { email: 'demo@example.com', password: 'demo123', name: 'Demo User' }
]

export const login = (email, password) => {
  const user = demoUsers.find(u => u.email === email && u.password === password)
  if (user) {
    localStorage.setItem('currentUser', JSON.stringify({ email: user.email, name: user.name }))
    return true
  }
  return false
}

export const logout = () => {
  localStorage.removeItem('currentUser')
}

export const getCurrentUser = () => {
  const user = localStorage.getItem('currentUser')
  return user ? JSON.parse(user) : null
}

export const isAuthenticated = () => {
  return getCurrentUser() !== null
} 