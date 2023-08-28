'use client'
import React, { useState, useEffect, useRef, useMemo } from 'react'
import { type Post } from '@/types/post.model'
import PostItem from './Post'
import { debounce } from 'lodash'
import { motion } from 'framer-motion'
import Loading from '../Loading'

interface Props {
  posts: Post[]
}

function Posts({ posts }: Props) {
  const pageCount = useMemo(() => {
    return 10
  }, [])
  const [loadedPosts, setLoadedPosts] = useState(posts)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [offset, setOffset] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const handleScroll = () => {
    // Do stuff when scrolling
    if (containerRef.current != null && typeof window !== 'undefined') {
      const container = containerRef.current
      const { bottom } = container.getBoundingClientRect()
      const { innerHeight } = window
      setIsInView((prev) => bottom <= innerHeight)
    }
  }

  useEffect(() => {
    if (isInView) {
      loadMorePosts(offset)
    }
  }, [isInView])
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
    const handleDebouncedScroll = debounce(() => handleScroll(), 200)
    window.addEventListener('scroll', handleDebouncedScroll)
    return () => {
      window.removeEventListener('scroll', handleDebouncedScroll)
    }
  }, [])
  const loadMorePosts = async (offset: number) => {
    setIsLoading(true)
    setOffset((prev) => prev + 1)
    const newPosts = await fetchTickets()
    setLoadedPosts((prevTickets) => [...prevTickets, ...newPosts])
    setIsLoading(false)
  }
  const fetchTickets = async () => {
    const response = await fetch(
      `/api/get-more-posts?offset=${offset}&pageCount=${pageCount}`,
      {
        method: 'GET'
      }
    )
    const { posts }: { posts: Post[] } = await response.json()
    return posts
  }
  console.log(loadedPosts)
  return (
    <div ref={containerRef} className='flex flex-col'>
      {loadedPosts.map((post, i) => {
        const recalculatedDelay =
          i >= pageCount * 2 ? (i - pageCount * (offset - 1)) / 15 : i / 15
        return (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              ease: [0.25, 0.25, 0, 1],
              delay: recalculatedDelay
            }}
          >
            <PostItem post={post} />
          </motion.div>
        )
      })}
      {isLoading && (
        <div className='flex justify-center p-3'>
          <Loading width='35px' height='35px' />
        </div>
      )}
    </div>
  )
}

export default Posts
