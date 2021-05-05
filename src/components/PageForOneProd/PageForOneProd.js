import React from 'react'
import style from './PageForOneProd.module.css'
import img1 from '../../images/lc1.jpg'
import { Button } from '@material-ui/core'

export default function PageForOneProd() {
    return (
        <div className={style.parent}>
            <h1>Here we go</h1>
            <div className={style.forContent}>
                <div className={style.forIMG}>
                    <img alt='' src={img1} />
                </div>
                <div className={style.forTXT}>
                    <p> jhdbvjhbdcb cbhjbd  bkehbcgb  hbejk bkds gy fygbcy wbyuwe chc uigew bygc ygk wgyuwbsl ug dg uigw eg </p>
                    <Button ><b>Contact Us</b></Button>
                </div>
            </div>
        </div>
    )
}
