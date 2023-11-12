import React from 'react'
import { Routes,Route} from "react-router-dom"
import Coding from './coding';
import Gallery from './gallery';
import Announce from './announcements'
import Add from './coding_add';
import Insert from './gallery_add';
import Ann from './announce_add';
import './CSS/home.css'
import Users from './users';
import Questions from './questions';
import EventDates from './event_dates';
import Upcoming from './upcoming';
import Update from './coding_update';
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
          <Route path="/users/" element={<Users />} />
          <Route path="/questions/" element={<Questions />} />
          <Route path="/eventdates" element={<EventDates />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/coding/update/" element={<Update />}/>
        </Routes>
    </main>
  )
}

export default Home