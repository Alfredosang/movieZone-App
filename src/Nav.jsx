import React from 'react'
import { Link } from 'react-router-dom'
// import Homepage from './pages/Homepage'
// import Signup from './pages/Signup'

const Nav = () => {
    return (
        <div className='w-full px-10 pt-10 md:px-24 mb-10 flex justify-between fixed bg-black/70 top-0 z-50 mx-auto'>
            <div>
                <Link to='/' className='text-white'><h1 className='text-4xl  text-white flex justify-start  mb-10' >Movie <span className='font-bold text-4xl text-red-600'>Zone</span></h1></Link>
            </div>
            <div className='hidden md:flex'>
                <Link to='/signin'><button className='px-5 py-3 rounded-md text-white font-bold hover:text-red-600'>Sign in</button></Link>
                <Link to='/signup' className='text-white'><button className='bg-red-600 px-5 h-12 py-3 rounded-full text-white font-bold hover:bg-white hover:text-black cursor-pointer'>Sign up</button></Link>
            </div>
            
        </div>

    )
}

export default Nav