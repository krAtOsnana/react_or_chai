import { useState ,useCallback} from 'react'



function App() {

  const [length,setLength]=useState("8")
  const [num,setNum]=useState(false)
  const [spChar,setSpchar]=useState(false)
  const[password,setPassword]=useState("")


  


  const passwordGenerator = useCallback(() => {
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(num) str+="1234567890"
    if(char) str += "!@#$%^&()_+{}|:?></.,;'[]~`'";

    for(let i=1 ; i<=Array.length;i++){
      let char = Math.floor(Math.random()*str.length+1);
      pass=str.charAt(char)
    }
    setPassword(pass)
  }
  ,[length,num,spChar,setPassword])

  

  return (
    <>
      <div className='bg-gray-800 w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500' >
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
           type="text"
           value={password}           
           className='outi'
          />
        </div>
      </div>

     </>
  )
}

export default App
