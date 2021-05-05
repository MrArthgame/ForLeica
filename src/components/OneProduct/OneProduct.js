import React from 'react'
import style from './OneProduct.module.css'
import img1 from '../../images/product2.jpg'
import img2 from '../../images/home_lab.jpg'
import img3 from '../../images/surgery.jpg'
import img4 from '../../images/newProd2.jpg'
import { Link } from '@material-ui/core'

export default function OneProduct() {
    let m=[
        {id:1,img:img1,h2:'Brand Name',span:'Man Designer'},
        {id:1,img:img2,h2:'Brand Name',span:'Man Designer'},
        {id:1,img:img3,h2:'Brand Name',span:'Man Designer'},
        {id:1,img:img4,h2:'Brand Name',span:'Man Designer'},
    ]
    let prods=m.map((p)=>{
        return(
            <div className={style.product}>
                <div className={style.imgbox}>
                    <img alt='img' src={p.img}/>
                </div>
                <div className={style.details}>
                    <h2>{p.h2}<br/><span>{p.span}</span></h2>
                    <Link to="/">READ MORE</Link>	
                </div>
            </div>
        )
    })    
    
    return (
        <div className={style.allprod}>
            {prods}        
           
        </div>
    )
}
