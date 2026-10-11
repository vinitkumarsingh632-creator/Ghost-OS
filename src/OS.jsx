import './os.css'
import defaultAudio from './assets/defaultSound.wav'
import defaultBg from './assets/defaultBG.jpg'
import { useEffect } from 'react'
import Clock from './Clock'
import Image from './Image'
import Footer from './Footer'
import HC from './HC'
import GhostDetector from './GhostDetector'
export default function OS (){
    useEffect(()=>{
         document.getElementsByClassName('bgSound')[0].play()
    },[])
    return (
        <>
        <img className="bgImage" src={defaultBg}/>
         <audio src={defaultAudio} loop autoPlay className='bgSound'></audio>
         <div>
           <div style={{paddingLeft:'2rem',display:'flex','flexDirection':'column','gap':'3rem'}}>
            <Image/>
            <HC/>
            <GhostDetector/>
           </div>
         <Clock/>
         <Footer/>
         </div>
        </>
    )
}