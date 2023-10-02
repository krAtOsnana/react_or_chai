import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)
  //let counter=0;
  let [counter,setcounter]=useState(0)
  var addValue=()=>{
    if(counter<20){
       counter++
    setcounter(counter)
    }
   
  }

  let decval=()=>{
    if(counter>0){
      counter--;
    setcounter(counter)
    }
      
  }
  return (
    <>
      <h1>02Counter</h1>
      <h2>VALUE : {counter}</h2>
      <button onClick={addValue}>inc. value</button>
      <button onClick={decval}>dec. value</button>
    </>
  )
}

export default App


    