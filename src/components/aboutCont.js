import { Link } from 'react-router-dom'
import './aboutstyle.css'
import img5 from '../images/pic5.png'
import img6 from '../images/img6.jpg'
import React from 'react'

const AboutCont = () => {
  return (
    <div className='about'>
        <div className='left'>
        <h1>Who Am I?</h1>
            <p>Actions speak louder than words</p>
            <Link to='/contact'> <button className='btn'>CONTACT</button></Link>
        </div>
        <div className='right'>
        <div className='img-con'>
            <div className='img-stack top'>
                <img src={img5} className='img' alt='img'></img>
            </div>
            <div className='img-stack bottom'>
                <img src={img6} className='img' alt='img'></img>
            </div>
        </div>
        </div>
    </div>
  )
}

export default AboutCont