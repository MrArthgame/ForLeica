import React from 'react'
import style from './LatestNews.module.css'
import { IconButton } from '@material-ui/core'
import AddAlertIcon from '@material-ui/icons/AddAlert';
import img1 from '../../images/newProd.jpg'
import img2 from '../../images/newProd2.jpg'

export default function LatestNews() {
    return (
        <div className={style.newProd} >
            <div className={style.justBTN}>
                <IconButton >
                    <AddAlertIcon /><b>Latest News</b>
                </IconButton>
            </div>
            
            <div className={style.allProd}>
                <div className={style.prod}  >
                    <div className={style.prodSame}>
                        <img alt='sol' src={img1} />
                        <div className={style.hdiv}>
                            <h4>Solution1</h4>
                            <button className={style.btn}>VIEW</button>
                        </div>               
                    </div>
                </div>
                <div className={style.prod}  >
                    <div className={style.prodSame}>
                        <img alt='sol' src={img2} />
                        <div className={style.hdiv}>
                            <h4>Solution2</h4>
                            <button className={style.btn}>VIEW</button>
                        </div>               
                    </div>
                </div>
            </div>
        </div>
    )
}
