import React, {useState} from 'react'
import './video.css'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { Link } from 'react-router-dom';

const Video = () => {
const [message,setMessage] = useState()

  return (
    <div className='video'>
      <div className="videoPostSection">
        <div className="video_youtube">
            <video width='400px' controls autoPlay className='video_youtube_video'>
                <source src={'https://youtu.be/WzDmoTydaEk?si=0PZ1dpw6b97sfmD4'} type='video/mp4'/>
                <source src={'https://youtu.be/WzDmoTydaEk?si=0PZ1dpw6b97sfmD4'} type='video/webm'/>
                Your browser does not support video tag.
            </video>
        </div>

        <div className="video_youtubeAbout">
            <div className="video_utubeTitle">{'Javascript for beginners'}</div>

            <div className="youtube_video_ProfileBlock">
                <div className="youtube_video_ProfileBlock_left">
                    <Link to={'/user/7868'} className="youtube_video_ProfileBlock_left_img">
                        <img src={"https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"} alt="js_img" className="youtube_video_ProfileBlock_left_image" />
                    </Link>
                    <div className="youtubeVideo_subsView">
                        <div className="youtubePostProfileName">{'User1'}</div>
                        <div className="youtubePostProfileSubs">{'2025-06-03'}</div>
                    </div>
                    <div className="subscribeBtnYoutube">Subscribe</div>
                </div>

                <div className="youtube_video_likeBlock">
                    <div className="youtube_video_likeBlock_Like">
                        <ThumbUpOffAltIcon/>
                        <div className="youtube_video_likeBlock_NoOfLikes">{32}</div>
                    </div>
                    <div className="youtubeVideoDivider"></div>

                    <div className="youtube_video_likeBlock_Like">
                        <ThumbDownOffAltIcon/>
                    </div>
                
                </div>


            </div>

            <div className="youtube_video_About">
                <div>2025-03-06</div>
                <div>this is a good video</div>
            </div>
        </div>

        <div className="youtubeCommentSection">
            <div className="youtubeCommentSectionTitle">2 Comments</div>

            <div className="youtubeSelfComment">
                <img src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"  className="video_youtubeSelfCommentProfile" />
                <div className="addAComment">
                    <input className='addACommentInput' value={message} onChange={(e)=>{setMessage(e.target.value)}} type="text" placeholder='Add a comment' />
                    <div className="cancelSubmitComment">
                        <div className="cancelComment">Cancel</div>
                        <div className="cancelComment">Comment</div>
                    </div>
                </div>

            </div>

            <div className="youtubeOthersComments">

                <div className="youtubeSelfComment">
                    <img src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"  className="video_youtubeSelfCommentProfile" />
                    <div className="others_commentSection">
                        <div className="others_commentSectionHeader">
                            <div className="channelName_comment">UserName</div>
                            <div className="commentTimingOthers">2025-03-06</div>
                        </div>

                        <div className="otherCommentSectionComment">
                            this is a web app project
                        </div>
                    </div>
                </div>

                <div className="youtubeSelfComment">
                    <img src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"  className="video_youtubeSelfCommentProfile" />
                    <div className="others_commentSection">
                        <div className="others_commentSectionHeader">
                            <div className="channelName_comment">UserName</div>
                            <div className="commentTimingOthers">2025-03-06</div>
                        </div>

                        <div className="otherCommentSectionComment">
                            this is a web app project
                        </div>
                    </div>
                </div>

                <div className="youtubeSelfComment">
                    <img src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"  className="video_youtubeSelfCommentProfile" />
                    <div className="others_commentSection">
                        <div className="others_commentSectionHeader">
                            <div className="channelName_comment">UserName</div>
                            <div className="commentTimingOthers">2025-03-06</div>
                        </div>

                        <div className="otherCommentSectionComment">
                            this is a web app project
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </div>

      <div className="videoSuggestions">

        <div className="videoSuggestionsBlock">
            <div className="video_suggestion_thumbnail">
                <img src="https://i.ytimg.com/vi/A6pMwa8ibgQ/sddefault.jpg" alt="" className='video_suggestion_thumbnail_img' />
            </div>

            <div className="video_suggestions_About">
                <div className="video_suggestions_About_title">Learn javascript in just 11 hours</div>
                <div className="video_suggestions_About_Profile">JS Coder</div>
                <div className="video_suggestions_About_Profile">139K views . 2 days ago</div>
            </div>
        </div>

        <div className="videoSuggestionsBlock">
            <div className="video_suggestion_thumbnail">
                <img src="https://i.ytimg.com/vi/A6pMwa8ibgQ/sddefault.jpg" alt="" className='video_suggestion_thumbnail_img' />
            </div>

            <div className="video_suggestions_About">
                <div className="video_suggestions_About_title">Learn javascript in just 11 hours</div>
                <div className="video_suggestions_About_Profile">JS Coder</div>
                <div className="video_suggestions_About_Profile">139K views . 2 days ago</div>
            </div>
        </div>

        <div className="videoSuggestionsBlock">
            <div className="video_suggestion_thumbnail">
                <img src="https://i.ytimg.com/vi/A6pMwa8ibgQ/sddefault.jpg" alt="" className='video_suggestion_thumbnail_img' />
            </div>

            <div className="video_suggestions_About">
                <div className="video_suggestions_About_title">Learn javascript in just 11 hours</div>
                <div className="video_suggestions_About_Profile">JS Coder</div>
                <div className="video_suggestions_About_Profile">139K views . 2 days ago</div>
            </div>
        </div>

        <div className="videoSuggestionsBlock">
            <div className="video_suggestion_thumbnail">
                <img src="https://i.ytimg.com/vi/A6pMwa8ibgQ/sddefault.jpg" alt="" className='video_suggestion_thumbnail_img' />
            </div>

            <div className="video_suggestions_About">
                <div className="video_suggestions_About_title">Learn javascript in just 11 hours</div>
                <div className="video_suggestions_About_Profile">JS Coder</div>
                <div className="video_suggestions_About_Profile">139K views . 2 days ago</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Video
