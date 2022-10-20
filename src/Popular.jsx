
import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';

// import { useEffect, useState } from 'react';



const App = ({popular}) => {
  // console.log(popular.movie.id)
  


  // const [popular, setPopular] = useState([]);

  // useEffect(() => {

  //   popularMovies();

  // }, []);

  // const popularMovies = async () => {
  //   const pageNum = Math.floor(Math.random() * 50) + 1;
  //   const base = `https://api.themoviedb.org/3/movie/popular?api_key=17e5955c532c9dba692872d39ea34860&page=${pageNum}`;
  //   const response = await fetch(base);
  //   const data = await response.json();



  //   setPopular(data.results.slice(0,18));

  // }







  return (
    <div className="App mx-auto">


      <div className="container mx-auto">
        <div className="flex justify-center px-0">

          <h2 className='text-2xl  text-white  border-b-4 border-red-600 pb-3 mb-10 hover:border-b-white'>Popular Movies</h2>

        </div>

        <div className='card-box container px-16 grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6   mx-auto'>
          {
              
            popular.map((movie) => { console.log(movie,typeof(movie.id)) 
              return (
                <div key={movie.id} className="h-[400px]  bg-red-600 backdrop-blur-md  mb-16  relative">
                  <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="movie poster" className="h-80 hover:scale-105 duration-200 w-full object-cover object-center  overflow-hidden " />

                  <div className="flex flex-col items-center my-2 absolute bottom-[-3] m-5 ">
                    <Link to={`/details/${movie.id}`}><h3 className="font-bold text-white text-md hover:text-red-500 justify-center text-clip overflow-hidden ... ">{movie.title}</h3></Link>
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








    </div>
  );
}

export default App;
