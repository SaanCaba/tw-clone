import React from 'react'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import ClientButton from './ClientButton'

async function AuthServerButton() {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { session }
  } = await supabase.auth.getSession()
  console.log(session)
  return <ClientButton session={session} />
}

export default AuthServerButton
