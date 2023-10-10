import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './CSS/App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import Login from './login'
import Coding from './coding'
import Announcements from "./announcements"
function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <BrowserRouter>
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        <Home />
      </BrowserRouter>
    </div>

  )
}

export default App