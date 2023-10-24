

import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './Components/ThemeBtn'
import Card from './Components/Card'

function App() {
 
  const [themeMode,setThemeMode]=useState('light')

  const lightMode= () => {
      setThemeMode("light")
  }

  const darkMode= () => {
    setThemeMode("dark")
    document.querySelector("body").innerHTML.add(themeMode)
}
//actual set theme mode function
useEffect(()=>{
  const tag=document.querySelector('html')
  tag.classList.remove("dark","light")
  tag.classList.add(themeMode)
},[themeMode])

  return (
    <>
      <ThemeProvider value={{themeMode,darkMode,lightMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
           <div className="w-full">
               <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                       <ThemeBtn/>
                  </div>
                <div className="w-full max-w-sm mx-auto">
                      <Card/>
                </div>
           </div>
       </div>
       </ThemeProvider>
   </>
  )
}

export default App
