import React, { useState, useEffect } from "react";
import "./video.css";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
const Video = () => {
  const [message, setMessage] = useState();
  const [data, setData] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");
  const { id } = useParams();
  const [comments, setComments] = useState([]);

  const fetchVideoById = async () => {
    await axios
      .get(`http://localhost:4000/api/getVideoById/${id}`)
      .then((response) => {
        console.log(response.data.video);
        setData(response.data.video);
        setVideoUrl(response?.data?.video?.videoLink);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCommentByVideoId = async () => {
    await axios
      .get(`http://localhost:4000/commentApi/comment/${id}`)
      .then((response) => {
        console.log(response);
        setComments(response.data.comments);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchVideoById();
    getCommentByVideoId();
  }, []);

  const handleComment = async() =>{
    const body = {
      "message":message,
      "video":id
    }
    await axios.post('http://localhost:4000/commentApi/comment',body,{withCredentials:true}).then((resp)=>{
      console.log(resp)   
      const newComment = resp.data.comment
      setComments([newComment,...comments])
      setMessage('')
    }).catch(err=>{
      toast.error("Please login first to comment")
    })
  }
  return (
    <div className="video">
      <div className="videoPostSection">
        <div className="video_youtube">
          {data && (
            <video
              width="400"
              controls
              autoPlay
              className="video_youtube_video"
            >
              <source src={videoUrl} type="video/mp4" />
              <source src={videoUrl} type="video/webm" />
              Your browser does not support video tag.
            </video>
          )}
        </div>

        <div className="video_youtubeAbout">
          <div className="video_utubeTitle">{data?.title}</div>

          <div className="youtube_video_ProfileBlock">
            <div className="youtube_video_ProfileBlock_left">
              <Link
                to={`/user/${data?.user?._id}`}
                className="youtube_video_ProfileBlock_left_img"
              >
                <img
                  src={data?.user?.profilePic}
                  alt="js_img"
                  className="youtube_video_ProfileBlock_left_image"
                />
              </Link>
              <div className="youtubeVideo_subsView">
                <div className="youtubePostProfileName">
                  {data?.user?.userName}
                </div>
                <div className="youtubePostProfileSubs">
                  {data?.user?.createdAt.slice(0, 10)}
                </div>
              </div>
              <div className="subscribeBtnYoutube">Subscribe</div>
            </div>

            <div className="youtube_video_likeBlock">
              <div className="youtube_video_likeBlock_Like">
                <ThumbUpOffAltIcon />
                <div className="youtube_video_likeBlock_NoOfLikes">
                  {data?.like}
                </div>
              </div>
              <div className="youtubeVideoDivider"></div>

              <div className="youtube_video_likeBlock_Like">
                <ThumbDownOffAltIcon />
                <div className="youtube_video_likeBlock_NoOfLikes">
                  {data?.dislike}
                </div>
              </div>
            </div>
          </div>

          <div className="youtube_video_About">
            <div>{data?.createdAt.slice(0, 10)}</div>
            <div>{data?.description}</div>
          </div>
        </div>

        <div className="youtubeCommentSection">
          <div className="youtubeCommentSectionTitle">{comments.length} Comments</div>

          <div className="youtubeSelfComment">
            <img
              src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"
              className="video_youtubeSelfCommentProfile"
            />
            <div className="addAComment">
              <input
                className="addACommentInput"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                type="text"
                placeholder="Add a comment"
              />
              <div className="cancelSubmitComment">
                <div className="cancelComment">Cancel</div>
                <div className="cancelComment" onClick={handleComment}>Comment</div>
              </div>
            </div>
          </div>

          <div className="youtubeOthersComments">
            {comments.map((item, index) => {
              return (
                <div className="youtubeSelfComment">
                  <img
                    src={item?.user?.profilePic}
                    className="video_youtubeSelfCommentProfile"
                  />
                  <div className="others_commentSection">
                    <div className="others_commentSectionHeader">
                      <div className="channelName_comment">{item?.user?.channelName}</div>
                      <div className="commentTimingOthers">{item?.createdAt.slice(0,10)}</div>
                    </div>

                    <div className="otherCommentSectionComment">
                      {item?.message}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="videoSuggestions">
        <div className="videoSuggestionsBlock">
          <div className="video_suggestion_thumbnail">
            <img
              src="https://i.ytimg.com/vi/A6pMwa8ibgQ/sddefault.jpg"
              alt=""
              className="video_suggestion_thumbnail_img"
            />
          </div>

          <div className="video_suggestions_About">
            <div className="video_suggestions_About_title">
              Learn javascript in just 11 hours
            </div>
            <div className="video_suggestions_About_Profile">JS Coder</div>
            <div className="video_suggestions_About_Profile">
              139K views . 2 days ago
            </div>
          </div>
        </div>

        <div className="videoSuggestionsBlock">
          <div className="video_suggestion_thumbnail">
            <img
              src="https://i.ytimg.com/vi/A6pMwa8ibgQ/sddefault.jpg"
              alt=""
              className="video_suggestion_thumbnail_img"
            />
          </div>

          <div className="video_suggestions_About">
            <div className="video_suggestions_About_title">
              Learn javascript in just 11 hours
            </div>
            <div className="video_suggestions_About_Profile">JS Coder</div>
            <div className="video_suggestions_About_Profile">
              139K views . 2 days ago
            </div>
          </div>
        </div>

        <div className="videoSuggestionsBlock">
          <div className="video_suggestion_thumbnail">
            <img
              src="https://i.ytimg.com/vi/A6pMwa8ibgQ/sddefault.jpg"
              alt=""
              className="video_suggestion_thumbnail_img"
            />
          </div>

          <div className="video_suggestions_About">
            <div className="video_suggestions_About_title">
              Learn javascript in just 11 hours
            </div>
            <div className="video_suggestions_About_Profile">JS Coder</div>
            <div className="video_suggestions_About_Profile">
              139K views . 2 days ago
            </div>
          </div>
        </div>

        <div className="videoSuggestionsBlock">
          <div className="video_suggestion_thumbnail">
            <img
              src="https://i.ytimg.com/vi/A6pMwa8ibgQ/sddefault.jpg"
              alt=""
              className="video_suggestion_thumbnail_img"
            />
          </div>

          <div className="video_suggestions_About">
            <div className="video_suggestions_About_title">
              Learn javascript in just 11 hours
            </div>
            <div className="video_suggestions_About_Profile">JS Coder</div>
            <div className="video_suggestions_About_Profile">
              139K views . 2 days ago
            </div>
          </div>
        </div>
      </div>

      <ToastContainer/>
    </div>
  );
};

export default Video;
