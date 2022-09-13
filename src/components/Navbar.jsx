import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-full h-24 px-7 bg-[#F63255] text-white' id='navbar-container'>
      <h1 className="text-white font-bold text-4xl w-full">Blood.</h1>
      <ul className="flex px-16">
        <li className="p-4 font-bold">Home</li>
        <li className="p-4 font-bold">Doe</li>
        <li className="p-4 font-bold">Sobre</li>
        <li className="p-4 font-bold">Login</li>
      </ul>
    </div>
  )
}

export default Navbar