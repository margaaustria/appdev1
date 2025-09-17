import { useState } from 'react'
import './App.css'

function AdminPanel() {
  return <h1>Admin Panel</h1>
}

function LoginForm() {
  return <h1>Please log in</h1>
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  let content
  if (isLoggedIn) {
    content = <AdminPanel />
  } else {
    content = <LoginForm />
  }

  return <div>{content}</div>
}
