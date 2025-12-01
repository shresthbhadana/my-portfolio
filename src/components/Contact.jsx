import React from 'react'
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";

const Contact = () => {
  return (
    
    <>
    <div className="contaner contact">
      <h1>Contact me</h1>
      <div className="contact-icon">

<a href='https://www.linkedin.com/in/shresth-bhadana-7b5649295/' target='_blank' className="items">
          <CiLinkedin className='icon' />
        </a>
        <a href='https://github.com/shresthbhadana'  target='_blank' className="items">
          <FaGithub className='icon' />
        </a>
        
        
        <a  href= "mailto:shresthbhadana@gmail.com"  target='blank'  className="items">
          <MdOutlineEmail className='icon' />
        </a>
        <a href="tel:+917456912540" className="items">
  <FaPhoneSquareAlt className='icon' /> 
</a>
      </div>
    </div>
    
    </>
  )
}

export default Contact
