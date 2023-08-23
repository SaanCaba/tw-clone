import { type Post } from '@/types/post.model'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Home() {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { session }
  } = await supabase.auth.getSession()
  const { data: posts }: { data: Post[] | null } = await supabase
    .from('posts')
    .select('*, users(*)')
  if (session === null) {
    redirect('/login')
  }
  return <main className=''>{JSON.stringify(posts)}</main>
}
