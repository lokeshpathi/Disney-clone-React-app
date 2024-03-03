import React, { useEffect, useState, useRef } from 'react';
import GlobalApi from '../Services/GlobalApi'
import { HiChevronLeft,HiChevronRight } from "react-icons/hi";
import axios from "axios";
const BASE_IMAGEURL= "https://image.tmdb.org/t/p/original";

// https://image//tmdb.org/t/p/original/4l65BWqJBl7hBwdIwp2nQdwsOuw.jpg

export default function Slider() {
    const [movieList,setMovieList]=useState([]);
    const elementRef = useRef();

    useEffect(()=>{
     getTrendingMovies();
    },[])
    
    const getTrendingMovies=()=>{
        GlobalApi.getTrendingVideos.then(resp=>{
          console.log(resp.data.results)
          setMovieList(resp.data.results)
        });
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
                  <HiChevronLeft className='hidden md:block  text-white text-[30px] 
                  absolute top-[155px] left-[80px] cursor-pointer' onClick={()=>SliderLeft(elementRef.current)}/>
                  <HiChevronRight className='hidden md:block text-white text-[30px]
                   absolute top-[155px] right-[80px] cursor-pointer' onClick={()=>SliderRight(elementRef.current)}/>
                
              <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth' ref={elementRef}>
                {movieList.map((item,index)=>(
                  console.log(item.backdrop_path),
                  <img src={BASE_IMAGEURL+item.backdrop_path} alt="logo"
                  className='min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100' />
                ))}
              </div>
          </div>
    
  )
}
