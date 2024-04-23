import Image from 'next/image'
import React from 'react'
import { getPostData, getUserData } from '@/app/api/route'


export const generateMetadata = async ({ params }) => {
  const {slug} = params
  const post = await getPostData(slug)
  return {
    title: post.title,
  description: " create Demo next app for test",
  }
}
const BlogDetails = async({ params }) => {
  const {slug} = params
  const post = await getPostData(slug)
  const user = await getUserData(slug)
  
  return (
    <div >
      
      <div className='flex items-center justify-center gap-8 flex-col my-16'>
        <h1 className='text-4xl font-bold'> { post.title.slice(0,20)}</h1>
        <div className='flex items-center justify-center gap-4'>
          <div className='rounded-full border w-[70px] h-[70px] relative'>
            <Image src={`/noavatar.png`} fill className=' object-fill rounded-full'></Image>
          </div>
            <div className='flex items-center justify-center gap-2 flex-col'>
            <h3 className='text-gray-400 text-lg'>Author</h3>
            <p className='text-gray-400 text-base'> {user.name}</p>
          </div>
          <div className='flex items-center justify-center gap-2 flex-col'>
            <h3 className='text-gray-400 text-lg'>Published</h3>
            <p className='text-gray-400 text-base'> 22/4/2024</p>
          </div>
        </div>
        <h2 className='text-2xl font-bold text-blue-800  '>post</h2>
        <p className='text-white text-xl text-center rounded w-[300px] h-[300px] bg-gray-600/50 p-5'>{ post.body}</p>
      </div>
    </div>
  )
}

export default BlogDetails