import React from 'react'

function Navbar(props) {
  return (
    <div className='flex justify-between place-items-center'>
        <div className='box-border h-32 w-32 p-4'>
            <img 
                alt= "logo" 
                src='https://app.younglabs.in/_next/image?url=%2FYoungLabsLogo.png&w=256&q=75' 
            />
        </div>
        <div className='flex justify-center mr-20 text-center bg-lime-500 text-white rounded-md shadow-md text-xl'>
            <button className='px-4 py-1 font-semibold'>Login</button>
        </div>
    </div>
  )
}

export default Navbar;