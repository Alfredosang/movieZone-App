import React from 'react'
// import signuppic from '../assets/signuppic.jpg'
import { useParams } from 'react-router-dom'

const Details = ({ popular }) => {
    const mov = popular;
    console.log(mov);
    const { id } = useParams();
    return (
        <div className='bg-black flex justify-center items-center mt-[150px] p-10'>

            {
                // popular.filter((movie) => movie.id === id).map((movie,index) =>
                popular.filter((movie) => {
                    if (movie.id == id) {
                        return movie
                    }
                }).map((movie) =>

                (
                    <div className='bg-red-600 md:w-[1000px] md:h-[700px]  flex flex-col md:flex-row ' >

                        
                            <div key={movie.id}>
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='more details' className='w-[500px] h-[700px] object-cover object-top' />

                            </div>


                            <div className='p-10 space-y-5 ml-10 w-[400px]'>
                                <h2 className='text-white font-bold text-2xl '>{movie.title}</h2>
                                <p className=' text-white '>{movie.overview}</p>

                            </div>
                        
                    </div>

                ))



            }


        </div>
    )
}

export default Details