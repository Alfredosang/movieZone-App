import React from 'react'
// import signuppic from  '../assets/signuppic.jpg'

const Signup = () => {
  return (
    <div className='flex justify-center mx-auto'>
      {/* <img src={signuppic} alt='signuppic' className='w-full h-full object-cover' /> */}
      <div className='bg-black/80 fixed  top-0 left-0 w-full h-screen'></div>
      <div className='bg-black shadow-none md:shadow-md shadow-red-600 w-[500px] h-[700px] rounded-lg z-50 mt-[200px] absolute'>
        <div className='text-white font-bold text-3xl px-16'>Sign Up</div>
        <form className='flex flex-col justify-items-center px-10'>
          <input type='email' placeholder='Email' autoComplete='email' className='py-4 px-2 m-5 rounded-md'></input>
          <input type='password' placeholder='Password' autoComplete='password' className='py-4 px-2 m-5 rounded-md'></input>
          <input type='password' placeholder='Confirm Password' autoComplete='password' className='py-4 px-2 m-5 rounded-md'></input>
          <button className='bg-red-600 text-white py-5 m-5 rounded-md'>Submit</button>
        </form>

      </div>

    </div>
  )
}

export default Signup