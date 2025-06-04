import React from 'react'
import './SideNavbar.css'
import HomeIcon from '@mui/icons-material/Home';
const SideNavbar = () => {
  return (
    <div className='home-sideNavbar'> 
      <div className="home_sideNavbarTop">
        <div className="home_sideNavbarTopOption">
            <HomeIcon/>
            <div className="home_sideNavbarTopOptionTitle">Home</div>
        </div>
      </div>
    </div>
  )
}

export default SideNavbar
