

export default function signup() {


  return (
    <>
    <div style={{backgroundImage: 'url(ab.jpg)'}} className="h-screen w-screen flex flex-col justify-center items-center bg-cover ">
    <div className=' border-white backdrop-blur-md rounded-lg w-96 h-96 border-4 flex flex-col justify-center align-center items-center space-y-32 '>
       <form className='text-zinc-950 flex flex-col justify-center items-center space-y-3 '>
        
        <h1 className="text-white text-5xl ">Signup</h1><br/>
        <div className='flex flex-row'>
            <h3 className='text-white w-24'>Name:</h3>
            <input placeholder="name" type="text" />
        </div><br/>
        <div className='flex flex-row'>
            <h3 className='text-white w-24'>Email:</h3>
            <input placeholder="username" label="username" type="email" />
        </div><br/>
        <div className='flex flex-row'>
            <h3 className='text-white w-24'>password</h3>
            <input placeholder="password" label="password" type="password" />
        </div><br/>
        <button className='text-white bg-transparent border-white border-2 rounded-lg w-36 h-10'/>
       </form>


    </div>
</div>
</>
  )
}
