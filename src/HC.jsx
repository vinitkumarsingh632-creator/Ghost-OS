import './hc.css';
import hcLogo from './assets/hcb.webp';
export default function HC () {
    return (
        <>
         <div style={{display:'flex',justifyContent:'center','alignContent':'center',flexDirection:'column',width:'6vw',cursor:'pointer',gap:'1rem'}}>
            <a href="https://3am.hackclub.com/" target='_blank' style={{textDecoration:'none'}}>
                <img src={hcLogo} alt="hc logo" style={{width:'6vw'}} />
            <div style={{textAlign:'center',fontSize:'1.5rem',fontFamily:'Special Elite',color:'white',marginTop:'0.5rem'}}>3AM</div>
            </a>
         </div>
        </>
    )
}