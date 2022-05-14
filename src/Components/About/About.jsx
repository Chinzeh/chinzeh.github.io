import React from 'react'
import '../About/About.css'
import Me from '../../Img/Mee.png'
import {RiCodeSSlashLine} from 'react-icons/ri'
import { SiWordpress } from "react-icons/si"
import {IoSchoolOutline} from 'react-icons/io5'

const about = () => {
  return (
    <section id='about'className='container'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={Me} alt="About-Me" />
          </div>
        </div>
        <div className="about__content">
         
          <div className="about__cards">
            <article className='about__card'>
              <RiCodeSSlashLine className='about__icon'/>
               <h5>Projects</h5>
               <small>Over 10+ projects </small>
            </article>

            <article className='about__card'>
              <SiWordpress className='about__icon'/>
               <h5>No Code Development</h5>
               <small>Wordpress</small><br />
               <small>Bubble</small>
            </article>

            <article className='about__card'>
              <IoSchoolOutline className='about__icon'/>
               <h5>Experience</h5>
               <small>Over 2+ years experience</small>
            </article>
          </div>

          <p>
            Hi, I'm a freelance front-end developer with 2+ years experience creating beautiful and responsive websites for web and mobile. 
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about