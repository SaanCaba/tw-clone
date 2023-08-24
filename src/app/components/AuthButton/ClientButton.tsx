'use client'
import React from 'react'
import {
  createClientComponentClient,
  type Session
} from '@supabase/auth-helpers-nextjs'
import GithubIcon from '../Icons/Github'
import { useRouter } from 'next/navigation'

interface Props {
  session: Session | null
}

function ClientButton({ session }: Props) {
  const supabase = createClientComponentClient()
  const router = useRouter()
  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback'
      }
    })
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <header>
      {session === null ? (
        <button
          type='button'
          className='text-white transition-all duration-300 ease-in bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center'
          onClick={handleSignIn}
        >
          <GithubIcon />
          Sign in with Github
        </button>
      ) : (
        <button
          className='p-2 bg-white text-black transition-all duration-300 ease-in text-xl hover:bg-black hover:text-white cursor-pointer rounded-lg w-full'
          onClick={handleSignOut}
        >
          Log out
        </button>
      )}
    </header>
  )
}

export default ClientButton
