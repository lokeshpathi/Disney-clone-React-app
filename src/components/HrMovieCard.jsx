import React from 'react'
const BASE_IMAGEURL= "https://image.tmdb.org/t/p/original";

function HrMovieCard({image,title}) {
  return (
    <div className='hover:scale-110  transition-all duration-150 ease-in'>
       <img src={BASE_IMAGEURL+image} alt="image" 
        className='min-w-[110px] md:min-w-[300px]
        rounded-lg cursor-pointer hover:border-[3px] border-gray-400
          z-10' />
       <h2 className='text-white mt-2'>{title}</h2>
     </div>
  )
}

export default HrMovieCard