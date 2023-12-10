import React from 'react'
import { CgNotes } from "react-icons/cg";

function Card() {
  return (
    <>
    <div className='relative bg-zinc-700 w-[140px] h-[180px] rounded-[25px] text-white-200 p-5 overflow-hidden'>
    <CgNotes/>
    <p className='mt-5 leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
    <div className='footer absolute bottom-0 bg-slate-300 w-full h-10 left-0 '></div>
    </div>
    </>
  )
}

export default Card