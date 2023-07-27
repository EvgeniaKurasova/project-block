/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import './ContactSubmit.scss'
import React from 'react'
import GreenLineDecor from 'components/GreenLineDecor/GreenLineDecor'
import { Container, Button } from '@mui/material'

interface Props {}

const ContactSubmit = (props: Props) => {
  return (
        <div className="contactSubmit">
            <Container maxWidth="xl">
                <div className="submit-block">
                    <img
                        src="images/contact-page-img.jpg"
                        className="contact-submit-img"
                    />
                    <div>
                        <div className="submitTitle">
                            <h2 className="blockSubmitContacts">
                                Get in touch with us
                            </h2>
                            <GreenLineDecor />
                            <div className="submit-lin">
                                <input
                                    id="filled-basic"
                                    placeholder="First Name"
                                    className="submit-text-field-lin"
                                />
                                <input
                                    id="filled-basic"
                                    placeholder="Last Name"
                                    className="submit-text-field-lin"
                                />
                            </div>
                            <input
                                id="filled-basic"
                                placeholder="Email Address"
                                className="submit-text-field"
                            />
                            <input
                                id="filled-basic"
                                placeholder="Subject"
                                className="submit-text-field"
                            />
                            <textarea
                                id="filled-basic"
                                placeholder="Your Massage"
                                className="submit-text-field text-area"
                            />
                            <Button
                                variant="contained"
                                className="submit-button"
                            >
                                Submit Form
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
  )
}
export default ContactSubmit
