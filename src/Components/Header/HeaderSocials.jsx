import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {FaCodepen} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials' >
      <a href="https://linkedin.com/in/chinedu-nzeteh-4758b112a" target='_blank'><BsLinkedin/></a>
      <a href="https://github.com/chinzeh" target='_blank'><BsGithub/></a>
      <a href="https://twitter.com/chinzeh"target='_blank' ><BsTwitter/></a>
      <a href="https://codepen.io/chinzeh"><FaCodepen/></a>
    </div>
  )
}

export default HeaderSocials