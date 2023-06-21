/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import './ContactSubmit.scss'
import React from 'react'
import GreenLineDecor from 'components/GreenLineDecor/GreenLineDecor'
import { Container } from '@mui/material'

interface Props {}

const ContactSubmit = (props: Props) => {
  return (
        <div className="contactSubmit">
            <Container maxWidth='xl'>
                <div>
                    <img src='images/contact-page-img.jpg' className='contact-submit-img'/>
                    <div>
                        <div className='submitTitle'>
                        <h2 className="blockSubmitContacts">Get in touch with us</h2>
                        <GreenLineDecor />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
  )
}
export default ContactSubmit
