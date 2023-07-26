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
        <div className="elementor-shape-foot elementor-shape-bottom" data-negative="false">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 20" preserveAspectRatio="none">
        <path className="elementor-shape-fill" d="M0,0v3c0,0,393.8,0,483.4,0c9.2,0,16.6,7.4,16.6,16.6c0-9.1,7.4-16.6,16.6-16.6C606.2,3,1000,3,1000,3V0H0z"></path>
        </svg></div>
        <Container maxWidth='xl'>
            <div className='footer-var-one-block'>
            <div className='footer-button-block'>
                <Button className='footer-social-button button-darkblue'>
                    <img className='footer-social-img' src='images/app-bar-facebook.png'/>
                    <div className='footer-social-text'>
                    <div>Facebook</div>
                    <div>20K</div>
                    </div>
                </Button>
                <Button className='footer-social-button button-violet'>
                    <img className='footer-social-img' src='images/app-bar-instagram.png'/>
                    <div className='footer-social-text'>
                    <div>Instagram</div>
                    <div>75M</div>
                    </div>
                </Button>
                <Button className='footer-social-button button-blue'>
                    <img className='footer-social-img' src='images/footer-telegram-w.png'/>
                    <div className='footer-social-text'>
                    <div>Telegram</div>
                    <div>45K</div>
                    </div>
                </Button>
                <Button className='footer-social-button button-red'>
                    <img className='footer-social-img' src='images/footer-youtube.png'/>
                    <div className='footer-social-text'>
                    <div>YouTube</div>
                    <div>750K</div>
                    </div>
                </Button>
            </div>
            <img src={logo} alt="blog-logo" className="footer-logo-img" />
            <div className='footer-down-text'>
                <p className='footer-down-p'>Contact: +1-123-456-789</p>
                <div className='footer-down-green-line'></div>
                <p className='footer-down-p'>Email Us: info@example.com</p>
                <div className='footer-down-green-line'></div>
                <p className='footer-down-p'>Opening Hours: Mon - Sat: 10:00 - 18:00
                </p>
            </div>
            <div className='footer-down-p'>© 2022, All Rights Reserved</div>
            </div>
        </Container>
    </footer>
  )
}
export default FooterVarOne
