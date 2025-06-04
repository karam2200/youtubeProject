import React,{useState} from 'react'
import './navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import SideNavbar from '../SideNavbar/sideNavbar';

const Navbar = ({setSideNavbarFunc, sideNavbar}) => {
    const [userPic , setUserPic] = useState('https://wallpapercave.com/avt/UnknownUser.png?v=4')
    const [navbarModal, setNavbarModal] = useState(false)

    const handleClickModel = () =>{
        setNavbarModal(prev=>!prev)
    }
    const sideNavbarFuc = () =>{
        setSideNavbarFunc(!sideNavbar)
    }
  return (
    <div className='navbar'>

        <div className="navbar-left">
            <div className="navbarhamburger" onClick={sideNavbarFuc}>
                <MenuIcon sx={{color:"white"}}/>
            </div>
            <div className="navbar_youtubeImg">
                <YouTubeIcon sx={{fontSize:'34px'}} className='navbar_youtubeImage'/>
                <div className="navbar_youtubeTitle">YouTube</div>
            </div>
        </div>

        <div className="navbar-middle">
            <div className="navbar_searchBox">
                <input type="text" placeholder='Search' className='navbar_searchBoxInput'/>
                <div className="navbar_searchIconBox">
                    <SearchIcon sx={{fontSize:'28px', color:'white'}}/> </div>
            </div>

            <div className="navbar_mic">
                <KeyboardVoiceIcon sx={{color: 'white'}}/>
            </div>
        </div>

        <div className="navbar-right">
            <VideoCallIcon sx={{color:'white', fontSize:'30px', cursor:'pointer'}}/>
            <NotificationsIcon sx={{color:'white', fontSize:'30px', cursor:'pointer'}}/>
            <img onClick={handleClickModel} src={userPic} alt="Logo" className="navbar-right-logo" />

            {navbarModal &&
             <div className="navbar-model">
                <div className="navbar-model-option">Profile</div>
                <div className="navbar-model-option">Logout</div>
                <div className="navbar-model-option">Login</div>
             </div>
            }
        </div>
    </div>
  )
}

export default Navbar


