import React from 'react'
import './navbar.css'
import logoDon from '../assets/logoDon.png'
import contactImg from '../assets/contact.png'
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={logoDon} alt='logoDon.png' className='logo' />
         <div className="desktopMenu">
          <Link className='desktopMenuListItem'>Home</Link>
          <Link className='desktopMenuListItem'>About</Link>
          <Link className='desktopMenuListItem'>Portfolio</Link>
          <Link className='desktopMenuListItem'>Clients</Link>
         </div>
         <button className='desktopMenuBtn'>
          <img src={contactImg} alt="contactImg " className='desktopMenuImg' /> Contact Me
         </button>
    </nav>
    
  )
}

export default Navbar
