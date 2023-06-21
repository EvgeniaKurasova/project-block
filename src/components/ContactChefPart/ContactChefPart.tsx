/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import './ContactChefPart.scss'
import React from 'react'
import GreenLineDecor from 'components/GreenLineDecor/GreenLineDecor'

interface Props {}

const ContactChefPart = (props: Props) => {
  return (
    <div className="contactChefPart">
        <h2 className='blockChehContacts'>Our Chef</h2>
        <GreenLineDecor/>
        <p className="contact-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  )
}
export default ContactChefPart
