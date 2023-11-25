import Link from 'next/link'
import React from 'react'

export default function login() {
  return (
    <div style={{backgroundImage: 'url(ab.jpg)'}} className="h-screen w-screen flex flex-col justify-center items-center bg-cover ">
        
        <div className='backdrop-blur-md border-white rounded-lg w-96 h-80 border-4 flex flex-col justify-center align-center items-center space-y-32 '>
           <form className='flex flex-col justify-center items-center space-y-3 '>
            
            <h1 className="text-white text-5xl ">Login</h1><br/>
            <div className='flex flex-row'>
                <h3 className='text-white w-24'>username:</h3>
                <input placeholder="username" label="username" type="text"/>
            </div><br/>
            <div className='flex flex-row'>
                <h3 className='text-white w-24'>password</h3>
                <input placeholder="password" label="password" type="password"/>
            </div><br/>
            <button className='text-white bg-transparent border-white border-2 rounded-lg w-36 h-10'>submit</button>
           <Link href="/signup">
           <button className=" text-white ">New user?</button>
           </Link>
           </form>
          


        </div>
    </div>

  )
}
