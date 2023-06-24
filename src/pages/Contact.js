import React from 'react'

const Contact = () => {
  return (
    <>
   
    <div>
        <div className='Rooms'>
        <h1>Contact Us</h1>
            <div className='line'></div>
        </div>
   
    <section class="contact" id="contact">
         
         <div className='right'>
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7643.754109251824!2d74.21170459192008!3d16.683034663622077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc10006c613689f%3A0xd9fb9b3b0486aa7d!2sSambhaji%20Nagar%2C%20Kolhapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1687613416782!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
         </div>
 
         <div className='left'>
         <div class="content-text">
             <h2>Get In <span>Touch</span></h2>
           
             <div class="list">
                 <li><a href="#">+9200000000</a></li>
                 <li><a href="#">example@gmail.com</a></li>
                 <li><a href="#">India</a></li>
             </div>
         </div>
 
         <div class="contact-form">
             <form action="#">
                 <input type="name" placeholder="Name" required/>
                 <input type="number" placeholder="Phone" required/>
                 <input type="email" placeholder="Email" required/>
                 <textarea name="" id="" cols="35" rows="10" placeholder="Message"></textarea>
                 <input type="submit" value="Send" class="submit" required/>
 
             </form>
         </div>
         </div>
       
 
     </section>
    </div>
   
    </>
  )
}

export default Contact
