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
import { Link,useNavigate } from 'react-router-dom';
import Login from '../Login/login';

const Navbar = ({setSideNavbarFunc, sideNavbar}) => {
    const [userPic , setUserPic] = useState('https://wallpapercave.com/avt/UnknownUser.png?v=4')
    const [navbarModal, setNavbarModal] = useState(false)
    const [login, setLogin] = useState(false)
    const navigate = useNavigate();

    const handleClickModel = () =>{
        setNavbarModal(prev=>!prev)
    }
    const sideNavbarFuc = () =>{
        setSideNavbarFunc(!sideNavbar)
    }

    const handleProfile =()=>{
        navigate('/user/7697')
        setNavbarModal(false)
    }

    const setLoginModal =()=>{
        setLogin(false)
    } 

    const onclickOfPopUpOption =(button)=>{
        setNavbarModal(false)
        if(button==='login'){
            setLogin(true)
        }else{

        }
    }
  return (
    <div className='navbar'>

        <div className="navbar-left">
            <div className="navbarhamburger" onClick={sideNavbarFuc}>
                <MenuIcon sx={{color:"white"}}/>
            </div>
            <Link to={'/'} className="navbar_youtubeImg">
                <YouTubeIcon sx={{fontSize:'34px'}} className='navbar_youtubeImage'/>
                <div className="navbar_youtubeTitle">YouTube</div>
            </Link>
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
            <Link to={'/768/upload'}>
                <VideoCallIcon sx={{color:'white', fontSize:'30px', cursor:'pointer'}}/>
            </Link>
            <NotificationsIcon sx={{color:'white', fontSize:'30px', cursor:'pointer'}}/>
            <img onClick={handleClickModel} src={userPic} alt="Logo" className="navbar-right-logo" />

            {navbarModal &&
             <div className="navbar-model">
                <div className="navbar-model-option" onClick={handleProfile}>Profile</div>
                <div className="navbar-model-option" onClick={()=>onclickOfPopUpOption('logout')}>Logout</div>
                <div className="navbar-model-option" onClick={()=>onclickOfPopUpOption('login')}>Login</div>
             </div>
            }
        </div>

        {
            login && <Login setLoginModal={setLoginModal}/> 
        }
    </div>
  )
}

export default Navbar


