import './workstyle.css';

import React from 'react'
import Work from './work';
import Workcarddata from './workcarddata'; 

const Workmain = () => {
  return (
    <div className='work-con'>
    <h1 className='pro-head'>PROJECTS</h1>
    <div className='pro-con'>
       {Workcarddata.map((val,ind)=>{
        return(
            <Work
            key={ind}
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
            view={val.view}/>
        )
       })} 
    </div>
    </div>
  )
}

export default Workmain