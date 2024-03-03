import React from 'react'

import disney from "../assets/images/disney.png";
import marvel from "../assets/images/marvel.png";
import nationalG from "../assets/images/nationalG.png";
import pixar from "../assets/images/pixar.png";
import starwar from "../assets/images/starwar.png";

import disneyv from "../assets/videos/disney.mp4";
import marvelv from "../assets/videos/marvel.mp4";
import nationalGv from "../assets/videos/national-geographic.mp4";
import pixarv from "../assets/videos/pixar.mp4";
import starwarv from "../assets/videos/star-wars.mp4";

function ProductionHouse() {
    const Productionhouselist=[
        {
            id:1,
            image:disney,
            video:disneyv
        },
        {
            id:2,
            image:marvel,
            video:marvelv
        },
        {
            id:3,
            image:nationalG,
            video:nationalGv
        },
        {
            id:4,
            image:pixar,
            video:pixarv
        },
        {
            id:5,
            image:starwar,
            video:starwarv
        }
    ]
  return (
    <div className='flex justify-center gap-2 md:gap-5 p-2 px-5 md:px-16'>
        {Productionhouselist.map((item)=>(
            <div className='border-[2px] border-gray-400 p-0 rounded-lg hover:scale-110 relative transition-all duration-300'>
                <video src={item.video} autoPlay loop playsInline muted className='absolute top-0 rounded-lg 
                z-0 opacity-0 shadow-md shadow-gray-200 hover:opacity-50'></video> 
                <img src={item.image} className='w-full z-[1]'/>
            
            </div>
        )
        )}
    </div>
  )
}

export default ProductionHouse