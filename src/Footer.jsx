import './footer.css'
import powerButton from './assets/powerButton.png'
export default function Footer () {
    return (
        <>
         <div className='footerContainer' >
            <div style={{display:'flex',gap:'1rem',justifyContent:"flex-start",alignItems:'center',paddingLeft:'1rem'}}>
                <div className='dot' style={{width:'1.5rem',height:'1.5rem',borderRadius:'50%'}}></div>
                <div style={{fontSize:'2rem',fontFamily:'Special Elite',color:'white'}}>online</div>
            </div>
            <div className='powerContainer' style={{display:'flex',justifyContent:'center',alignItems:'center',cursor:'pointer'}} onClick={()=>{
                document.getElementsByClassName('shutdownWarning')[0].style.display = 'flex'
            }}>
                 <img src={powerButton} alt='powerButton'/>
                 <div style={{fontSize:'2rem',fontFamily:'Special Elite',color:'white'}}>Shut Down</div>
            </div>
         </div>
         <div className='shutdownWarning' style={{height:'100vh',width:'100vw',position:'absolute',top:'0',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:'1rem',display:'none'}}>
             <div className='shutdownContainer' style={{width:'30vw'}}>
                   <div style={{fontSize:'5rem',fontFamily:'Aladin',textAlign:'center',paddingBottom:'0.7rem'}} className='warningText'>Warning</div>
                   <div style={{fontSize:'2rem',fontFamily:'Special Elite'}}>Are you sure you want to shut down this system?</div>
                   <div style={{display:'flex',justifyContent:'space-evenly',gap:'5rem',paddingTop:'2rem',fontSize:'2rem',fontFamily:'Special Elite'}}>
                    <div className='cancelButton' onClick={()=>{
                        document.getElementsByClassName('shutdownWarning')[0].style.display = 'none'
                    }}>Cancel</div>
                    <div className='shutdownButton' onClick={()=>{
                        document.getElementsByClassName('mainContainer')[0].style.display = 'none'
                        document.getElementsByClassName('thankContainer')[0].style.display = 'flex'
                    }}>Shut Down</div>
                   </div>
             </div>
         </div>
        </>
    )
}