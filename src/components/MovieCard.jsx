import React from 'react'
const BASE_IMAGEURL= "https://image.tmdb.org/t/p/original";
function MovieCard({image}) {
  return (
    <div>
        <img src={BASE_IMAGEURL+image} alt="image" 
        className='min-w-[110px] md:min-w-[200px]
        rounded-lg cursor-pointer hover:border-[3px] border-gray-400
         hover:scale-110 transition-all duration-150 ease-in z-10' />
    </div>
  )
}

export default MovieCard