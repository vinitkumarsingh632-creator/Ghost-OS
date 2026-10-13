import '../Terminal.css'
export default function Help () {
    return (
        <>
          <div className='container'>
             <div className='generalConatainer'>
                <h2>GENERAL</h2>
                <div className='general1'>
                    <div>help</div>
                    <div>Show available commands</div>
                </div>
                <div className='general2'>
                       <div>clear</div>
                       <div>Clear Terminal</div>
                </div>
                <div className='general3'>
                     <div>whoami</div>
                     <div>Display current user</div>
                </div>
             </div>
             <div className='fsContainer'>
                <h2>FILESYSTEM</h2>
                <div className='fs1'>
                   <div>ls</div>
                   <div>List Directory Contents</div>
                </div>
                <div className='fs2'>
                    <div>cd {toString('<path>')}</div>
                    <div>Change Directory</div>
                </div>
                <div className='fs3'>
                    <div>mkdir {toString("<name>")}</div>
                    <div>Create Directory</div>
                </div>
                <div className='fs4'>
                     <div>cat {toString("<file>")}</div>
                     <div>To read file</div>
                </div>
             </div>
             <div className='otherContainer'>
                 <h2>Other</h2>
                 <div className='other1'>
                     <div>scan</div>
                     <div>Detect ghost</div>
                 </div>
                 <div className='other2'>
                     <div>color {toString("<name>")}</div>
                      <div>Change font color ex:color green</div>
                 </div>
                 <div className='other3'>
                    <div>shutdown</div>
                    <div>Shutdowns the system</div>
                 </div>
             </div>
          </div>
        </>
    )
}