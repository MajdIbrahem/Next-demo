import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Post = ({post}) => {
    return (
        <div className='flex justify-center items-center flex-col gap-6 w-[300px] h-[500px] p-5 border border-blue-900/60 shadow-md bg-gray-600 rounded'>
            <div className='text-black font-medium h-2/4 flex items-center justify-center flex-col gap-4'>
                <h1 className='text-3xl font-semibold text-blue-600 text-center'>Post</h1>
                <div className='text-center'>{post.body}</div>
                </div>
            <div className='flex flex-col justify-center items-center gap-4'>
                <h1 className='text-xl font-semibold text-center'>{ post.title.slice(0,20)}</h1>
                <h3 className='text-gray-400 text-center '>Date : 22/4 2024</h3>
                <button className='bg-blue-500/80 text-white px-2 py-1 rounded-md'> <Link href={`/blog/${post.id}`}>Read more</Link></button>
            </div>
        </div>
    )
}

export default Post