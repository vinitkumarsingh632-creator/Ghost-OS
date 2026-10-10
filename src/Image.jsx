import './image.css'
import appLogo from './assets/Image.png'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
export default function Image () {
    const [currentImage,setCurrentImage] = useState(0)
    let pointerDown = useRef(false)
    const images = ['https://cdn.imageurlgenerator.com/uploads/bbb72741-bef7-44dc-9efa-d0358c84a879.jpg','https://cdn.imageurlgenerator.com/uploads/35124cca-c382-4ac4-a3d5-a8c4291ccab3.jpg','https://cdn.imageurlgenerator.com/uploads/1363449d-125f-4e44-a394-94539356c48a.jpg','https://cdn.imageurlgenerator.com/uploads/87dd4673-5623-47fd-ad4a-47f1492c1f7e.jpg','https://cdn.imageurlgenerator.com/uploads/fb149053-c275-4186-a181-8a75909401f4.jpg','https://cdn.imageurlgenerator.com/uploads/0a957b47-f418-4bb3-878a-f3ccdd766fe7.jpg']
    console.log(document.getElementsByClassName('bgImage')[0])
    useEffect(()=>{
       document.getElementsByClassName('bgImage')[0].src = images[currentImage]
    },[currentImage])
   return (
    <>
    <div style={{display:'flex',justifyContent:'center','alignContent':'center',flexDirection:'column',width:'8vw',cursor:'pointer'}}>
        <img src={appLogo} alt="logo" className='imageLogo'/>
        <div style={{textAlign:'center',fontSize:'1.5rem',fontFamily:'Special Elite',color:'white'}}>Background</div>
    </div>
    <div className='imageWindow' style={{position:'absolute',backgroundColor:'red'}}>
       <div className='header' style={{backgroundColor:'black',padding:'0.5rem',color:'white',display:'flex',gap:'1rem',justifyContent:'center',alignItems:'center'
       }} onPointerDown={()=>{
         pointerDown.current = true
       }} onPointerUp={()=>{
        pointerDown.current = false
       }} onPointerMove={(event)=>{
        if(pointerDown.current == true){
            document.getElementsByClassName('imageWindow')
        }
       }}>
         <div>
            Background: Change Your Background
         </div>
         <div>
            
<svg className='crossButton'
  xmlns="http://www.w3.org/2000/svg"
  width="30"
  height="40"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="5"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M18 6 6 18" />
  <path d="m6 6 12 12" />
</svg>
         </div>
       </div>
       <div>
        <img src={images[0]} alt="" />
        <img src={images[1]} alt="" />
        <img src={images[2]} alt="" />
        <img src={images[3]} alt="" />
        <img src={images[4]} alt="" />

       </div>
    </div>
    </>

   )
}