import { type Post } from '@/types/post.model'
import {
  type Session,
  createServerActionClient
} from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export class Supabase {
  public supabase
  constructor() {
    this.supabase = createServerActionClient({ cookies })
  }

  async createPost(post: string) {
    const {
      data: { user }
    } = await this.getUser()
    if (user === null) {
      return
    }
    await this.supabase
      .from('posts')
      .insert({ content: post, user_id: user?.id })
  }

  async getSession() {
    const { data } = await this.supabase.auth.getSession()
    if (data !== null) {
      const session = data as unknown as { session: Session }
      return session.session.user
    }
    return null
  }

  async getUser() {
    return await this.supabase.auth.getUser()
  }

  async getPosts() {
    const { data }: { data: Post[] | null } = await this.supabase
      .from('posts')
      .select('*, users(*)')
    return data
  }
}
