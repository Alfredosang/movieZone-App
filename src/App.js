import {  Route, Routes } from 'react-router-dom';
import React from 'react'
import Nav from './Nav';
import Homepage from './pages/Homepage';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Details from './pages/Details';
import { useEffect, useState } from 'react';


const App = () => {

    const [popular, setPopular] = useState([]);

    useEffect(() => {
  
      popularMovies();
  
    }, []);
  
    const popularMovies = async () => {
      const pageNum = Math.floor(Math.random() * 50) + 1;
      const base = `https://api.themoviedb.org/3/movie/popular?api_key=17e5955c532c9dba692872d39ea34860&page=${pageNum}`;
      const response = await fetch(base);
      const data = await response.json();
  
  
  
      setPopular(data.results.slice(0,18));
  
    }
  

    return (
        <div>
            <Nav />
            
                <Routes>
                    <Route path='/' exact element={<Homepage popular={popular} />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/signin' element={<Signin />} />
                    <Route path='/details/:id' element={<Details  popular={popular}/>} />
                </Routes>
            

        </div>
    )
}

export default App