import React from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { ChangeColourengin } from '../HomeMain/PostContainer/ActionSlice'
import { ChangeColourC } from '../HomeMain/PostContainer/ActionSlice'
import { Link } from 'react-router-dom'
import { OnSearchEngin } from './services/CouterMovieSlice'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { SideBarOpenloseEngin } from  './services/CouterMovieSlice'
import { sideOpenCloseC } from  './services/CouterMovieSlice'
const LeftWatch = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const OpenClose =useSelector(sideOpenCloseC)
const [temporyvalue , setTemporyvalue ] = useState('')
    const ChangeName = useSelector(ChangeColourC)
const onSearch = (e) => {
setTemporyvalue(e.target.value)
}
const goadd = (e) => {
    if(e.key === 'Enter') {
        console.log(temporyvalue,'temporyvalue')
        dispatch(OnSearchEngin(temporyvalue))
        navigate('Search')
        setTemporyvalue('')
        }

}
const Clear = (e) => {
    e.target.value = ''
    setTemporyvalue('')    
    dispatch(OnSearchEngin(temporyvalue))
    console.log('clear')
   
 }
     console.log(OpenClose)
  return (
    <div className={` absolute 4se:static animate-slideleft2 z-50  4se:animate-none w-[60vw] sm:w-[360px] h-screen  border-r-[1px] bg-[#242526] border-[#54545477]  ${OpenClose?  ' hidden  4se:inline' : 'inline' } `} id='LeftBar'>
        <div className=' w-[92%] h-[60px] m-auto flex flex-row items-center justify-between '>
            <h1 className='font-bold text-[22px]'>Watch</h1>
            <span onClick={() => dispatch(SideBarOpenloseEngin(true))}><i className="fa-solid fa-x py-[8px] px-[10px] hover:bg-[#646262d7] bg-[#64626255] text-[16px] rounded-full"></i></span>
        </div>
        <div className='w-[92%] h-[38px] m-auto bg-[#3A3B3C] flex flex-row items-center rounded-full'>
            <i className="fa-solid fa-magnifying-glass ml-[15px] mr-[4px] text-[15px]"></i>
           
            <input
            type={'text'}
            placeholder='Search videos'
            className='text-[15px] w-[97%] h-[100%] rounded-full bg-transparent outline-none pl-[5px]'
            onChange={(e) => onSearch(e)}
            onKeyPress={ (e) => goadd(e)}
            onClick={(e) => Clear(e)}
            />
           
        </div>
        <Link to='Home'>
        <div className={`w-[96%] h-[50px] m-auto  flex flex-row items-center mt-[15px] rounded-[8px]  hover:bg-[#3A3B3C] cursor-pointer ${ChangeName === 1 ? 'bg-[#3A3B3C]' : 'bg-transprent' } `} id='bgblue' onClick={()=>dispatch(ChangeColourengin(1))}>
            <span className={` text-[23px] px-[6px] py-[2px]  rounded-full m-[10px] ${ChangeName === 1 ? 'bg-[#1877F2]' : 'bg-[#4E4F50]' } `} id='blue'><i className="fa-brands fa-youtube "></i></span>
            <span>Home</span>
        </div>
        </Link>
        <Link to='Live'>
        <div className={`w-[96%] h-[50px] m-auto  flex flex-row items-center  rounded-[8px] hover:bg-[#3A3B3C] cursor-pointer ${ChangeName === 2 ? 'bg-[#3A3B3C]' : 'bg-transprent' } `} id='bgred'   onClick={()=>dispatch(ChangeColourengin(2))} >
            <span className={`text-[20px] px-[6px] py-[2px] bg-[#4E4F50] rounded-full m-[10px] ${ChangeName === 2 ? 'bg-rose-600' : 'bg-[#4E4F50]' }`} id='red'><i className="fa-solid fa-video"></i></span>
            <span>Live</span>
        </div>
        </Link>
        <Link to='Shows'>
        <div className={`w-[96%] h-[50px] m-auto  flex flex-row items-center  rounded-[8px] hover:bg-[#3A3B3C] cursor-pointer ${ChangeName === 3 ? 'bg-[#3A3B3C]' : 'bg-transprent' } `} id='bggreen' onClick={()=>dispatch(ChangeColourengin(3))}>
            <span className={`text-[21px] px-[8px] py-[2px] bg-[#4E4F50] rounded-full m-[10px] ${ChangeName === 3 ? 'bg-[#2ABBA7]' : 'bg-[#4E4F50]' }`} id='green'><i className="fa-solid fa-clapperboard"></i></span>
            <span>Shows</span>
        </div>
        </Link>
        <Link to='SaveVideo'>
        <div className={`w-[96%] h-[50px] m-auto  flex flex-row items-center  rounded-[8px] hover:bg-[#3A3B3C] cursor-pointer ${ChangeName === 4 ? 'bg-[#3A3B3C]' : 'bg-transprent' }`} id='bgyellow' onClick={()=>dispatch(ChangeColourengin(4))}>
            <span className={` text-[21px] py-[1px] px-[9px] bg-[#4E4F50] rounded-full m-[10px] ${ChangeName === 4 ? 'bg-[#F7B928]' : 'bg-[#4E4F50]' } `} id='yellow'><i className="fa-solid fa-bookmark"></i></span>
            <span>Saved videos</span>
         
        </div>
        </Link>  
    </div>
  )
}

export default LeftWatch