import React from 'react'
import Room from '../img/s3.png'
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
const Createroom = () => {
  return (
    <div className='w-[100%] h-[70px] rounded flex flex-row items-center bg-[#262727]'>
        <div className='min-w-[160px]  flex flex-row items-center m-[16px] border-[3px] py-[5px] px-[10px] border-[#263951] rounded-full'>
            <img src={Room}  className='w-[25px]'  />
            <span className='ml-[8px] text-[#58A3FF]'>Create Room</span>
        </div>
    <Swiper
      slidesPerView={8}
      spaceBetween={10}
      slidesPerGroup={8}     
      pagination={{
        clickable: true,
      }}
      
      
      className="mySwiper cursor-pointer select-none"
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
     
    </Swiper>

    </div>
  )
}

export default Createroom