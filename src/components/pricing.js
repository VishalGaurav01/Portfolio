import { Link } from 'react-router-dom';
import './pricingstyle.css';


import React from 'react'

const Pricing = () => {
  return (
    <div className='pricing'>
        <div className='card-con'>
            <div className='card'>
                <h3>- Basic -</h3>
                <span className='bar'></span>
                <p className='btc'>$ 100</p>
                <p>- 3 Days -</p>
                <p>- 3 Pages -</p>
                <p>- Feactured -</p>
                <p>- Responsive Design -</p>
                <Link to='/contact' className='btn'>Purchase Now</Link>
            </div>

            <div className='card'>
                <h3>- Medium -</h3>
                <span className='bar'></span>
                <p className='btc'>$ 200</p>
                <p>- 2 Days -</p>
                <p>- 5 Pages -</p>
                <p>- Feactured -</p>
                <p>- Responsive Design -</p>
                <Link to='/contact' className='btn'>Purchase Now</Link>
            </div>

            <div className='card'>
                <h3>- Advance -</h3>
                <span className='bar'></span>
                <p className='btc'>$ 300</p>
                <p>- 5 Days -</p>
                <p>- 8 Pages -</p>
                <p>- Feactured -</p>
                <p>- Responsive Design -</p>
                <Link to='/contact' className='btn'>Purchase Now</Link>
            </div>


        </div>
    </div>
  )
}

export default Pricing