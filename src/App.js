import HeaderContainer from "./Header/HeaderContainer";
import HomeContainer from "./HomeMain/HomeContainer";
import WatchContainer from "./watch/WatchContainer";
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import MusicMain from "./Music/MusicMain";
import PostDetail from "./PostDetail";
import RightWatch from './watch/RightWatch'
import NowPlaying from './watch//NowPlaying';
import Shows from "./watch/Shows";
import Search from './watch/SearchPage'
import SaveVideo from "./watch/SaveVideo";
import Detail from "./watch/Detail";
import Postform from "./HomeMain/PostForm/Postform";
import { BsArrowUp } from "react-icons/bs";
import { store } from "./redux/store";

function App() {
  return (
    <div className='w-screen h-auto  ' >
        <Postform  />
      <HeaderContainer/>
    <Routes>
          <Route path="/"  element={<HomeContainer/> }  />
        
          <Route path="/watch"   element={<WatchContainer/>} >
            <Route path='Home' element={<RightWatch/>} />           
            
            <Route path='Live' element={<NowPlaying/>} />  
            <Route path='Shows' element={<Shows/>} /> 
            <Route path='Search' element={<Search/>} />
            <Route path='SaveVideo' element={<SaveVideo/>} />
           
          </Route>        
          <Route path='/detail/:id' element={<Detail/>} />
          <Route path='/PostDetail/:id' element={<PostDetail/>} />
          <Route path="/Music"   element={<MusicMain/>} >

            
          </Route>

         
     </Routes>

{/*
     <button
            className=" absolute bottom-[30px] right-[40px]  text-white hover:text-[black] rounded-full p-2 border-2 hover:border-[orange] hover:bg-white z-50 up"
            onClick={() => {
                window.scrollTo("0", "0");
            }}
        >
            <BsArrowUp className="text-2xl" />
        </button>
*/}
    </div>
  );
}

export default App;
