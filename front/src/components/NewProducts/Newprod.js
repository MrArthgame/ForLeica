import React from 'react'
import style from './Newprod.module.css'
import { IconButton } from '@material-ui/core'
import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms';
import img1 from '../../images/prod1.png'
import img2 from '../../images/product2.jpg'

export default function Newprod() { 
    return (
        <div className={style.newProd} >
            <div className={style.justBTN}>
                <IconButton >
                    <AccessAlarmsIcon /><b>New Products</b>
                </IconButton>
            </div>
            
            <div className={style.allProd}>
                <div className={style.prod}  >
                    <div className={style.prodSame}>
                        <img alt='sol' src={img1} />
                        <div className={style.hdiv}>
                            <h4>Solution1</h4>
                            <button className={style.btn}>view</button>
                        </div>               
                    </div>
                </div>
                <div className={style.prod}  >
                    <div className={style.prodSame}>
                        <img alt='sol' src={img2} />
                        <div className={style.hdiv}>
                            <h4>Solution2</h4>
                            <button className={style.btn}>view</button>
                        </div>               
                    </div>
                </div>
            </div>
        </div>
    )
}
