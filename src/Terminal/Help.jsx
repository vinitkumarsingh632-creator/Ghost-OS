import '../Terminal.css'
export default function Help () {
    return (
        <>
          <div className='mainContainers'>
            <div className='helpContainer container'>
               <div>help</div>
               <div>Show available commands</div>
            </div>
             <div className='clearContainer container'>
                <div>clear</div>
                <div>Clear the Terminal</div>
             </div> 
             <div className='whoamiContainer container'>
                <div>whoami</div>
                <div>Display current user</div>
             </div>
             <div className='colorContainer container' >
                <div>color {'<name>'}</div>
                <div>Change color of the text</div>
             </div>
             <div className='scanContainer container'>
                 <div>scan</div>
                 <div>Detect ghost</div>
             </div>
          </div>
        </>
    )
}