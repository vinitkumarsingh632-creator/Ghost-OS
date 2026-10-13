export default function Color ({name}) {
    const elements = document.getElementsByClassName('sameColor')[0]
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = name
    }
    return (
        <>
          <div style={{paddingTop:'0.6rem',fontSize:'1.3rem',color:'white',fontFamily:'Special Elite'}}>
            Color Changed Successfully to {name}!!!
          </div>
        </>
    )
}