import React from 'react'

export default function HeaderMenu(props) {
  return (
    <div className='text-white flex items-center space-x-2 text-[18px] font-semibold cursor-pointer'>
        <props.icon/>
        <h1 className=' hover:underline  underline-offset-8 '>{props.name}</h1>
    </div>
  )
}
