import {  Route, Routes } from 'react-router-dom';
import React from 'react'
import Nav from './Nav';
import Homepage from './pages/Homepage';
import Signup from './pages/Signup';
import Signin from './pages/Signin';


const App = () => {
    return (
        <div>
            <Nav />
            
                <Routes>
                    <Route path='/' exact element={<Homepage />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/signin' element={<Signin />} />
                </Routes>
            

        </div>
    )
}

export default App