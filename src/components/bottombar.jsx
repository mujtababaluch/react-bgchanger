
import React from 'react'

export default function BottomBar() {
  return (
    <div className='fixed flex flex-wrap justify-center bottom-4 inset-x-0 '>
            <div className='flex flex-wrap justify-center gap-4 px-3 py-2 shadow-lg bg-white rounded-xl'>
                <button
                    onClick={()=>Setc}
                className='outline-none px-4 py-1 bg-red-700 rounded-full text-white shadow-lg' >Red</button>
                <button className='outline-none px-4 py-1 bg-green-700 rounded-full text-white shadow-lg' >Green</button>
                <button className='outline-none px-4 py-1 bg-blue-800 rounded-full text-white shadow-lg' >Blue</button>
                <button className='outline-none px-4 py-1 bg-violet-950 rounded-full text-white shadow-lg' >Violet</button>
            </div>
        </div>
  )
}
