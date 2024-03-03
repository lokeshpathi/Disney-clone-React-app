import React, { useRef } from 'react'
import {useEffect,useState} from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard';
import HrMovieCard from './HrMovieCard';
import { HiChevronLeft,HiChevronRight } from "react-icons/hi";

function MovieList(props) {
  const [movieList,setMovieList]=useState([]);
  const elementRef=useRef();

      useEffect(()=>{
        fun();
      },[])

      const fun=()=>{
        GlobalApi.getMovieByGenreId(props.genreId).then(resp=>{
          console.log(resp.data.results)
          setMovieList(resp.data.results)
        })

      }
      const SliderLeft=(element)=>{
        element.scrollLeft-=window.innerWidth-110;
      }
      const SliderRight=(element)=>{
       element.scrollLeft+=window.innerWidth-110;
       console.log(window.innerWidth)
      }

      return (
        <div className='relative'>
             <HiChevronLeft className={`hidden md:block  text-white text-[50px] z-10
             absolute ${props.count==1?'top-[85px]':'top-[155px]'} left-[80px] cursor-pointer`} onClick={()=>SliderLeft(elementRef.current)}/>
             <HiChevronRight className={`hidden md:block text-white text-[50px] z-10
             absolute ${props.count==1?'top-[85px]':'top-[155px]'} right-[80px] cursor-pointer`} onClick={()=>SliderRight(elementRef.current)}/>
            <div className='flex space-x-5 shrink-0 py-5 px-4 overflow-x-auto scrollbar-none' ref={elementRef}>
             {movieList.map((item,index)=>(
              props.count==1?<HrMovieCard title={item.title} image={item.backdrop_path}/>:<MovieCard image={item.poster_path}/>
             )
              )}
            </div>
        </div>

      )
    }

export default MovieList