import React from 'react'
import AuthServerButton from '../AuthButton/ServerButton'
import { IconHome2 } from '@tabler/icons-react'
function LeftSideBar() {
  return (
    <div className='flex flex-col gap-3'>
      <span className='text-2xl'>LOGO</span>
      <span className='text-2xl flex items-center gap-2'>
        <IconHome2 /> Inicio
      </span>
      <AuthServerButton />
    </div>
  )
}

export default LeftSideBar
