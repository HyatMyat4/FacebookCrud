import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { genres } from './assets/TypeMusic'
import { selectGenreListId } from './servicesApi/PlayerSlice'
import { genreListIdC } from './servicesApi/PlayerSlice'
import { useGetSongsByGenerQuery } from './servicesApi/MusicBaseApi'
import Earr from './Earr'
import Loder from './Loder'
import SongCard from './SongCard'
const MusicRight = () => {
  const dispatch = useDispatch()
  
const  genreListIdD  = useSelector(genreListIdC)

const { activeSong, isPlaying } = useSelector((state) => state.player);

const { data, isFetching, error } = useGetSongsByGenerQuery(genreListIdD || 'POP');
console.log(data)
if(isFetching) return <Loder title="Loading songs...🎼" />

if ( error ) return <Earr />

  return (
    <div className='w-[100%] h-auto mb-[150px] mt-[20px] xl:mt-[0px]  '>
       <div className='flex flex-row items-center justify-between'>
           <span className='text-[20px] text-rose-600 font-bold ml-[15px] animate-bounce  '>Discover <span className='text-teal-400'>{genreListIdD || 'pop'}</span></span>
           <select
              onChange={(e) => dispatch(selectGenreListId(e.target.value))}
             value={genreListIdD || 'pop'}
            className="bg-gradient-to-br from-black to-[#bf1e51] bg-rose-700 text-gray-200 p-2 text-sm rounded-lg mr-[15px] outline-none sm:mt-0 mt-5"
           >
              {genres.map((genres) => <option key={genres.value} value={genres.value}>{genres.title}</option>)}
           </select>
       </div>
       <div className='w-full h-auto flex flex-row flex-wrap justify-center mt-[20px]  gap-8'>
       {data?.map((song , i) => (
         <SongCard
         key={song.key}
         song={song}
         isPlaying={isPlaying}
         activeSong={activeSong}
         data={data}
         i={i}
         />
       ))}
      </div>
    </div>

  )
}

export default MusicRight