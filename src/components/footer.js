import {  FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaCode } from 'react-icons/fa';
import './footerstyle.css';
import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
            <div className='location'><FaHome size={20} style={{color:'white', marginRight:'2rem'}}/>
            <div>
                <p>Surat,Gujrat</p>
                <p>India</p>
            </div>
            </div>
            <div className='phone'><h4><FaPhone size={20} style={{color:'white' , marginRight:'2rem'}}/>+91 6206931015</h4></div>
            <div className='email'><h4><a href='mailto:vishalgaurav293@gmail.com'><FaMailBulk size={20} style={{color:'white' , marginRight:'2rem'}}/>vishalgaurav293@gmail.com</a></h4></div>
            </div>
            <div className='right'>
            <h4>About Myself</h4>
            <p>I am Vishal Gaurav, a student of NIT SURAT.</p>
            <p>I enjoy learning and developing new projects. </p>
            <div className='social'>
            <a href='https://leetcode.com/VishalGaurav01/'><FaCode size={30} style={{color:'white' , marginRight:'1rem'}}/></a>
            <a href='https://github.com/VishalGaurav01'><FaGithub size={30} style={{color:'white' , marginRight:'1rem'}}/></a>
            <a href='https://www.linkedin.com/in/vishal-gaurav-952b4a247/'><FaLinkedin size={30} style={{color:'white' , marginRight:'1rem'}}/></a>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
