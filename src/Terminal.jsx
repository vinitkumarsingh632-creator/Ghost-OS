import { useRef, useState, useEffect } from 'react'
import Help from './Terminal/Help'
import Whoami from './Terminal/Whoami'
import Color from './Terminal/Color'
import Scan from './Terminal/Scan'
import './Terminal.css'
import logo from './assets/Terminal.png'
export default function Terminal () {
     let pointerDown = useRef(false)
        let window = useRef({x:500,y:100})
        const path = 'root@ghostos:~$'
       
        const previous = useRef({x:0,y:0})
const [command, setCommand] = useState("")
const [history, setHistory] = useState([])
const [currentColor, setCurrentColor] = useState('white')
const inputRef = useRef(null)
const terminalRef = useRef(null)
       useEffect(() => {
    const terminalWindow = document.getElementsByClassName('terminalWindow')[0]
    if (terminalWindow) {
        terminalWindow.style.left = `${window.current.x}px`
        terminalWindow.style.top = `${window.current.y}px`
    }
}, [])

const executeCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase()
    const args = trimmedCmd.split(' ')
    const commandName = args[0]

    setHistory(prev => [...prev, { type: 'command', content: cmd }])

    switch (commandName) {
        case 'help':
            setHistory(prev => [...prev, { type: 'component', component: <Help /> }])
            break
        case 'clear':
            setHistory([])
            break
        case 'whoami':
            setHistory(prev => [...prev, { type: 'component', component: <Whoami /> }])
            break
        case 'color':
            if (args[1]) {
                setCurrentColor(args[1])
                setHistory(prev => [...prev, { type: 'component', component: <Color name={args[1]} /> }])
            } else {
                setHistory(prev => [...prev, { 
                    type: 'error', 
                    content: 'Usage: color <name> (e.g., color red, color #00ff00)' 
                }])
            }
            break
        case 'scan':
            setHistory(prev => [...prev, { type: 'component', component: <Scan /> }])
            break
        case '':
            break
        default:
            setHistory(prev => [...prev, { 
                type: 'error', 
                content: `Command not found: ${commandName}. Type 'help' for available commands.` 
            }])
    }
}

const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
        event.preventDefault()
        if (command.trim()) {
            executeCommand(command)
        }
        setCommand("")
    }
}

useEffect(() => {
    if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
}, [history])

const focusInput = () => {
    if (inputRef.current) {
        inputRef.current.focus()
    }
}
    return (
        <>
         <div className='terminal' style={{display:'flex',justifyContent:'center','alignContent':'center',flexDirection:'column',width:'6vw',cursor:'pointer',gap:'1rem'}} onClick={() => {
    document.getElementsByClassName('terminalWindow')[0].style.display = 'block'
    setTimeout(focusInput, 100)
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
            <div 
    className='mainTerminal' 
    ref={terminalRef}
    onClick={focusInput}
    style={{
        height: 'calc(100% - 60px)',
        overflowY: 'auto',
        padding: '1rem'
    }}
>
    <div className='write'>
        {history.length === 0 && (
            <div className='entry sameColor' style={{display: 'flex',flexDirection: 'column',fontSize: '1.3rem',gap: '0.6rem',color:currentColor
            }}>
                <div>Ghost OS [VERSION 1.0.0]</div>
                <div>Type 'help' to see all available commands.</div>
            </div>
        )}
        
        {history.map((item, index) => (
            <div key={index}>
                {item.type === 'command' && (
                    <div style={{ display: 'flex', gap: '1rem', paddingTop: index === 0 ? '0.6rem' : '0.3rem' }}>
                        <div style={{ fontSize: '1.3rem', color: 'blue' }}>{path}</div>
                        <div style={{ fontSize: '1.3rem', color: currentColor, fontFamily: 'Special Elite' }}>
                            {item.content}
                        </div>
                    </div>
                )}
                {item.type === 'component' && (
                    <div className='sameColor' style={{ color: currentColor }}>
                        {item.component}
                    </div>
                )}
                {item.type === 'error' && (
                    <div style={{ paddingTop: '0.6rem', fontSize: '1.3rem', color: '#ff4444', fontFamily: 'Special Elite'  }}>
                        {item.content}
                    </div>
                )}
            </div>
        ))}
        
        <div style={{ paddingTop: '0.6rem', display: 'flex', gap: '1rem' }}>
            <div style={{ fontSize: '1.3rem', color: 'blue' }}>{path}</div>
            <input
                ref={inputRef}
                type="text"
                value={command}
                style={{ fontSize: '1.3rem', paddingLeft: '0.4rem', backgroundColor: 'black', borderRadius: '10px', fontFamily: 'Special Elite',color: currentColor,border: 'none',outline: 'none',flex: 1
                }}className='sameColor'onChange={(event) => setCommand(event.target.value)}onKeyDown={handleKeyDown}autoFocus
            />
        </div>
    </div>
</div>

         </div>
        </>
    )
}