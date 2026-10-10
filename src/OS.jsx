import './os.css'
import defaultAudio from './assets/defaultSound.wav'
import defaultBg from './assets/defaultBG.jpg'
import { useEffect } from 'react'
import Clock from './Clock'
export default function OS (){
    useEffect(()=>{
         document.getElementsByClassName('bgSound')[0].play()
    },[])
    return (
        <>
         <img className="bgImage" src={defaultBg}/>
         <audio src={defaultAudio} loop autoPlay className='bgSound'></audio>
         <Clock/>
        </>
    )
}