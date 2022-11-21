
import React from 'react'
import { useState , useEffect } from 'react'
import Profail from '../img/Profail.png'
const HomeLeft = () => {
const [ logo , setlogo ]=useState([])
 const LeftLogo =[
{
   "id" :1,
   "img":Profail,
   "Name":"Htet Myat"
},
{
"id" :2,
"img":"https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png",
"Name":"Friends"
},
{
  "id" :3,
  "img":"https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png",
  "Name":"Watch"
 },
 {
  "id" :4,
  "img":"https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/he-BkogidIc.png",
  "Name":"Memories"
 },
 {
  "id" :5,
  "img":"https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png",
  "Name":"Groups"
 },
 {
  "id" :6,
  "img":"https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png",
  "Name":"Saved"
 },
 {
  "id" :7,
  "img":"https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png",
  "Name":"Pages"
 },
 {
  "id" :8,
  "img":"https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/qfMB40PdgWb.png",
  "Name":"Events"
 },
 {
  "id" :9,
  "img":"https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/eECk3ceTaHJ.png",
  "Name":"Most recent",
  "none":true,
 },
  {
  "id" :11,
  "img":"https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/CwKNCefmHON.png",
  "Name":"Ad Center",
  "none":true,
 },
 {
  "id" :12,
  "img":"https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/DHBHg9MEeSC.png",
  "Name":"Ads Manager",
  "none":true,
 },
 {
  "id" :13,
  "img":"https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/9s7nhm949yb.png",
  "Name":"Community Help",
  "none":true,
 },
 {
  "id" :14,
  "img":"https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/5rR6LRpNc5u.png",
  "Name":"COVID-19 information Center",
  "none":true,
 },
 {
  "id" :15,
  "img":"https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/vxMUnHhu6Do.png",
  "Name":"Emotional Healt",
  "none":true,
 },
 {
  "id" :16,
  "img":"https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/GJ4EaivDaSj.png",
  "Name":"Facebook Pay",
  "none":true,
 },
 {
  "id" :10,
  "img":"https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/mAnT0r8GSOm.png",
  "Name":"Favourites",
  "none":true,
 },
 {
  "id" :17,
  "img":"https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/n2vd2VduYc1.png",
  "Name":"Fundraisers",
  "none":true,
 },
 {
  "id" :18,
  "img":"https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/fGWbDwbx9W4.png",
  "Name":"Gaming video",
  "none":true,
 },
 {
  "id" :19,
  "img":"https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/BNA7dRpTdeH.png",
  "Name":"Live video",
  "none":true,
 },
 {
  "id" :20,
  "img":"https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/4Y9Xi2D3hJv.png",
  "Name":"Messenger",
  "none":true,
 },
 {
  "id" :21,
  "img":"https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/1Xvrz50fHMF.png",
  "Name":"Messenger Kids",
  "none":true,
 },
 {
  "id" :22,
  "img":"https://static.xx.fbcdn.net/rsrc.php/v3/yt/r/PObY9OA5lvJ.png",
  "Name":"Play games",
  "none":true,
 },
 {
  "id" :23,
  "img":"https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/8OasGoQgQgF.png",
  "Name":"Recent ad activity",
  "none":true,
 },
 ]
const Group =[
  {
    'image':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKHQ5w5YQhBYjN5MIHVkeUjno-ojy7kwaxHQ&usqp=CAU',
    'Name':'MSquare Programming'
  },
  {
    'image':'https://images-platform.99static.com//Tdvnc9WurW20Byub_9gpnZC-FLY=/0x0:960x960/fit-in/500x500/99designs-contests-attachments/76/76659/attachment_76659193',
    'Name':'Programming with meme'
  },
]

const DropDowl =() =>{
console.log('it working')
const Filterlogo  =LeftLogo.filter((Logo)=> Logo.id < 9)
setlogo(Filterlogo)
}


const seeMore = (e) => {
  const SEEMOre =document.getElementById('SeeMore')
  const seeless =document.getElementById('seeless')

  if( e === 'SeeMore'){
    SEEMOre.style.display='none'
    seeless.style.display='inline'
    const Filterlogo  =LeftLogo.filter((Logo)=> Logo.id < LeftLogo.length+1)
  setlogo(Filterlogo)
  }else{
    SEEMOre.style.display='inline'
    seeless.style.display='none'
    const Filterlogo  =LeftLogo.filter((Logo)=> Logo.id < 9)
    setlogo(Filterlogo)
  }
}
useEffect(() => {
  DropDowl()
}, [] )

  return (
    <div className='w-[350px] h-screen  overflow-y-scroll hidden  xl:block'  id='scroolbar1' >
      {logo.map((item)=>(
        <div key={item.Name} className='w-[98%] h-[55px]  flex flex-row items-center ml-[5px] hover:bg-[#303031ed] rounded cursor-pointer'>
            <img src={item.img} className='rounded-full ml-[10px] w-[35px] h-auto'
            />
            <span className='font-bold  ml-[13px]'>{item.Name}</span>
        </div>
      ))}  
        <div   className=' select-none  w-[98%] h-[55px]  flex flex-row items-center ml-[5px] hover:bg-[#303031ed] rounded cursor-pointer'>
             <div className='hidden w-[100%] h-[100%]'  onClick={()=>seeMore('seelass')} id='seeless'> 
                <div className='w-[100%] h-[100%] flex flex-row items-center'>
                    <i className="fa-solid fa-angle-up text-[20px] py-[8px] px-[9px] rounded-full bg-[#6966668d]
                      ml-[10px] 
                      "></i>
                      <span className='font-bold  ml-[13px]'>See less</span>
                 </div>
             </div>
             <div className='w-[100%] h-[100%] ' onClick={()=>seeMore('SeeMore')} id='SeeMore'>
               <div className='w-[100%] h-[100%] flex flex-row items-center'>
                  <i className="fa-solid fa-chevron-down text-[20px] py-[8px] px-[9px] rounded-full bg-[#6966668d]
                  ml-[10px]"></i>
                  <span className='font-bold  ml-[13px]'>See More</span>
               </div>   
             </div>
        </div>
        <div className='m-[15px]  border-b border-[#68686856]'></div>

        <div className='w-[98%] h-[40px] flex flex-row item-center justify-between'>
           <span className='ml-[10px] font-bold'>
              Your shortcuts
            </span>
          <span className='text-blue-600 h-[28px] rounded text-[13px] mr-[10px] p-[5px] hover:bg-[#6a67673f]'>Edit</span>
        </div>
        <div className='w-[100%] h-auto mb-[100px]'>
              {Group.map((item)=>(
              <div key={item.Name} className='w-[98%] h-[55px]  flex flex-row items-center ml-[5px] hover:bg-[#303031ed] rounded cursor-pointer'>
                  <img src={item.image} className=' ml-[10px] w-[40px] rounded'
                  />
                  <span className='font-bold  ml-[13px]'>{item.Name}</span>
              </div>
            
            ))} 
        </div>
        <div className=' w-[96%] ml-[10px] mb-[70px]'>
        <a className='text-[13px]' href="https://www.facebook.com/privacy/policy/?entry_point=comet_dropdown" >Privacy  ·</a>
          <a className='text-[13px]' href="https://www.facebook.com/policies?ref=pf" > Terms  ·</a>
          <a className='text-[13px]' href="https://www.facebook.com/business/" > Advertising  ·</a>
          <a className='text-[13px]' href="https://www.facebook.com/help/568137493302217" > Ad choices .</a>
          <a className='text-[13px]' href="https://www.facebook.com/policies/cookies/" > Cookies .</a>
          <span className='text-[13px]'>More · Meta © 2022</span>
        </div>
    </div>
  )
}

export default HomeLeft