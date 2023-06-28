import './heroimgstyle.css';
import ima from '../images/pic1.jpg';
import React from 'react'
import { Link } from 'react-router-dom';


const Heroimg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='into-img' src={ima} alt='ima'/>
        </div>
             <div className='content'>
                <p>I'm Vishal Gaurav</p>
                <h1>React Developer</h1>
                <div>
                <Link to='/project' className='btn'>PROJECTS</Link>
                <Link to='/contact' className='btn btn-light'>CONTACT</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg