'use server'

import { revalidatePath } from 'next/cache'
import { Supabase } from '@/supabase/Supabase'

export const addPost = async (content: string) => {
  const supabase = new Supabase()

  await supabase.createPost(content)

  revalidatePath(`/?content=${content.toString()}`)
}
