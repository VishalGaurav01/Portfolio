import React from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Heroimg2 from '../components/heroimg2'
import AboutCont from '../components/aboutCont'
const About = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading='ABOUT' text='A Frontend Developer'/>
      <AboutCont/>
      <Footer/>
      
    </div>
  )
}

export default About