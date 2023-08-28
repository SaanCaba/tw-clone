import React from 'react'
import BoxLayout from './BoxLayout'
import Tendencies from './Tendencies'

function RightSideBar() {
  return (
    <div className='w-full flex flex-col gap-4'>
      <BoxLayout>
        <h1 className='text-2xl font-bold'>Suscríbete a Premium</h1>
        <p className='text-base font-bold'>
          Suscríbete para desbloquear nuevas funciones y, si eres elegible,
          recibir un pago de cuota de ingresos por anuncios.
        </p>
        <button className='bg-green self-start w-min font-bold rounded-full px-5 py-2 '>
          Suscribirse
        </button>
      </BoxLayout>
      <BoxLayout>
        <h1 className='text-2xl font-bold'>Qué está pasando</h1>
        <Tendencies />
      </BoxLayout>
    </div>
  )
}

export default RightSideBar
