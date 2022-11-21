import React from 'react';
import { useDispatch , useSelector } from 'react-redux'
import { BsFillVolumeUpFill, BsVolumeDownFill, BsFillVolumeMuteFill } from 'react-icons/bs';
import { OpeNClose } from '../servicesApi/PlayerSlice'
const VolumeBar = ({ value, min, max, onChange, setVolume }) => {
  const dispatch = useDispatch() 
  return(
  <div className="hidden lg:flex flex-1 items-center justify-end">
   
    {value <= 1 && value > 0.5 && <BsFillVolumeUpFill size={25} color="#FFF" onClick={() => setVolume(0)} />}
    {value <= 0.5 && value > 0 && <BsVolumeDownFill size={25} color="#FFF" onClick={() => setVolume(0)} />}
    {value === 0 && <BsFillVolumeMuteFill size={25} color="#FFF" onClick={() => setVolume(1)} />}
    <input
      type="range"
      step="any"
      value={value}
      min={min}
      max={max}
      onChange={onChange}
      className="2xl:w-40 lg:w-32 md:w-32 h-1 ml-2"
    />
    <i 
     onClick={()=> dispatch(OpeNClose(false)) }
    class="fa-solid fa-x ml-[40px] absolute top-[5px] right-[10px] text-[20px] text-rose-500 py-[7px] px-[10px] cursor-pointer hover:bg-[black] rounded-full bg-[#00000062]"></i>
  </div>
  )
  };

export default VolumeBar;
