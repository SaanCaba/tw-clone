import React from 'react'
import AuthServerButton from '../components/AuthButton/ServerButton'

function LoginPage() {
  return (
    <section className='flex min-h-screen items-center justify-center'>
      <div className='flex flex-col gap-3'>
        <h1 className='text-center text-2xl'>Inicia sesión</h1>
        <AuthServerButton />
      </div>
    </section>
  )
}

export default LoginPage
