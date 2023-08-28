'use server'

import { revalidatePath } from 'next/cache'
import { Supabase } from '@/supabase/Supabase'
import { validatePost } from '../utils/validatePost'

export const addPost = async (content: string) => {
  const supabase = new Supabase()
  const errResponse = validatePost(content)
  if (errResponse !== null) {
    throw new Error(errResponse)
  }
  await supabase.createPost(content)

  revalidatePath(`/?content=${content.toString()}`)
}
