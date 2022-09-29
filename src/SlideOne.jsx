import React from 'react'
import { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SlideOne = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay:true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };



const [pop, setPop] = useState([]);

useEffect(() => {

    popularMovies();

}, []);

const popularMovies = async () => {
    const pageNum = Math.floor(Math.random() * 100) + 1;
    const base = `https://api.themoviedb.org/3/movie/popular?api_key=17e5955c532c9dba692872d39ea34860&page=${pageNum}`;
    const response = await fetch(base);
    const data = await response.json();



    setPop(data.results.slice(0, 18));

}


return (
    <div className='container mx-auto'>
        <div className="flex justify-center px-0">

            <h2 className='text-2xl  text-white  border-b-4 border-red-600 pb-3 mb-5 hover:border-b-white'>Most Viewed Movies</h2>

        </div>
        <Slider {...settings}>
            {



                pop.map((movie) => {
                    return (


                        <div key={movie.id} className="  mb-16   h-[700px] rounded-xl p-10   ">
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie poster" className=" p-5 hover:scale-105 duration-200 overflow-hidden  w-full object-cover object-center " />

                            <div className="flex flex-col items-center my-2  m-5 ">
                                <h3 className="font-bold text-white text-md hover:text-red-500 justify-center">{movie.title}</h3>
                                
                            </div>


                        </div>



                    );
                })
            }
        </Slider>

    </div>
)
}

export default SlideOne
