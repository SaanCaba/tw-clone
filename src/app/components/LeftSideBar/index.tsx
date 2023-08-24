import React from 'react'
import AuthServerButton from '../AuthButton/ServerButton'

function LeftSideBar() {
  return (
    <div className='flex flex-col'>
      <span className='text-2xl'>LOGO</span>
      <span className='text-2xl'>Inicio</span>
      <AuthServerButton />
    </div>
  )
}

export default LeftSideBar
