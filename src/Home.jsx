import React from 'react'
import { Routes,Route} from "react-router-dom"
import Coding from './coding';
import Gallery from './gallery';
import Announce from './announcements'
import Add from './coding_add';
import Insert from './gallery_add';
import Ann from './announce_add';
import './CSS/home.css'
function Home() {
    return (
    <main className='main-container'>
        <img src=""></img>
        <Routes>
          <Route path="coding" element={<Coding />}/>
          <Route path="gallery" element={<Gallery />}/>
          <Route path="announcements" element={<Announce />}/>
          <Route path="/coding/coding_add" element={<Add />} />
          <Route path="/gallery/gallery_add" element={<Insert />} />
          <Route path="/announcements/announce_add" element={<Ann />} />
        </Routes>
    </main>
  )
}

export default Home