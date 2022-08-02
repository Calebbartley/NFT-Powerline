import React from 'react'
import instagramLogo  from '../assets/instagram.png'
import twitterLogo  from '../assets/twitter.png'
import moreIcon  from '../assets/more.png'
import './Main.css'

const Main = () => {
  return (
    <div className='main'>
        <div className='mainContent'>
            <div className='powerlineHighlight'>
                <div className='powerlineContainer'>
                    <img className='selectedPowerline'
                    src={'https://testnets.opensea.io/assets/rinkeby/0x78272efb09bbfbea2b2556d903d2bc438ab6ca14/1'}
                    alt='' />
                </div>
            </div>
            <div className='powerlineDetails' style={{color: '#fff'}} >
                <div className='title'>LA O.G.</div>
                <span className='itemNumber'>*#3</span>
            </div>
            <div className='owner' >
                <div className='ownerImageContainer'>
                    <img src={'https://testnets.opensea.io/assets/rinkeby/0x78272efb09bbfbea2b2556d903d2bc438ab6ca14/2'} alt='' />
                </div>
                <div className='ownerDetails'>
                    <div className='ownerNameAndHandle'>
                        <div>0x78272EFB09bBfBEa2b2556d903d2Bc438ab6cA14</div>
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