import './ghostDetector.css'
import ghostLogo from './assets/ghostDetector.png'
export default function GhostDetector () {
    return (
        <>
          <div style={{display:'flex',justifyContent:'center','alignContent':'center',flexDirection:'column',width:'6vw',cursor:'pointer',gap:'1rem'}}>
            <a href="https://ghost-detector-omega.vercel.app/" target='_blank'>
             <img src={ghostLogo} alt="ghostLogo" style={{width:'6vw'}} />
             <div style={{textAlign:'center',fontSize:'1.5rem',fontFamily:'Special Elite',color:'white',marginTop:'0.5rem'}}>Ghost <br/>
             Detector</div>
            </a>
          </div>
        </>
    )
}