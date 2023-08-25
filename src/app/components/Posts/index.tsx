import React from 'react'
import { type Post } from '@/types/post.model'
import PostItem from './Post'

interface Props {
  posts: Post[]
}

function Posts({ posts }: Props) {
  return (
    <div className='flex flex-col'>
      {posts.map((post) => {
        return <PostItem key={post.id} post={post} />
      })}
    </div>
  )
}

export default Posts
