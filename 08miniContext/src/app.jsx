import { useState } from 'preact/hooks'

import './app.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>miniContext</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}
