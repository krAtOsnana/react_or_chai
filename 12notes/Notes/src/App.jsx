import React from 'react'
import Bkcg from './components/bkcg'
import Foreground from './components/Foreground'
function App() {
  return (
    <div className='relative w-full h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
    <Bkcg />
    <Foreground/>
    
    </div>
  )
}

export default App