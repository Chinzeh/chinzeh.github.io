import React from 'react'
import '../Header/Header.css'
import CTA from './CTA'
import Me from '../../Img/Me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container" id='#'>
        <h5>Hello, I'm</h5>
        <h1>Chinedu Nzeteh</h1>
        <h5 className='text-light'>a Frontend Developer <small>(also learning web3)</small></h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={Me} alt="Me" />
        </div>

        <a href="#contact" className='Scroll__down'>Scroll Down</a> 
      </div>
    
        
    </header>
  )
}

export default Header