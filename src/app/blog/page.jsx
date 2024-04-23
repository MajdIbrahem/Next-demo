import React, { Suspense } from 'react'
import Post from '@/components/Post'
import { getData } from '../api/route'
import AddPostForm from '@/components/AddPostForm'


const BlogPage = async () => {
  const posts= await getData()
  return (
    <div className='flex justify-center items-center gap-8 flex-col'>
      <h1 className='text-3xl text-center font-semibold'>ADD NEW POST</h1>
      <AddPostForm></AddPostForm>
      <h1 className='text-3xl text-center font- mt-6'>POSTS</h1>
      <Suspense fallback={"...loading"}>
        <div className='flex justify-center items-center flex-wrap gap-8 px-16 py-16 '>
      {posts.map(post => {
        return<Post post={post} key={post.id}></Post>
      })}
      
    </div>
      </Suspense>
      
    </div>
    
  )
}

export default BlogPage