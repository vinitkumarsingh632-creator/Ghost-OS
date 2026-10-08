import './home.css'
import grimReaper from './assets/grimReaper.png'
import { useEffect } from 'react'
export default function Home () {
    useEffect(()=>{
        document.getElementsByClassName('message')[0].style.opacity = 1
        document.getElementsByClassName('grimReaper')[0].style.opacity = 1
    },[])
    return (
        <>
        <div className='volumeWarning'>
            <h2 style={{textAlign:'center',fontFamily:'Aladin',fontSize:'3rem'}}>Warning</h2>
            <p style={{fontSize:'1.5rem',fontFamily:'Special Elite'}}>Increase Your Volume For Better Experience.</p>
        </div>
         <div style={{height:'100vh',width:'100vw',display:'flex',alignItems:'center'}} >
                <img src={grimReaper} style={{height:'70vh'}} className='grimReaper'/>
                <div style={{display:'flex',flexDirection:'column',gap:'2rem',padding:'1rem'}} className='message'>
                    <h2 style={{textAlign:'center',fontSize:'3rem',fontFamily:'Aladin'}}>You Have Been Warned</h2>
                    <p style={{fontSize:'1.5rem',fontFamily:'Special Elite',lineHeight:'1.5rem'}}>You are about to enter an environment that was never meant to be accessed.
                        Keep your volume high.<br/> Keep your lights on.
                        If you hear something that isn't coming from your device... don't look behind you.</p>
                        <div style={{display:'flex',justifyContent:'center'}}>
                            <div style={{marginTop:'1rem',backgroundColor:'white',padding:'0.4rem',width:'30%',textAlign:'center',borderRadius:'20px',fontSize:'2rem',cursor:'pointer'}}>Enter the OS</div>
                        </div>
                </div>
         </div>
        </>
    )
}