import { useState } from 'react'
import {inputBox} from './component'
import {useCurrencyInfo} from './hooks/useCurrencyInfo'
function App() {
  const [amount,setAmount] = useState(0)
  const [from,setFrom]=useState("usd")
  const [to,setTo]=useState("inr")
  const [convertedAmount,setConvertedAmount]=useState(0)

  return (
    <>
     <h1 className='bg-blue-800 text-5xl' >heow</h1>
    </>
  )
}

export default App
