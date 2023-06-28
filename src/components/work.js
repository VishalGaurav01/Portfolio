import './workstyle.css';

import React from 'react'
import { NavLink } from 'react-router-dom';

const Work = (props) => {
  return (
    <div className='pro-card'>
          <img src={props.imgsrc} alt='pic2'/> 
          <h2 className='pro-title'>{props.title}</h2>
          <div className='pro-details'>
            <p>{props.text}</p>
            <div className='pro-btns'>
                <NavLink to={props.view} className='btn'>View</NavLink>
                <NavLink to={props.view} className='btn'>Source</NavLink>
            </div>
          </div> 
        </div>
  )
}

export default Work