'use client'
import React, { useRef, useState } from 'react'
import { IconWorld } from '@tabler/icons-react'
import Avatar from '../../Helpers/Avatar'
import Loading from '../../Loading'
import { addPost } from '@/app/server-actions/add-post'

interface Props {
  avatar: string
}

function CreatePost({ avatar }: Props) {
  const [post, setPost] = useState('')
  const [loading, setLoading] = useState(false)
  const inputRef = useRef<null | HTMLInputElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost(e.target.value)
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      setLoading(true)
      await addPost(post)
    } catch (error) {
    } finally {
      setLoading(false)
      setPost('')
    }
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
          onChange={handleChange}
          value={post}
          name='content'
        />

        <span className='flex gap-2 text-green'>
          <IconWorld /> Cualquier persona puede responder
        </span>
        <hr />
        <button
          disabled={post.length === 0}
          className={`${
            post.length === 0
              ? 'bg-green/25 cursor-not-allowed'
              : 'bg-green hover:bg-green/70'
          } rounded-full font-bold px-5 py-2 self-end transition-all duration-200 ease-in flex`}
        >
          {loading && <Loading />} Postear
        </button>
      </form>
    </div>
  )
}

export default CreatePost
