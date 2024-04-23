import Image from 'next/image'
import React from 'react'
import { getPostData, getUserData } from '@/app/api/route'


export const generateMetadata = async ({ params }) => {
  const { slug } = params
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
    <div className='flex justify-center items-center gap-12 flex-col md:flex-row py-16 px-16'>
      <div>
        <Image src={post.url} width={450} height={425}></Image>
      </div>
      <div className='flex items-start justify-center gap-8 flex-col'>
        <h1 className='text-4xl font-bold'> { post.title}</h1>
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
        <h2 className='text-lg '>Description</h2>
        <p className='text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quaerat quis accusamus at fugit quod maxime beatae, vitae quos! Ex laboriosam dolorum ea fuga excepturi repellat assumenda aut cum cumque.</p>
      </div>
    </div>
  )
}

export default BlogDetails