import React from 'react'
import '../Services/Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>HTML.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>CSS</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>JavaScript</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>React Library</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Responsive Web Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Debugging</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Git</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Materialize</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>JQuery</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>SEO</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Other Skills</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Teamwork</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Verbal & Written Communication</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Search Engine Optimization</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Use Experience</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Cross-browser & device testing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creativity</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Problem Solving</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Listening Skills</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Critical Thinking</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design</p>
            </li>
          </ul>
        </article>

        {/* <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article> */}
      </div>
    </section>
  )
}

export default Services