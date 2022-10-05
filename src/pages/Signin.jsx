import React from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
    return (
        <div className='flex justify-center mx-auto'>
            {/* <img src={signuppic} alt='signuppic' className='w-full h-full object-cover' /> */}
            <div className='bg-black/80 fixed  top-0 left-0 w-full h-screen'></div>
            <div className='bg-black shadow-none md:shadow-md shadow-red-600 w-[500px] h-[700px] rounded-lg z-50 mt-[200px] absolute'>
                <div className='text-white font-bold text-3xl px-16'>Sign in</div>
                <form className='flex flex-col justify-items-center px-10'>
                    <input type='email' placeholder='Email' autoComplete='email' className='py-4 px-2 m-5 rounded-md'></input>
                    <input type='password' placeholder='Password' autoComplete='password' className='py-4 px-2 m-5 rounded-md'></input>
                    <button className='bg-red-600 text-white py-5 m-5 rounded-md hover:bg-white hover:text-black font-bold'>Submit</button>

                </form>
                <div className='text-white px-16'>
                    <Link to='/signup'><p className='text-white'>Don't have an account ? <span className='text-red-600 font-bold hover:text-white cursor-pointer'> Sign up here</span></p></Link>
                </div>

            </div>

        </div>
    )
}

export default Signin