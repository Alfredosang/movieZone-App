import React from 'react'
// import ReactPlayer from 'react-player'
// import signuppic from '../assets/signuppic.jpg'
import { useParams } from 'react-router-dom'

const Details = ({ popular }) => {
    // const mov = popular;
    // console.log(mov);
    const { id } = useParams();
    
    
    return (
        <div className='bg-black flex justify-center items-center mt-[150px] p-10'>
            {/* <ReactPlayer url='https://www.themoviedb.org/movie/859041/watch?locale=BO' /> */}

            {
                popular.filter((movie) => movie.id === parseInt(id)).map((movie) =>
                

                (
                    <div className=' w-[350px] md:w-[1000px] md:h-[700px]  flex flex-col md:flex-row justify-center' >

                        
                            <div key={movie.id}>
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='more details' className='w-[350px] h-[350px] md:w-[500px] md:h-[700px] object-cover object-top' />

                            </div>


                            <div className='p-10 space-y-5 md:ml-10 w-[400px]'>
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