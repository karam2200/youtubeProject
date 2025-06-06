import React,{useState} from 'react'
import './SignUp.css'
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
import axios from 'axios'
const SignUp = () => {
    const [uploadedImageUrl, setUploadedImageUrl] = useState('https://media.istockphoto.com/id/1196083861/vector/simple-man-head-icon-set.jpg?s=612x612&w=0&k=20&c=a8fwdX6UKUVCOedN_p0pPszu8B4f6sjarDmUGHngvdM=')
    const [signUpField, setSignUpField] = useState({'channelName':'','userName':'','password':'','about':'','profilePic':uploadedImageUrl})
    
    const handleInputField = (event,name) =>{
        setSignUpField({
            ...signUpField,[name]: event.target.value
        })
    }
    console.log(signUpField)
    const uploadImage= async (e)=>{
        const files = e.target.files
        const data = new FormData()
        data.append('file',files[0])
        data.append('upload_preset','youtube-clone')
        try{
            const response = await axios.post('https://api.cloudinary.com/v1_1/dwjsesiu7/image/upload',data)
            const imageUrl= response.data.url
            setUploadedImageUrl(imageUrl)
            setSignUpField({
            ...signUpField,'profilePic': imageUrl
        })
        }catch(err){
            console.log(err)
        }
    }
    
    return (
    <div className='signUp'>
      <div className="signup_card">
        <div className="signUp_title">
            <YouTubeIcon sx={{fontSize: '54px'}} className='login_youtubeImage' />
            SignUp
        </div>

        <div className="signUp_Inputs">
            <input type="text" value={signUpField.channelName} onChange={(e)=>{handleInputField(e,'channelName')}} className="signUp_Inputs_inp" placeholder='Channel Name' />
            <input type="text" value={signUpField.userName} onChange={(e)=>{handleInputField(e,'userName')}} className="signUp_Inputs_inp" placeholder='User Name' />
            <input type="password" value={signUpField.password} onChange={(e)=>{handleInputField(e,'password')}}  className="signUp_Inputs_inp" placeholder='Password' />
            <input type="text" value={signUpField.about} onChange={(e)=>{handleInputField(e,'about')}} className="signUp_Inputs_inp" placeholder='About your channel' />

            <div className="image_upload_signup">
                <input type="file" onChange={(e)=>uploadImage(e)} />
                <div className="image_upload_signup_div">
                    <img src={uploadedImageUrl} alt="" className="image_default_signup" />
                </div>
            </div>

            <div className="signUpBtns">
                <div className="signUpBtn">Sign Up</div>
                <Link to={'/'} className="signUpBtn">Home Page</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp