import { redirect } from 'next/navigation'
import Posts from './components/Posts'
import LeftSideBar from './components/LeftSideBar'
import CreatePost from './components/Forms/CreatePost'
import { Supabase } from '@/supabase/Supabase'
import RightSideBar from './components/RightSideBar'

export default async function Home() {
  const supabase = new Supabase()
  const session = await supabase.getSession()
  const posts = await supabase.getPosts()
  if (session === null) {
    redirect('/login')
  }
  return (
    <main className='grid grid-cols-content'>
      <section className='pl-36 pr-16 pt-5'>
        <LeftSideBar />
      </section>
      <section className='min-h-screen border-l-[1px] border-r-[1px]'>
        <CreatePost avatar={session.user_metadata.avatar_url} />
        <Posts posts={posts!} />
      </section>
      <section className='pl-16 pr-32 pt-5'>
        <RightSideBar />
      </section>
    </main>
  )
}
