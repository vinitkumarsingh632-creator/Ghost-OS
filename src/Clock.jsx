import { useState } from 'react';
import './clock.css';
import { useEffect } from 'react';
import tickSound from './assets/tickSound.mp3'
export default function Clock () {
    const [count,setCount] = useState(0)
    const date = new Date()
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prev => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <>
        <audio src={tickSound} loop autoPlay></audio>
         <div id='clockContainer' >
            <div className='FirstRow' style={{display:'flex',gap:'0.7rem',fontFamily:'Special Elite',fontSize:'2rem'}}>
                <div className='date'>{date.getDate()}</div>
                <div className='month' style={{color:'red'}}>{months[date.getMonth()]}</div>
                <div className='year'>{date.getFullYear()}</div>
            </div>
            <div className='SecondRow' style={{fontFamily:'Special Elite',fontSize:'1.4rem'}}>
                {days[date.getDay()]}
            </div>
            <div className='ThirdRow' style={{fontFamily:'Special Elite',display:'flex',gap:'0.4rem',fontSize:'1.7rem'}}>
               <div className='hours'>{String(date.getHours()).padStart(2, '0')}</div> <span style={{color:'red'}}>:</span> 
               <div className='minutes'>{String(date.getMinutes()).padStart(2, '0')}</div> <span style={{color:'red'}}>:</span> 
                <div className='seconds'>{String(date.getSeconds()).padStart(2, '0')}</div>
                </div>
         </div>
        </>
    )
}