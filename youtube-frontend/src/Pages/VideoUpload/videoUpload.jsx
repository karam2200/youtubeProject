import React,{useState, useEffect} from 'react'
import './videoUpload.css'
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
const VideoUpload = () => {

    const [inputField, setInputField] = useState({'title':'','description':'','videoLink':'','thumbnail':'','videoType':''})
    const [loader,setLoader] = useState(false)
    const navigate = useNavigate()
    const hanndleOnChangeInput = (event,name) =>{
        setInputField({
            ...inputField,[name]:event.target.value
        })
    }
    const uploadImage= async (e,type)=>{
        setLoader(true)
        const files = e.target.files
        const data = new FormData()
        data.append('file',files[0])
        data.append('upload_preset','youtube-clone')
        try{
            const response = await axios.post(`https://api.cloudinary.com/v1_1/dwjsesiu7/${type}/upload`,data)
            const url= response.data.url
            setLoader(false)
            let val= type==='image'?'thumbnail':'videoLink'
            setInputField({
            ...inputField,[val]:url
        })

            console.log(url)
        }catch(err){
             setLoader(false)
            console.log(err)
        }
    }
    console.log(inputField)

    useEffect(()=>{
        let isLogin = localStorage.getItem('userId')
        if(isLogin===null){
            navigate('/')
        }
    },[])


    const handleSubmitFunc = async()=>{
        await axios.post('http://localhost:4000/api/video',inputField,{withCredentials:true}).then((resp)=>{
            console.log(resp)
            navigate('/')
        }).catch(err=>{
            console.log(err)
        }) 
    }


    return (
    <div className='videoUpload'>
        <div className="uploadBox">
            <div className="uploadVideoTitle">
                <YouTubeIcon sx={{fontSize: '54px', color:'red'}}/>
                Upload video 
            </div>

            <div className="uploadForm">
                <input type="text" value={inputField.title} onChange={(e)=>{hanndleOnChangeInput(e,'title')}} placeholder='Title of Video' className='uploadFormInputs'/>
                <input type="text" value={inputField.description} onChange={(e)=>{hanndleOnChangeInput(e,'description')}} placeholder='Description' className='uploadFormInputs'/>
                <input type="text" value={inputField.videoType} onChange={(e)=>{hanndleOnChangeInput(e,'videoType')}} placeholder='Category' className='uploadFormInputs'/>
                <div>Thumbnail <input type='file' accept='image/*' onChange={(e)=>uploadImage(e,'image')} /></div>
                <div>Video <input type='file' accept='video/mp4, video/webm, video/*' onChange={(e)=>uploadImage(e,'video')} /></div>
                {
                loader &&  <Box sx={{ display: 'flex' }}>
                                <CircularProgress />
                            </Box>
            }
            </div>

            
           
            <div className="uploadBtns">
                <div className="uploadBtn-form" onClick={handleSubmitFunc}>Upload</div>
                <Link to={'/'} className="uploadBtn-form">Home</Link>
            </div>
        </div>
    </div>
  )
}

export default VideoUpload
