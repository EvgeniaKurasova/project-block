/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import './ContactTitlePart.scss'
import React from 'react'
import GreenLineDecor from 'components/GreenLineDecor/GreenLineDecor'

interface Props {}

const ContactTitlePart = (props: Props) => {
  return (
    <div className="contactTitlePart">
        <h2 className='blockTitleContacts'>Get In Touch With Us</h2>
        <GreenLineDecor/>
        <div className='contact-line'>
            <div className='contact-line-item'>
              <img className='contact-line-img' src='images/contact-mail.png'/>
              <h3 className='contact'>Mail Me 24/7:</h3>
              <div className='contact-value'>Rivax@gmail.com</div>
            </div>
            <div className='contact-line-item'>
              <img className='contact-line-img' src='images/contact-call.png'/>
              <h3 className='contact'>Phone Me 24/7:</h3>
              <div className='contact-value'>+49 241 241</div>
            </div>
            <div className='contact-line-item'>
              <img className='contact-line-img' src='images/contact-send2.png'/>
              <h3 className='contact'>Follow Me:</h3>
              <div className='contact-value'>@Fonix_Food</div>
            </div>
        </div>
    </div>
  )
}
export default ContactTitlePart
