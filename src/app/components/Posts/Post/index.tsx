import React from 'react'
import { type Post } from '@/types/post.model'
import Avatar from '../../Helpers/Avatar'
interface Props {
  post: Post
}
function PostItem({ post }: Props) {
  return (
    <div className='transition-all duration-100 hover:bg-white/10 cursor-pointer w-full grid p-4 grid-cols-[80px_1fr] border border-l-[0px] border-r-[0px] border-b-1 border-t-0'>
      <div>
        <Avatar avatar={post.users.avatar} />
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
