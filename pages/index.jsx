import React from 'react'
import Link from 'next/link'

export default function home() {
  return (
    <div style={{backgroundImage: 'url(ab.jpg)'}} className="h-screen bg-cover w-screen flex flex-col  ">
        <div className='backdrop-blur-md h-12 w-screen text-white flex pt-3 justify-end justify-between'>
            <div>
                <Link href="/read"><button className=''>View more</button></Link>
            </div>
            <div>
                <Link href="/login"><button className=' w-32'>Login </button></Link>
                <Link href="/signup"><button className=' w-36'>Signup </button></Link>
            </div>
            
        </div>

        <div className='text-center text-white text-6xl h-2/3 w-screen flex flex-col justify-center align-middle'>
            <h3>password encryptor</h3>
        </div>

        
    </div>
  )
}
