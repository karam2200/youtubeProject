import React from 'react'
import './HomePage.css'
import { Link } from 'react-router-dom'
const HomePage = ({sideNavbar}) => {

  const options = ['All','Twenty20 Cricket', 'Music', 'Live', 'Mixes', 'Gaming', 'Debates', 'Coke Studio', 'Democracy','Comedy','Mixes','Mixes','Mixes','Mixes','Mixes']
  return (
    <div className={sideNavbar?'homePage':'FullHomePage'}>
      <div className="homePage_options">
        {
          options.map((item,index)=>{
            return(
              <div key={index} className="homePage_option">
                {item}
              </div>
            )
          })
        }
      </div>
      
      <div className={sideNavbar?"home_mainPage":"home_mainPageWithoutLink"}>
        <Link to={'/watch/444'} className="youtube_Video">
          <div className="youtube_thumbailBox">
            <img src="https://img.freepik.com/free-psd/creative-youtube-thumbnail-design-template_505751-6045.jpg?semt=ais_hybrid&w=740" alt="" className="youtube_thumbailPic" />
            <div className="youtube_timingThumbnail">
              28:05
            </div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img src="https://img.freepik.com/free-psd/creative-youtube-thumbnail-design-template_505751-6045.jpg?semt=ais_hybrid&w=740" alt="profile" className='youtube_thumbnail_Profile'/>
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">User1</div>
              <div className="youtube_channelName">User1</div>
              <div className="youtubeVideo_views">3 likea</div>
            </div>
          </div>
        </Link>

        <Link to={'/watch/444'} className="youtube_Video">
          <div className="youtube_thumbailBox">
            <img src="https://img.freepik.com/free-psd/creative-youtube-thumbnail-design-template_505751-6045.jpg?semt=ais_hybrid&w=740" alt="" className="youtube_thumbailPic" />
            <div className="youtube_timingThumbnail">
              28:05
            </div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img src="https://img.freepik.com/free-psd/creative-youtube-thumbnail-design-template_505751-6045.jpg?semt=ais_hybrid&w=740" alt="profile" className='youtube_thumbnail_Profile'/>
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">User1</div>
              <div className="youtube_channelName">User1</div>
              <div className="youtubeVideo_views">3 likea</div>
            </div>
          </div>
        </Link>

        <Link to={'/watch/444'} className="youtube_Video">
          <div className="youtube_thumbailBox">
            <img src="https://img.freepik.com/free-psd/creative-youtube-thumbnail-design-template_505751-6045.jpg?semt=ais_hybrid&w=740" alt="" className="youtube_thumbailPic" />
            <div className="youtube_timingThumbnail">
              28:05
            </div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img src="https://img.freepik.com/free-psd/creative-youtube-thumbnail-design-template_505751-6045.jpg?semt=ais_hybrid&w=740" alt="profile" className='youtube_thumbnail_Profile'/>
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">User1</div>
              <div className="youtube_channelName">User1</div>
              <div className="youtubeVideo_views">3 likea</div>
            </div>
          </div>
        </Link>

        <Link to={'/watch/444'} className="youtube_Video">
          <div className="youtube_thumbailBox">
            <img src="https://img.freepik.com/free-psd/creative-youtube-thumbnail-design-template_505751-6045.jpg?semt=ais_hybrid&w=740" alt="" className="youtube_thumbailPic" />
            <div className="youtube_timingThumbnail">
              28:05
            </div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img src="https://img.freepik.com/free-psd/creative-youtube-thumbnail-design-template_505751-6045.jpg?semt=ais_hybrid&w=740" alt="profile" className='youtube_thumbnail_Profile'/>
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">User1</div>
              <div className="youtube_channelName">User1</div>
              <div className="youtubeVideo_views">3 likea</div>
            </div>
          </div>
        </Link>

        <Link to={'/watch/444'} className="youtube_Video">
          <div className="youtube_thumbailBox">
            <img src="https://img.freepik.com/free-psd/creative-youtube-thumbnail-design-template_505751-6045.jpg?semt=ais_hybrid&w=740" alt="" className="youtube_thumbailPic" />
            <div className="youtube_timingThumbnail">
              28:05
            </div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img src="https://img.freepik.com/free-psd/creative-youtube-thumbnail-design-template_505751-6045.jpg?semt=ais_hybrid&w=740" alt="profile" className='youtube_thumbnail_Profile'/>
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">User1</div>
              <div className="youtube_channelName">User1</div>
              <div className="youtubeVideo_views">3 likea</div>
            </div>
          </div>
        </Link>

        <Link to={'/watch/444'} className="youtube_Video">
          <div className="youtube_thumbailBox">
            <img src="https://img.freepik.com/free-psd/creative-youtube-thumbnail-design-template_505751-6045.jpg?semt=ais_hybrid&w=740" alt="" className="youtube_thumbailPic" />
            <div className="youtube_timingThumbnail">
              28:05
            </div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img src="https://img.freepik.com/free-psd/creative-youtube-thumbnail-design-template_505751-6045.jpg?semt=ais_hybrid&w=740" alt="profile" className='youtube_thumbnail_Profile'/>
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">User1</div>
              <div className="youtube_channelName">User1</div>
              <div className="youtubeVideo_views">3 likea</div>
            </div>
          </div>
        </Link>

        

      </div>

    </div>
  )
}

export default HomePage
