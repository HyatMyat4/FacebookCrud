import React from 'react'
import  loader  from './assets/loader.svg';
const Loder = ({title}) => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
    <img src={loader} alt="loader" className="w-32 h-32 object-contain" />
    <h1 className=" text-2xl text-white mt-[20px] animate-slideleft">{title || 'Loading'}</h1>
  </div>
  )
}

export default Loder