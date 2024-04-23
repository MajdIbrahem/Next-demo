import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Post = ({post}) => {
    return (
        <div className='flex justify-center items-center flex-col gap-6 w-[300px] h-[700px] p-5 border border-blue-900/60 shadow-md'>
            <div>
                <Image src={post.url} width={250} height={225}></Image>
            </div>
            <div className='flex flex-col justify-center items-center gap-4'>
                <h1 className='text-xl font-bold text-center'>{ post.title}</h1>
                <h3 className='text-gray-400 text-center font-semibold'>Date : 22/4 2024</h3>
                <p className='text-gray-400 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum modi non odio dignissimos</p>
                
                <button className='bg-gray-500/80 text-white px-2 py-1 rounded-md'> <Link href={`/blog/${post.id}`}>Read more</Link></button>
            </div>
        </div>
    )
}

export default Post