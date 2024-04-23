import Image from 'next/image'
import React from 'react'
export const metadata = {
  title: "Contact page",
  description: " create Demo next app for test",
};

const AboutPage = () => {
    return (
        <div className=" flex items-center justify-center gap-16 py-8 px-12 flex-col md:flex-row">
            <div className="flex justify-center items-start flex-col gap-8">
                <h2 className="text-2xl text-start font-bold text-blue-600">About Agency</h2>
                <h1 className='text-4xl font-bold text-white'> We create digital ideas that are bigger, bolder, braver and better.</h1>
                <p className="text-base  text-gray-300 ">We create digital ideas that are bigger, bolder, braver and better. We
                    believe in good ideas flexibility and precission We’re world’s Our
                    Special Team best consulting & finance solution provider. Wide range
                    of web and software development services.</p>
                <div className='flex items-center justify-center gap-8'>
                    <p className='text-white text-lg '>
                        <span className='text-blue-600 font-bold text-2xl'>10K +</span>
                        <br></br>
                        years Of experence
                    </p>
                    <p className='text-white text-lg '>
                        <span className='text-blue-600 font-bold text-2xl'>10K +</span>
                        <br></br>
                        years Of experence
                    </p>
                    <p className='text-white text-lg  '>
                        <span className='text-blue-600 font-bold text-2xl'>10K +</span>
                        <br></br>
                        years Of experence
                    </p>
                </div>
                </div>
                <div>
                <Image src='/about.png' width={900} height={900}></Image>
            </div>
    </div>
    )
}

export default AboutPage