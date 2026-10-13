import './Terminal.css'
import logo from './assets/Terminal.png'
import { useRef,useState } from 'react'
import help from './Terminal/Help'
import Help from './Terminal/Help'
export default function Terminal () {
     let pointerDown = useRef(false)
        let window = useRef({x:500,y:100})
        const path = 'root@ghostos:~$'
        const [color,changeColor] = useState(false)
        const [help,setHelp] = useState(false)
        const [clear,setClear]  = useState(false)
        const [scan,setScan] = useState(false)
        const previous = useRef({x:0,y:0})
        const [history,setHistory] = useState([])
        const [print,setPrint] = useState(false)
        const [command,setCommand] = useState("")
       
    return (
        <>
         <div className='terminal' style={{display:'flex',justifyContent:'center','alignContent':'center',flexDirection:'column',width:'6vw',cursor:'pointer',gap:'1rem'}} onClick={()=>{
            document.getElementsByClassName('terminalWindow')[0].style.display = 'block'
         }}>
               <img src={logo} alt="terminal logo" style={{width:'6vw'}}/>
               <div style={{textAlign:'center',fontSize:'1.5rem',fontFamily:'Special Elite',color:'white',marginTop:'0.5rem'}}>Terminal</div>
         </div>
         <div className='terminalWindow' style={{width:'30vw',height:'60vh',position:'absolute',display:'none'}}>
            <div className='header' style={{padding:'0.5rem',color:'white',display:'flex',gap:'1rem',justifyContent:'space-between',alignItems:'center',cursor:'grab'}} 
           onPointerDown={(event)=>{
                previous.current = {
                    x:event.clientX,
                    y:event.clientY
                }
                pointerDown.current = true
            }} 
            onPointerUp={()=>{
        pointerDown.current = false}}
            onPointerMove={(event)=>{
                if(pointerDown.current == true){
                    document.getElementsByClassName('terminalWindow')[0].style.left = `${window.current.x + (event.clientX - previous.current.x)}px`
                    document.getElementsByClassName('terminalWindow')[0].style.top = `${window.current.y + (event.clientY - previous.current.y)}px`
                    window.current.x = window.current.x + (event.clientX - previous.current.x)
                    window.current.y = window.current.y + (event.clientY - previous.current.y)
                     previous.current = {
    x: event.clientX,
    y: event.clientY
};
                }
            }}>
               <div style={{paddingLeft:'1rem',fontSize:'1.5rem',fontFamily:'Special Elite'}}>Terminal</div>
               <svg className='crossButton' onClick={()=>{
    document.getElementsByClassName('terminalWindow')[0].style.display = 'none'
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
            <div className='mainTerminal'>
                  <div className='write' style={{paddingLeft:'1rem'}}>
                      <div className='entry sameColor' style={{display:'flex',flexDirection:'column',fontSize:'1.3rem',gap:'0.6rem'}}>
                       <div >Ghost OS {'[VERSION 1.0.0]'}</div>
                       <div>Type 'help' to see all available commands.</div>
                  </div>
                   <div style={{paddingTop:'0.6rem',display:'flex','gap':'1rem'}} >
                    <div style={{fontSize:'1.3rem',color:'blue'}}>{path}</div>
                    <input type="text" style={{fontSize:'1.3rem',paddingLeft:'0.4rem',backgroundColor:'black',borderRadius:'10px',fontFamily:'Special Elite'}} className='sameColor' onChange={(event)=>{
                        setCommand(event.target.value)
                    }} onKeyDown={(event)=>{
                        

                    }}/>
                   </div>
                  </div>
            </div>

         </div>
        </>
    )
}