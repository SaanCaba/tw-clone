import React from 'react'
import AuthServerButton from '../AuthButton/ServerButton'
import { IconHome2, IconSearch, IconBell, IconMail } from '@tabler/icons-react'

const appSections = [
  {
    title: 'Inicio',
    icon: IconHome2
  },
  {
    title: 'Explorar',
    icon: IconSearch
  },
  {
    title: 'Notificaciones',
    icon: IconBell
  },
  {
    title: 'Mensajes',
    icon: IconMail
  }
]

function LeftSideBar() {
  return (
    <div className='flex flex-col gap-3'>
      <span className='text-2xl p-3'>LOGO</span>
      {appSections.map((el, i) => {
        return (
          <span
            key={i}
            className='text-2xl flex items-center gap-2 text-2xl font-semibold p-3 transition-all duration-300 hover:bg-white/30 cursor-pointer rounded-full '
          >
            <el.icon /> {el.title}
          </span>
        )
      })}
      <AuthServerButton />
    </div>
  )
}

export default LeftSideBar
