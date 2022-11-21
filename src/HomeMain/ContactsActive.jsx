import React from 'react'
import { useState } from 'react'
import Any from  '../img/Any.png'
const ContactsActive = () => {
    const [ Friends , setFriends  ] =useState([
        {
          id:'1',
          "FriendsImg" : Any,
          "FriendsName": "Kyaw Thura",
          "Active":'now',
          "StoryS":"true", 
          "postS":"true",  
          "underShowT":"true", 
          "postTime":"7 h",
          "PostText":"",
          "Postimg":"https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/306792136_3004276559718136_7045360959754271310_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=13ned1chbAoAX-11zZ6&_nc_ht=scontent-sin6-4.xx&oh=00_AT8iyIlQHkY6id1QMoGemmmA2cBkTxzbcQsqMEpUFT80UQ&oe=6331AFE3",
          "React":"302",
          "comment":"23",
          "share":"32"
          },
          {
            id:'2',
            "FriendsImg" : Any,
            "FriendsName": "Yair Min Oo",
            "Active":'now',
            "StoryS":"false", 
            "storyN":'not',
            "postS":"true",
            "underShowT":"true", 
            "postTime":"7 d",
            "PostText":"🤦‍♂️",
            "Postimg":"https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/307846166_183178924197453_5366035577964380851_n.jpg?stp=dst-jpg_p526x296&_nc_cat=100&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=HgXAVZt0bYYAX_CMWDe&_nc_ht=scontent-sin6-4.xx&oh=00_AT-oRZsPYQb5d5kH9G9sEW287i6XP5AO9LtXU9m67nlx4A&oe=6330D9D5",
            "React":"2K",
            "comment":"73",
            "share":"388",
            },
            {
              id:'3',
              "FriendsImg" : "https://scontent-sin6-4.xx.fbcdn.net/v/t1.6435-1/95291622_111040020592941_2406583790718681088_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=v8qxNO-KVeMAX-XtaMw&_nc_ht=scontent-sin6-4.xx&oh=00_AT8Q3JI0iVOoNNsXig4C_WV6J64LYT0qQoTsBvXvI4YBmQ&oe=634DA758",
              "FriendsName": "Taung Paw Thar Lay",
              "Active":'now',
              "StoryS":"true", 
              "postS":"true",
              "underShowT":"true", 
            "postTime":"7 d",
            "PostText":"❤❤❤❤❤❤",
            "Postimg":"https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-6/306094284_3329579110699366_1351510161201971169_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=dzeHmUrohXwAX8KP1G-&tn=2-95LAlDNTo6PzcC&_nc_ht=scontent-sin6-3.xx&oh=00_AT818s82l7ZQwNEgEzu0yjIdKY0QGSr35DhRPalusbk30Q&oe=63309BE1",
            "React":"4K",
            "comment":"205",
            "share":"588",
              },
              {
                id:'4',
                "FriendsImg" : "https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-1/300829866_624539712576882_7523061991563194800_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=TSujq4GesZkAX9aiHUO&_nc_ht=scontent-sin6-4.xx&oh=00_AT8nByJBjAYcCVW88amdY4RneG3W1FH1PD4i4eBkaorEgQ&oe=6334A600",
                "FriendsName": "Aung Kung Myat",
                "Active":'now',
                "StoryS":"true", 
                "postS":"true",
                "underShowT":"true", 
            "postTime":"3 d",
            "PostText":"😂",
            "Postimg":"https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/308422659_8078948098813711_9137266795484149745_n.jpg?stp=dst-jpg_p526x296&_nc_cat=105&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=_4Tm4T2nOsAAX-Hjrt8&_nc_ht=scontent-sin6-2.xx&oh=00_AT90Nrjk1IR1MNnYcp5r3gpzs4LjuPBDWTi2W6QrPf-ZVg&oe=6330538B",
            "React":"1.3K",
            "comment":"23",
            "share":"147"
                },
                {
                  id:'5',
                  "FriendsImg":"https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-1/308797145_804460404079451_4118446818724724778_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=nrwbbNfcO1EAX9f3ANY&_nc_ht=scontent-sin6-1.xx&oh=00_AT8JMdd395J_Gm28y46wUSm9F0hYpYtRDUvj-bDJBrG75g&oe=63333B86",
                  "FriendsName":"Bhone Htet",
                  "Active":'10 h',
                  "StoryS":"false", 
                  "storyN":'not',
                  "StoryS":"false", 
                  "postS":"true",
                  "underShowT":"true", 
              "postTime":"3 d",
              "PostText":"oh",
              "Postimg":"https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/306506315_636440538157664_8992313297991953598_n.png?stp=dst-png_s640x640&_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_ohc=EU-4RbSHhVsAX-8f9VH&_nc_ht=scontent-sin6-2.xx&oh=00_AT8XTnWWinXmu9cdaNLVO2UyYDJXfDY4BSeZeyD-tfpbmA&oe=632FE7BC",
              "React":"250K",
              "comment":"1.8k",
              "share":"34K"
                },
          {
            id:'6',
            "FriendsImg" : "https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-1/305269793_162636789756084_2790377269602015508_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=SfyNVYRlcFIAX_2jOmJ&_nc_ht=scontent-sin6-4.xx&oh=00_AT9b8Dl1sPcAbyIhFfK6-PTj0fPNgBmC27Qtv86wsK5T8A&oe=632C2E40",
            "FriendsName": "Mee Mee",
            "Active":'13 m',
            "StoryS":"false", 
            "postS":"false",
            },
            {
              id:'7',
              "FriendsImg" : "https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-1/302050382_138269845579100_6347511645112087257_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=6lEduuz7BhQAX92Gauh&_nc_ht=scontent-sin6-1.xx&oh=00_AT-Vf3UgaiDQVXstwrUxT9Qk2Gzl3XO9O2QdEZbJlvTczw&oe=6331F085",
              "FriendsName": "Zue Zue",
              "Active":'now',
              "StoryS":"true", 
              "postS":"false",
              },
              {
                id:'8,',
                "FriendsImg" : "https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-1/305167837_619718626174544_3720730906659753007_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=Hf4TgbxaCywAX_Qj2qz&_nc_ht=scontent-sin6-3.xx&oh=00_AT-lAc6lCsnYRMM0AcJdClijPCDMzHbCLEZ02bW0CjACEA&oe=632C9C2D",
                "FriendsName": "Thel Su Yin Nway",
                "Active":'now',
                "storyN":'not',
                "StoryS":"false", 
                "postS":"false",
                },
                
        {
          id:'9',
        "FriendsImg" : "https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-1/307106137_122196337270530_1505726763321063663_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=RbLrtmsHv5cAX_o09Q3&_nc_ht=scontent-sin6-2.xx&oh=00_AT90gwFjyB9XP51pwxdSCSkKNWKqX_PcREDfff-Qmqzyvg&oe=632CB73C",
        "FriendsName": "PoPo",
        "storyN":'not',
        "Active":'4 m',
        "StoryS":"false", 
        "postS":"false",
        },
          {
            id:'10',
            "FriendsImg" : "https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-1/294914955_461636609137158_7615895114862541787_n.jpg?stp=cp0_dst-jpg_s40x40&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=vRLj9KxxKxcAX_5SRk3&_nc_ht=scontent-sin6-3.xx&oh=00_AT8TYSNKon2jrG69pbglRktOv8UdDAc_OSbjt99mVhwgeg&oe=632D9D1D",
            "FriendsName": "james Kadtt",
            "Active":'now',
            "StoryS":"false", 
            "postS":"false",
            },
            {
              id:'11',
              "FriendsImg" : "https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-1/264412453_443076374135051_1110631421026546054_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=VdGC8NqMldgAX9lxpjN&_nc_ht=scontent-sin6-4.xx&oh=00_AT9J2-Ar8RiQxBCPBICcth1MM43tWWtvi9HMP-qXcT1IcQ&oe=632D1AC2",
              "FriendsName": "Ngwe Sin Sandar",
              "Active":'now',
              "StoryS":"true", 
              "postS":"false",
              },
              {
                id:'12',
                "FriendsImg" : "https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-1/306625171_122922643854804_7014950132582223790_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=rQfGk5Utj8sAX89FlLl&tn=wYOAeRDGiFacRmSh&_nc_ht=scontent-sin6-4.xx&oh=00_AT8viE0_YpmHzfu5B7dZDPAErkxt-0EVYJgpD-SPX98Aeg&oe=632CFCB8",
                "FriendsName": "Ei Myo",
                "Active":'now',
                "StoryS":"true", 
                "postS":"false",
                },
        {
          id:'13',
          "FriendsImg" : "https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-1/286672432_546740510294615_1738982112806841204_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=whjSdRuDax4AX_OXoaM&_nc_ht=scontent-sin6-1.xx&oh=00_AT8fw3VLqstVUOU9tYcLStCoKk9MWnO6nrfKLQTzvX8SXQ&oe=6334B8F8",
          "FriendsName": "Thawder Noe Wai",
          "Active":'now',
          "StoryS":"false", 
          "postS":"false",
         },
        {
          id:'14',
        "FriendsImg" : "https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-1/308126400_129862046468016_7766549677383020879_n.jpg?stp=c7.0.40.40a_cp0_dst-jpg_p40x40&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=V4czVfcEB-AAX_jdNkt&tn=2-95LAlDNTo6PzcC&_nc_ht=scontent-sin6-2.xx&oh=00_AT90XnO8b6C_Exx29qtHXoeRFPw8XQO2swU88JF0cj0bIg&oe=6331B514",
        "FriendsName": "Ah phoo",
        "Active":'now',
        "StoryS":"false", 
        "postS":"false",
        },
        {
          id:'15',
          "FriendsImg" : "https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-1/307484223_139110062174614_6212409815980673060_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=2RqNGOhLO4kAX99XWyF&_nc_ht=scontent-sin6-3.xx&oh=00_AT_t9x8b1Bvp14JgTyik6woiL77cPr1NbAQQ7xG7tJWm8A&oe=632CA323",
          "FriendsName": "Khaing Zin Maw",
          "Active":'now',
          "StoryS":"false", 
          "postS":"false",
          },
          {
            id:'16',
            "FriendsImg":"https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-1/306545244_795790808279744_7603092742971039385_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=YSw13uVgMK4AX8i6qQi&_nc_ht=scontent-sin6-4.xx&oh=00_AT-5vuAzUgakz6QcWtmyIi_Z7yVNnh3rN4-6ecwJO_JGjg&oe=632C41AD",
            "FriendsName":"Bhone Htet",
            "Active":'now',
            "StoryS":"false", 
            "postS":"false",
          },
          {
            id:'27',
            "FriendsImg":"https://tinyurl.com/2jfx8r2j",
            "FriendsName":"Code Mes Mes",
            "Active":'now',
            "First":'true',
            "StoryS":"true",    
            "postS":"false",
            "Story":"https://tinyurl.com/r8aaez3u",
          }, 
          {
            id:'18',
            "FriendsImg":"https://tinyurl.com/36ttv2fh",
            "FriendsName":"Phyu Zin Thet",
            "Active":'now',
            "First":'true',    
            "StoryS":"true",    
            "postS":"false",    
            "Story":"https://tinyurl.com/mrxzkvae",
          },
          {
            id:'19',
            "FriendsImg":"https://tinyurl.com/23zcpfvu",
            "FriendsName":"Aye Aye Thein",
            "Active":'now',
            "First":'true',
            "StoryS":"true",   
            "underShowT":"true",  
            "postS":"false",
            "Story":"https://tinyurl.com/yx2z7kku",
          },
          {
            id:'20',
            "FriendsImg":"https://tinyurl.com/dzdvpwm9",
            "FriendsName":"Eaint Ya Ti",
            "Active":'now',
            "First":'true',
            "underShowT":"true", 
            "StoryS":"true",    
            "postS":"false",
            "Story":"https://tinyurl.com/azxerptn",
          },
        ]);
  return (
    <div>
        <div className='w-[98%] h-[40px] flex flex-row items-center justify-between'>
            <span className='font-bold'>Contacts</span>
            <div className=' text-[14px] mr-[10px]'>
                <span >
                    <i className="fa-solid fa-video p-[8px] hover:bg-[#514f4f] rounded-full"></i>
                </span>
                <span><i className="fa-solid fa-magnifying-glass py-[8px] px-[9px] hover:bg-[#514f4f] rounded-full"></i></span>
                <span><i className="fa-solid fa-ellipsis py-[8px]  px-[9px] hover:bg-[#514f4f] rounded-full"></i></span>
            </div>
        </div>
        <div className='w-[100%]  h-auto  '  >
            {Friends.map((Friends)=>(           
            <div key={Friends.id} className='w-[98%] h-[56px]  flex flex-row items-center hover:bg-[#4c4b4bbb] rounded'>
                <img  src={Any}
                    className='w-[40px] rounded-full  ml-[10px]'
                />
                <i className="fa-solid fa-circle text-[9px] mt-[28px] translate-x-[-13px] text-[#34aa34] rounded-full border-[2px] border-[black]"></i>
                <span>{Friends.FriendsName}</span>
            </div>
             ))}
      <div className='my-[15px] mx-[8px]  border-b border-[#68686856] '></div>
        <div className='pb-[70px]'>
            <div className='h-[35px] font-bold'>Group conversations</div>
            <div className='w-[98%] h-[56px] hover:bg-[#333232d4] flex flex-row items-center rounded'>
                <i className="fa-solid fa-plus py-[10px] px-[12px] bg-[#727272cd] ml-[10px]  rounded-full mr-[8px]"></i>
                <span>Create New Group</span>
            </div>
        </div>
        </div>

    </div>
  )
}

export default ContactsActive