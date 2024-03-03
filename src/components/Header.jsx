import React from 'react';
import { useState } from 'react';
import logo from '../assets/images/logo.png';
import anisha from '../assets/images/avatar-anisha.png';
import HeaderMenu from './HeaderMenu';

import {HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlus,
  HiPlayCircle,
  HiTv} from "react-icons/hi2";
  
import {HiDotsVertical} from "react-icons/hi";

export default function Header() {
  const [toggle,toggleSetter]=useState(false);

  const menu=[
    {
      name:'HOME',
      icon:HiHome
    },
    {
      name:'SEARCH',
      icon:HiMagnifyingGlass
    },
    {
      name:'WATCH LIST',
      icon:HiPlus
    },
    {
      name:'ORIGINALS',
      icon:HiPlayCircle
    },
    {
      name:'SERIES',
      icon:HiTv
    },
  ];
  
  return (
  <div className='flex items-center justify-between p-5'>
        <div className='flex items-center space-x-5  '>
            <img src={logo} alt="logo" className='w-[80px] md:w-[112px] object-cover ' />

            <div className='hidden md:flex space-x-8'>
            {menu.map(item=><HeaderMenu name={item.name} icon={item.icon} />)}
            </div>

            {/* Another nav block for small screens */}

            <div className='flex md:hidden space-x-5'>
                {menu.map((item,index)=> index<3 && <HeaderMenu name={' '} icon={item.icon} /> )}

                <div className="md:hidden" onClick= {()=>toggleSetter(prev=>!prev)}>
                    <HeaderMenu name={' '} icon={HiDotsVertical}/>
                    {toggle?<div className="absolute m-[1px] space-y-3 rounded-md mt-3 bg-[#121212] border-gray-700 border-[1px] p-3 px-5 py-4">
                    {menu.map((item,index)=> index>2 && <HeaderMenu name={item.name} icon={item.icon} />)}
                    </div>:null}
                </div>
            </div>
        </div>
        <img src={anisha} alt="anisha" className='w-[40px]' />
  </div>
  )
};
