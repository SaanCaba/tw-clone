import { type Post } from '@/types/post.model'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Posts from './components/Posts'
import AuthServerButton from './components/AuthButton/ServerButton'
import LeftSideBar from './components/LeftSideBar'

export default async function Home() {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { session }
  } = await supabase.auth.getSession()
  const { data }: { data: Post[] | null } = await supabase
    .from('posts')
    .select('*, users(*)')
  if (session === null) {
    redirect('/login')
  }
  return (
    <main className='grid grid-cols-content'>
      <section className='pl-36 pr-16'>
        <LeftSideBar />
      </section>
      <section>
        <Posts posts={data!} />
      </section>
      <section>otras cosas</section>
    </main>
  )
}
