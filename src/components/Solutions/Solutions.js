import React from 'react'
import img1 from '../../images/surgery.jpg'
import img2 from '../../images/home_lab.jpg'
import solstyle from './Solutions.module.css'

export default function Solutions() {
    let m=[
        {img:img1,p:'Medical Solutions'},
        {img:img2,p:'Laboratory Solutions'},
    ]
    let ams=m.map(info=>{return(
        <div className={solstyle.sol}  >
                <div className={solstyle.solSame}>
                    <img alt='sol' src={info.img} />
                    <div className={solstyle.hdiv}>
                        <h1>{info.p}</h1>
                    </div>               
                </div>
        </div>
    )})
    return (  
        <div className={solstyle.allSol}>      
            {ams}            
        </div>            
    )
}
