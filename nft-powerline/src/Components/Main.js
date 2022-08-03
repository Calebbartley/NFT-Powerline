import React, { useState, useEffect } from 'react'
import instagramLogo  from '../assets/instagram.png'
import twitterLogo  from '../assets/twitter.png'
import moreIcon  from '../assets/more.png'
import './Main.css'

const Main = ({selectedPowerline, powerLineData}) => {
    const [activePowerline, setActivePowerline] = useState(powerLineData[0]);

    useEffect(() => {
        setActivePowerline(powerLineData[selectedPowerline]);
    }, [powerLineData, selectedPowerline]);

  return (
    <div className='main'>
        <div className='mainContent'>
            <div className='powerlineHighlight'>
                <div className='powerlineContainer'>
                    <img className='selectedPowerline'
                    src={activePowerline.image_original_url}
                    alt='' />
                </div>
            </div>
            <div className='powerlineDetails' style={{color: '#fff'}} >
                <div className='title'>{activePowerline.name}</div>
                <span className='itemNumber'>.#{activePowerline.token_id}</span>
            </div>
            <div className='owner' >
                <div className='ownerImageContainer'>
                    <img src={activePowerline.owner.profile_img_url} alt='' />
                </div>
                <div className='ownerDetails' style={{color: '#fff'}} >
                    <div className='ownerNameAndHandle'>
                        <div>{activePowerline.owner.address}</div>
                        <div className='ownerHandle'>@EIOENT</div>
                    </div>
                    <div className='ownerLink'>
                        <img src={instagramLogo} alt='' />
                    </div>
                    <div className='ownerLink'>
                        <img src={twitterLogo} alt='' />
                    </div>
                    <div className='ownerLink'>
                        <img src={moreIcon} alt='' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main