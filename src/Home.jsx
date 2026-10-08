import './home.css'
import grimReaper from './assets/grimReaper.png'
export default function Home () {
    return (
        <>
        <div className='volumeWarning'>
            <h2 style={{textAlign:'center',fontFamily:'Aladin',fontSize:'3rem'}}>Warning</h2>
            <p style={{fontSize:'1.5rem',fontFamily:'Special Elite'}}>Increase Your Volume For Better Experience.</p>
        </div>
         <div style={{height:'100vh',width:'100vw',display:'flex',alignItems:'center'}}>
                <img src={grimReaper} style={{height:'70vh'}}/>
                <div style={{display:'flex',flexDirection:'column',}}>
                    <h2 style={{textAlign:'center'}}>YOU HAVE BEEN WARNED</h2>
                    <p>You are about to enter an environment that was never meant to be accessed.
                        Keep your volume high.<br/> Keep your lights on.
                        If you hear something that isn't coming from your device... don't look behind you.</p>
                </div>
         </div>
        </>
    )
}