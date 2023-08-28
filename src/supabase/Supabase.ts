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
    try {
      const {
        data: { user }
      } = await this.getUser()
      if (user === null) {
        return
      }
      await this.supabase
        .from('posts')
        .insert({ content: post, user_id: user?.id })
    } catch (error) {
      return 'Error en el sistema, intente otra vez.'
    }
  }

  async getSession() {
    const { data } = await this.supabase.auth.getSession()
    if (data.session !== null) {
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
      .order('created_at', { ascending: false })
      .limit(10)
    return data
  }

  async fetchMorePosts(offset: number, pageCount: number) {
    const from = offset * pageCount
    const to = from + pageCount - 1

    const { data }: { data: Post[] | null } = await this.supabase
      .from('posts')
      .select('*, users(*)')
      .order('created_at', { ascending: false })
      .range(from, to)
    return data
  }
}
