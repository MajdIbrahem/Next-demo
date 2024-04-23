import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='flex items-center justify-between px-36 py-8 w-full bg-blue-600/20'>
            <p className='text-gray-500 '>Next app</p>
            <Image src='/brands.png' width={200} height={100}></Image>
            <p className='text-gray-500'>next app demo all Right resrved</p>
        </div>
    )
}

export default Footer