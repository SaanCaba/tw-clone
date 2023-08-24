import React from 'react'
import { Post } from '@/types/post.model'
import Image from 'next/image'
interface Props {
  post: Post
}
function PostItem({ post }: Props) {
  return (
    <div className='w-full grid p-2 grid-cols-[80px_1fr] border border-b-1 border-t-0'>
      <div>
        <Image
          src={post.users.avatar}
          alt='user'
          width={60}
          height={60}
          className='rounded-full'
        />
      </div>
      <div>
        <div className='flex gap-3'>
          <span>{post.users.name}</span>
          <i className='text-gray-500'>@{post.users.username}</i>
        </div>
        {post.content}
      </div>
    </div>
  )
}

export default PostItem
