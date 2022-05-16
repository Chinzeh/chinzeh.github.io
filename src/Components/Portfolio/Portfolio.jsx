import React from 'react'
import '../Portfolio/Portfolio.css'
import IMG1 from '../../Img/portfolio1.png'
import IMG2 from '../../Img/portfolio2.png'
import IMG3 from '../../Img/portfolio3.png'
import IMG4 from '../../Img/portfolio4.png'
import IMG5 from '../../Img/portfolio5.png'
import IMG6 from '../../Img/portfolio6.png'


const data = [
  {
    id: 1,
    Img: IMG1,
    title: 'Current Time, Date & Year',
    github: 'https://github.com/Chinzeh/Current-Time-Date-Month-and-Year-using-JS',
    demo: 'https://codepen.io/chinzeh/pen/MWQKjOw'
  },
  {
    id: 2,
    Img: IMG2,
    title: 'Simple Calculator',
    github: 'https://github.com/Chinzeh/Simple-Calculator-with-JS',
    demo: 'https://codepen.io/chinzeh/pen/wvyMzGY'
  },
  {
    id: 3,
    Img: IMG3,
    title: 'Clock',
    github: 'https://github.com/Chinzeh/Working-clock-with-CSS',
    demo: 'https://codepen.io/chinzeh/pen/PoExexz'
  },
  {
    id: 4,
    Img: IMG4,
    title: 'Multi-Layer Text',
    github: 'https://github.com/Chinzeh/Multi-layer-Text-on-Hover',
    demo: 'https://codepen.io/chinzeh/pen/vYdEQrR'
  },
  {
    id: 5,
    Img: IMG5,
    title: 'Weather App',
    github: 'https://github.com/Chinzeh/Weather-App',
    demo: 'https://codepen.io/chinzeh/pen/MWQKeZR'
  },
  {
    id: 6,
    Img: IMG6,
    title: 'Slider Signup/Signin',
    github: 'https://github.com/Chinzeh/Slider-Sign-in-Sign-up-Page',
    demo: 'https://codepen.io/chinzeh/pen/GRQRqRG'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       {
         data.map(({id, Img, title, github, demo}) =>{
           return(
            <article className="portfolio__item">
            <div className="portfolio__item-img">
              <img src={Img} alt={id} />
            </div>
            <h3>{title}</h3>
           <div className="portfolio__item-cta">
           <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
           </div>
          </article>
           )
         })
       }

      

      </div>
    </section>
  )
}

export default Portfolio