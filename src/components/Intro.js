import React from 'react'
import "./intro.css"
import bg from "../assets/image.png"
import btnImg from "../assets/hireme.png"

import {Link} from 'react-scroll';


const intro = () => {
  return (
    <section id='intro'>
        <div className="introcontent">
            <span className='hello'>Hello, </span>
            <span className="introText">I'm <span className="introName">Donovan <br />Web Developer</span></span>
            <p className="intropara">I am a skilled web Developer with experience in <br /> creating web apps</p>
            <Link><button className='btn'><img src={btnImg} className='btnImg' alt="Hire Me Image" />Hire Me</button></Link>
        </div>
        <img src={bg} alt="Profile" className='bg' />
        
    </section>
  )
}

export default intro
