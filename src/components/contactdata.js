import './contactdatastyle.css'


import React from 'react'

const Contactdata = () => {
  return (
    <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16212.351057406504!2d72.77675280893705!3d21.163091115814677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04dec8b56fdf3%3A0x423b99085d26d1f9!2sSardar%20Vallabhbhai%20National%20Institute%20of%20Technology%2C%20SVNIT.!5e0!3m2!1sen!2sin!4v1687901111136!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div className='form'>
        <form action='https://formspree.io/f/mrgwzbqg' method="POST">
            <label>Your Name</label>
            <input type='text'name='Name' autoComplete='off' required></input>
            <label>Email</label>
            <input type='email' name='Email' autoComplete='off' required></input>
            <label>Subject</label>
            <input type='text'name='Subject' autoComplete='off' required></input>
            <label>Message</label>
            <textarea rows='6'name='Message' placeholder='Type your message here'/>
            <button className='btn'>Submit</button>
        </form>
        </div>
    </div>
  )
}

export default Contactdata