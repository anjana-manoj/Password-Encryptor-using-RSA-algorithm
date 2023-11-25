import Link from 'next/link'
import React from 'react'

export default function test() {
  return (
    <div style={{backgroundImage: 'url(ab.jpg)'}} className="h-screen w-screen flex flex-col  bg-cover items-center">
            <div className='h-12 w-screen  text-white flex pt-3 '>
                  <Link href="/"><button className='w-32'>Home</button></Link>
           </div>

           <div className='h-screen w-screen pt-32 flex justify-center'>
               <div className='backdrop-blur-lg border-white  rounded-full w-96 h-80 border-4 flex flex-col justify-center align-center items-center space-y-32 '>
                  <Link href="/signup">
                  <button className=" text-white ">Welcome user</button>
                  </Link>
                </div>
           </div>
        </div>
    

  )
}
