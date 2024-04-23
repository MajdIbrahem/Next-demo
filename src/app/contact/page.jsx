import Image from 'next/image'
import React from 'react'

const ContactPage = () => {
  return (
    <div className=" flex items-center justify-center gap-16 py-8 px-12 w-full flex-col md:flex-row">
    <div className="flex justify-center items-center flex-col w-2/4">
        <form className='flex flex-col items-center justify-center gap-6 w-full' action=''>
          <input className='bg-blue-300/20 p-3 rounded placeholder:text-gray-400 w-full text-white outline-none' type='text' placeholder='Name and SurName'></input>
          <input className='bg-blue-300/20 p-3 rounded placeholder:text-gray-400 w-full text-white  outline-none' type='text' placeholder='Email'></input>
          <input className='bg-blue-300/20 p-3 rounded placeholder:text-gray-400 w-full text-white  outline-none' type='text' placeholder='Phone Number'></input>
          <textarea
            placeholder='Message'
            id=''
            cols={30}
            rows={10}
            className='bg-blue-300/20 p-5 rounded placeholder:text-gray-400 w-full text-white'
          ></textarea>
          <button className='bg-blue-600/40  text-gray-200 py-2 text-lg font px-2 rounded w-3/4'>Send</button>
      </form>
    </div>
    <div className='w-2/4'>
      <Image src='/contact.png' width={400} height={400}></Image>
    </div>
  </div>
  )
}

export default ContactPage