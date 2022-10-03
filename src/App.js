import {  Route, Routes } from 'react-router-dom';
import React from 'react'
import Nav from './Nav';
import Homepage from './pages/Homepage';
import Signup from './pages/Signup';


const App = () => {
    return (
        <div>
            <Nav />
            
                <Routes>
                    <Route path='/' exact element={<Homepage />} />
                    <Route path='/signup' element={<Signup />} />
                </Routes>
            

        </div>
    )
}

export default App