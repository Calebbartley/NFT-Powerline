import React from 'react'
import './Header.css'
import powerline from '../assets/powerline.png'
import search from '../assets/search.png'
import bulb from '../assets/bulb.ico'

const Header = () => {
  return (
      <div className='header'>
        <div className='logoContainer'>
            <img src={powerline} className='powerline' alt=''/>
        </div>
        <div className='searchBar'>
          <div className='searchIconContainer'>
            <img src={search} className='search' alt='' />
          </div>
          <input className='searchInput' type='text' placeholder='Collection, Item, or User...' />
        </div>

        <div className='headerItems'>
          <p>Drops</p>
          <p>Marketplace</p>
          <p>Create</p>
        </div>
        <div className='headerActions' >
          <div className='themeSwitchContainer' >
            <img src={bulb}/>
          </div>
        </div>
        <div className='loginButton' >GET IN</div>
      </div>
  )
}

export default Header