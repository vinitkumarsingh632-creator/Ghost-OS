import './image.css'
import appLogo from './assets/Image.png'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
export default function Image () {
    const [currentImage,setCurrentImage] = useState(0)
    let pointerDown = useRef(false)
    let window = useRef({x:500,y:100})
    const previous = useRef({x:0,y:0})
    const images = ['https://cdn.imageurlgenerator.com/uploads/bbb72741-bef7-44dc-9efa-d0358c84a879.jpg','https://cdn.imageurlgenerator.com/uploads/35124cca-c382-4ac4-a3d5-a8c4291ccab3.jpg','https://cdn.imageurlgenerator.com/uploads/1363449d-125f-4e44-a394-94539356c48a.jpg','https://cdn.imageurlgenerator.com/uploads/87dd4673-5623-47fd-ad4a-47f1492c1f7e.jpg','https://cdn.imageurlgenerator.com/uploads/fb149053-c275-4186-a181-8a75909401f4.jpg','https://cdn.imageurlgenerator.com/uploads/0a957b47-f418-4bb3-878a-f3ccdd766fe7.jpg']
    console.log(document.getElementsByClassName('bgImage')[0])
    useEffect(()=>{
       document.getElementsByClassName('bgImage')[0].src = images[currentImage]
    },[currentImage])
   return (
    <>
    <div style={{display:'flex',justifyContent:'center','alignContent':'center',flexDirection:'column',width:'12rem',cursor:'pointer',gap:'0.5rem'}} onClick={()=>{
        document.getElementsByClassName('imageWindow')[0].style.display = 'block'
    }}>
        <img src={appLogo} alt="logo" className='imageLogo'/>
        <div style={{textAlign:'center',fontSize:'1.5rem',fontFamily:'Special Elite',color:'white'}}>Background</div>
    </div>
    <div className='imageWindow' style={{position:'absolute',display:'none'}}>
       <div className='header' style={{padding:'0.5rem',color:'white',display:'flex',gap:'1rem',justifyContent:'space-between',alignItems:'center',cursor:'grab'
       }} onPointerDown={(event)=>{
         previous.current = {
        x: event.clientX,
        y: event.clientY
    };
         pointerDown.current = true
       }} onPointerUp={()=>{
        pointerDown.current = false
       }} onPointerMove={(event)=>{
        if(pointerDown.current == true){
             
            document.getElementsByClassName('imageWindow')[0].style.left = `${window.current.x + (event.clientX - previous.current.x)}px`
            document.getElementsByClassName('imageWindow')[0].style.top = `${window.current.y + (event.clientY - previous.current.y)}px`
             window.current.x = window.current.x + (event.clientX - previous.current.x)
             window.current.y =  window.current.y + (event.clientY - previous.current.y)
           previous.current = {
    x: event.clientX,
    y: event.clientY
};
        } 
       }}>
         <div style={{paddingLeft:'1rem',fontSize:'1.5rem',fontFamily:'Special Elite'}}>
            Background: Change Your Background
         </div>
         <div>
            
<svg className='crossButton' onClick={()=>{
    document.getElementsByClassName('imageWindow')[0].style.display = 'none'
}}
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
       <div style={{display:'flex',flexWrap:'wrap',gap:'2rem',padding:'2rem',justifyContent:'space-evenly'}} className='imageContainer' onClick={(event)=>{
        setCurrentImage(Number(event.target.className))
       }}>
        <img src={images[0]} className='0' alt=""  style={{height:'15vh',borderRadius:'20px'}} title='Click'/>
        <img src={images[1]} className='1' alt="" style={{height:'15vh',borderRadius:'20px'}} title='Click'/>
        <img src={images[2]} className='2' alt="" style={{height:'15vh',borderRadius:'20px'}} title='Click'/>
        <img src={images[3]} className='3' alt="" style={{height:'15vh',borderRadius:'20px'}} title='Click'/>
        <img src={images[4]} className='4' alt="" style={{height:'15vh',borderRadius:'20px'}} title='Click'/>
        <img src={images[5]} className='5' alt="" style={{height:'15vh',borderRadius:'20px'}} title='Click'/>
       </div>
    </div>
    </>

   )
}