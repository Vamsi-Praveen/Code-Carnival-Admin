import React from 'react';
import * as icon from 'react-icons/bs';
import { Link } from "react-router-dom";
function Sidebar({ openSidebarToggle, OpenSidebar }) {
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    ADITYA ENGINNERING COLLEGE
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>

            <ul className='sidebar-list'>
                {/* <Link to="upcoming" style={{ textDecoration: "none", color: "#fff" }}>
                    <li className='sidebar-list-item'>
                        <icon.BsXDiamond style={{ color: "black" }} />
                        <Link to="upcoming">&nbsp; ADD UPCOMING CONTEST</Link>
                    </li>
                </Link> */}
                {/* <Link to="eventdates" style={{ textDecoration: "none", color: "#fff" }}>
                    <li className='sidebar-list-item'>
                        <icon.BsCalendar2Check style={{ color: "black" }} />
                        <Link to="eventdates">&nbsp; ADD EVENT DATES</Link>
                    </li>
                </Link> */}
                <Link to="coding" style={{ textDecoration: "none", color: "#fff" }}>
                    <li className='sidebar-list-item'>
                        <icon.BsLaptop style={{ color: "black" }} />
                        <Link to="coding">&nbsp; CONTESTS</Link>
                    </li>
                </Link>
                <Link to="gallery" style={{ textDecoration: "none", color: "#fff" }}>
                    <li className='sidebar-list-item'>
                        <icon.BsImage style={{ color: "black" }} />
                        <Link to="gallery">&nbsp; GALLERY</Link>
                    </li>
                </Link>
                <Link to="announcements" style={{ textDecoration: "none", color: "#fff" }}>
                    <li className='sidebar-list-item'>
                        <icon.BsGrid1X2Fill style={{ color: "black" }} />
                        <Link to="announcements">&nbsp; ANNOUNCEMENTS</Link>
                    </li>
                </Link>
                <Link to="users" style={{ textDecoration: "none", color: "#fff" }}>
                    <li className='sidebar-list-item'>
                        <icon.BsPersonCircle style={{ color: "black" }} />
                        <Link to="users">&nbsp; USERS</Link>
                    </li>
                </Link>
                <Link to="questions" style={{ textDecoration: "none", color: "#fff" }}>
                    <li className='sidebar-list-item'>
                        <icon.BsQuestionCircle style={{ color: "black" }} />
                        <Link to="questions">&nbsp; ADD QUESTIONS</Link>
                    </li>
                </Link>
                


            </ul>
        </aside>
    )
}

export default Sidebar