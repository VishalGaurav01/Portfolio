import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Heroimg2 from '../components/heroimg2'
import Contactdata from '../components/contactdata'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="CONTACT" text='Lets have a chat'/>
      <Contactdata/>
      <Footer/>
    </div>
  )
}

export default Contact