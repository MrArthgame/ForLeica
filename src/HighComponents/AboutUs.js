import React from 'react'
import style from './AboutUs.module.css'
import img1 from '../images/lc1.jpg'
import img2 from '../images/lc2.jpg'
import img3 from '../images/lc3.jpg'
import img4 from '../images/lc4.jpg'
import img5 from '../images/tobe0.jpg'


export default function AboutUs() {
    return (
        <div>
            <div className={style.forIMG}>
                <img alt='img' src={img1} />
                <img alt='img' src={img2} />
                <img alt='img' src={img3} />
                <img alt='img' src={img4} />
            </div>
            

           <div style={{marginLeft:'45%'}}>
                <h1>About Us</h1>
            </div>
            <div className={style.content}>
                <div className={style.forContIMG}>
                    <img alt='img' src={img5} />
                </div>                
                <div>
                    <h1>Authorized distributor for Leica LLC in the Republic of Armenia</h1>
                    <p> Our company was founded in 2000 and since then has been successfully operating in the field of importing various types of high-tech equipment to Armenia. Geo-Nal LLC has started its first cooperation with the Swiss company Leica Geosystems, which is one of the largest manufacturers and producers of metrographic and geodetic systems in the world.</p>
                </div>
            </div>
            
        </div>
    )
}
