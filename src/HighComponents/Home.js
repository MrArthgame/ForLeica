import React from 'react'
import LatestNews from '../components/LatestNews/LatestNews'
import Newprod from '../components/NewProducts/Newprod'
import Solutions from '../components/Solutions/Solutions'

export default function Home() {
    return (
        <div className='perent' style={{marginTop:'10px'}} >            
            <Solutions />
            <Newprod />
            <LatestNews />            
        </div>
    )
}
