import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Heroimg2 from '../components/heroimg2'
import Pricing from '../components/pricing'
import Workmain from '../components/workmain'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading='PROJECTS' text='Some of my most recent works'/>
      <Workmain/>
      <Pricing/>
      <Footer/>
    </div>
  )
}

export default Project