import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div class="contact-form" id="Contact">
      <div class="w-left">
        <div class="awesome">
          <span>Get in Touch</span>
          <span>Contact me</span>
        </div>
      </div>
      <div class="c-right">
        <form>
          <input type="text" name="user_name" class="user" placeholder="Name" required="" />
          <input type="email" name="user_email" class="user" placeholder="Email" required="" />
          <textarea name="message" class="user" placeholder="Message" required=""></textarea>
          <input type="submit" class="button" value="Send" />
        </form>
      </div>
    </div>
  )
}

export default Contact;
