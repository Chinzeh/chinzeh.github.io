import React from 'react'
import '../Footer/Footer.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {FiCodepen} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'>Chinzeh</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__Socials">
        <a href="https://facebook.com/chinzeh" target='_blank'><FaFacebookSquare/></a>
        <a href="https://twitter.com/chinzeh" target='_blank'><IoLogoTwitter/></a>
        <a href="https://github.com/chinzeh" target='_blank'><BsGithub/></a>
        <a href="https://codepen.io/chinzeh" target='_blank'><FiCodepen/></a>
        <a href="https://www.linkedin.com/in/chinedu-nzeteh-4758b112a" target='_blank'><BsLinkedin/></a>
        <a href="https://instagram.com/chinzeh" target='_blank'><FiInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Chinzeh. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer