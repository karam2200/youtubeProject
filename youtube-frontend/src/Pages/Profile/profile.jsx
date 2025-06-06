import React from 'react'
import './profile.css'
import SideNavbar from '../../Component/SideNavbar/sideNavbar'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link } from 'react-router-dom';

const Profile = ({sideNavbar}) => {
  return (
    <div className='profile'>
      <SideNavbar sideNavbar={sideNavbar}/>


      <div className={sideNavbar?"profile_page": 'profile_page_inactive'}>
        <div className="profile_top_section">

            <div className="profile_top_section_profile">
                <img src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"  className="profile_top_section_img" />
            </div>
            <div className="profile_top_section_About">
                <div className="profile_top_section_About_Name">Coder</div>
                <div className="profile_top_section_info">
                    @user1 . 4 videos
                </div>

                <div className="profile_top_section_info">
                    about section of the channel
                </div>
            </div>

        </div>

        <div className="profile_videos">
            <div className="profile_videos_title">Videos &nbsp; <ArrowRightIcon /></div>

            <div className="profileVideos">
                <Link to={'/watch/8989'} className="profileVideo_block">
                    <div className="profileVideo_block_thumbnail">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUgQ_j2ctD2qSBqJkwfM7yhh1d21fcClFqwg&s" alt="" className="profileVideo_block_thumbnail_img" />
                    </div>
                    <div className="profileVideo_block_detail">
                        <div className="profileVideo_block_detail_name">Video title</div>
                        <div className="profileVideo_block_detail_about">Create on 2024-04-06</div>
                    </div>       
                </Link>

                <Link to={'/watch/8989'} className="profileVideo_block">
                    <div className="profileVideo_block_thumbnail">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUgQ_j2ctD2qSBqJkwfM7yhh1d21fcClFqwg&s" alt="" className="profileVideo_block_thumbnail_img" />
                    </div>
                    <div className="profileVideo_block_detail">
                        <div className="profileVideo_block_detail_name">Video title</div>
                        <div className="profileVideo_block_detail_about">Create on 2024-04-06</div>
                    </div>       
                </Link>

                <Link to={'/watch/8989'} className="profileVideo_block">
                    <div className="profileVideo_block_thumbnail">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUgQ_j2ctD2qSBqJkwfM7yhh1d21fcClFqwg&s" alt="" className="profileVideo_block_thumbnail_img" />
                    </div>
                    <div className="profileVideo_block_detail">
                        <div className="profileVideo_block_detail_name">Video title</div>
                        <div className="profileVideo_block_detail_about">Create on 2024-04-06</div>
                    </div>       
                </Link>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
