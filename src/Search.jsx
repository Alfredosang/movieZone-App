import React from "react";
import { useState } from 'react';


const Search = () => {

    const [output, setOutput] = useState([]);
    const [input, setInput] = useState('');
    const [result, setResult] = useState(false);

    const handleInput = (event) => {
    
        setInput(event.target.value);
        console.log(input);


    };



    const handleSearch = async (input) => {


        const base = `https://api.themoviedb.org/3/search/movie?api_key=17e5955c532c9dba692872d39ea34860&query=${input}`;
        const response = await fetch(base);
        const data = await response.json();


        setOutput(data.results.slice(0, 18));
        setResult(true);

    }







    return (
        <div className="App  mt-20 mx-auto " >
            
            <nav className='justify-center my-0 mx-auto '>

                <h1 className='text-5xl  text-white flex justify-center mb-5' >Movie <span className='font-bold text-5xl text-red-600'>Zone</span></h1>
                <div className="input flex justify-center">

                    <input placeholder='Search Movie' type='text' name='searchBar' className='bg-gray-200 h-12 rounded-l-full flex justify-center w-3/5  p-3 text-md' onChange={handleInput} />
                    {/* <img src={search} alt='Search bar'/> */}
                    <button className=' bg-red-500 text-white px-5 h-12 py-3 w-36 rounded-r-full font-bold hover:bg-red-900' onClick={() => handleSearch(input)} onSubmit={() => handleSearch(input)} >Search</button>

                </div>
            </nav>

            <div className="container mx-auto">
                <div className="flex justify-center px-0">
                    { result? <h2 className=' text-2xl  text-white mt-10 border-b-4 border-red-600 pb-3 mb-5 hover:border-b-white'>Search Results</h2> : null }

                    

                </div>

                <div className='card-box container py-5 px-16 grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6   mx-auto'>
                    {

                        output.map((movie) => {
                            return (
                                <div key={movie.id} className="h-80 shadow bg-white rounded-xl mb-16 shadow-red-400 relative">
                                    <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="movie poster" className="h-80 hover:scale-105 duration-200 w-full object-cover object-center rounded-xl overflow-hidden" />

                                    <div className="flex flex-col items-center my-2 absolute bottom-[-3] m-5 ">
                                        <h3 className="font-bold text-white text-md hover:text-red-500 justify-center">{movie.title}</h3>
                                        {/* <a href="viewinfo" className="text-red-700 font-bold">View info</a> */}
                                    </div>
                                    <div className='absolute bg-red-600 opacity-80 rounded-full shadow px-5 top-0 m-3'>
                                        <span className='text-white fonts-bold'>{movie.release_date.slice(0,4)}</span>
                                    </div>

                                </div>



                            );
                        })
                    }




                </div>



            </div>
        </div>)

}
export default Search;