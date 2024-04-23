import React from 'react'
import Post from '@/components/Post'
import { getData } from '../api/route'
const BlogPage = async () => {
  const fullposts = await getData()
  const posts=fullposts.slice(0,20)
  return (
    <div className='flex justify-center items-center flex-wrap gap-8 px-16 py-16'>
      {posts.map(post => {
        return<Post post={post} key={post.id}></Post>
      })}
    </div>
  )
}

export default BlogPage