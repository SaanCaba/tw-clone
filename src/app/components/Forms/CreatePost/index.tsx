'use client'
import React, { useRef } from 'react'
import { IconWorld } from '@tabler/icons-react'
import Avatar from '../../Helpers/Avatar'
// import { Supabase } from '@/supabase/Supabase'

interface Props {
  avatar: string
}

function CreatePost({ avatar }: Props) {
  const inputRef = useRef<null | HTMLInputElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const data = {
      content: inputRef.current?.value
    }
    await fetch('/api/create-post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }

  return (
    <div className='grid grid-cols-[80px_1fr] p-4 border-b-[1px]'>
      <div>
        <Avatar avatar={avatar} />
      </div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
        <input
          ref={inputRef}
          className='w-full bg-transparent text-xl focus:outline-none'
          placeholder='¡¿Qué está pasando?!'
          type='text'
        />

        <span className='flex gap-2 text-green'>
          <IconWorld /> Cualquier persona puede responder
        </span>
        <hr />
        <button
          type='submit'
          className='rounded-full bg-green font-bold bg-red-300 px-5 py-2 self-end'
        >
          Postear
        </button>
      </form>
    </div>
  )
}

export default CreatePost
