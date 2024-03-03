import React from 'react'
import file from '../file'
import MovieList from './MovieList'
function GenreMovieList() {
  return (
    <div>
        {file.genre.map((item,index)=>(
            <div  className='p-8  md:px-16'>
                <h2 className='text-[20px] mb-[5px] text-white'>{item.name}</h2>
                <MovieList count={index%3==0?1:0} genreId={item.id}/>
            </div>
        ))}
   
    </div>
  )
}

export default GenreMovieList