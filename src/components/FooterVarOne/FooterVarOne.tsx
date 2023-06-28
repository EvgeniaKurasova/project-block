/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Button, Container } from '@mui/material'
import './FooterVarOne.scss'
import logo from 'assets/logo.png'
import React from 'react'

interface Props {}

const FooterVarOne = (props: Props) => {
  return (
    <footer className='footer-var-one'>
        <Container maxWidth='xl'>
            <div>
                <Button>
                    <img/>
                    <div>Facebook</div>
                    <div>20K</div>
                </Button>
                <Button>
                    <img/>
                    <div>Instagram</div>
                    <div>75M</div>
                </Button>
                <Button>
                    <img/>
                    <div>Telegram</div>
                    <div>45K</div>
                </Button>
                <Button>
                    <img/>
                    <div>YouTube</div>
                    <div>750K</div>
                </Button>
            </div>
            <img src={logo} alt="blog-logo" className="logo-img" />
            <div>
                <p>Contact: +1-123-456-789</p>
                <div></div>
                <p>Email Us: info@example.com</p>
                <div></div>
                <p>Opening Hours: Mon - Sat: 10:00 - 18:00
                </p>
            </div>
            <div>© 2022, All Rights Reserved</div>
        </Container>
    </footer>
  )
}
export default FooterVarOne
