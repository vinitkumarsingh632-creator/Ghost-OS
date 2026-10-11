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
            <div className='powerContainer' style={{display:'flex',justifyContent:'center',alignItems:'center',cursor:'pointer'}}>
                 <img src={powerButton} alt='powerButton'/>
                 <div style={{fontSize:'2rem',fontFamily:'Special Elite',color:'white'}}>Shut Down</div>
            </div>
         </div>
        </>
    )
}