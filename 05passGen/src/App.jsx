import { useState ,useCallback,useEffect,useRef} from 'react'



function App() {

  const [length,setLength]=useState("8")
  const [num,setNum]=useState(false)
  const [spChar,setSpchar]=useState(false)
  const[password,setPassword]=useState("")


  


  const passwordGenerator = useCallback(() => {
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(num) str+="1234567890"
    if(spChar) str += "!@#$%^&()_+{}|:?></.,;'[]~`'";

    for(let i=1 ; i<=length;i++){
      let x=""
      let char = Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(char)
      
    }
    setPassword(pass)
  }
  ,[length,num,spChar,setPassword])


  
  //useRef Hook
  const passwordRef=useRef()

  const copyPassoClipboard=useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,20)
    window.navigator.clipboard.writeText(password)
  } ,[password])



  useEffect(() => {
    passwordGenerator()
    
  }, [length,num,spChar,passwordGenerator])


  return (
    <>
      <div className='bg-gray-800 w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-blue-500 ' >
        <h1 className=' my-3 text-white text-center'> Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
           type="text"
           ref={passwordRef}
           value={password}           
           className='outiline-none w-full py-1 px-3'
           placeholder='password'
           readOnly
          />
          <button
          onClick={copyPassoClipboard}
          className='outline-none bg-blue-800 text-white px-3 py-0.5 shrink-0'
          >Copy</button>
        </div>
          <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-4'>
            <input 
            type="range"
            min={6}
            max={18}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label >Length:{length}</label>
            </div>
            <div className='flex items-center gap-x-1 ml-3'>
              <input type="checkbox"
              defaultChecked={num}
              onChange={()=>{
                setNum((prev)=>!prev)
              }
               }
              />
              <label >Number</label>
            </div>
            <div className='flex items-center gap-x-1 ml-3'>
              <input type="checkbox"
               defaultChecked={spChar}
               onChange={()=>{
                setSpchar((prev)=>!prev)
               }
               }
              />
              <label >characters</label>
            </div>

      </div>

    </div>

     </>
  )
}

export default App
