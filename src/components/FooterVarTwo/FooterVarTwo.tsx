/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Button, Container } from '@mui/material'
import './FooterVarTwo.scss'
import logo from 'assets/logo.png'
import React from 'react'

interface Props {}

const FooterVarTwo = (props: Props) => {
  return (
    <footer className='footer-var-two'>
        <Container maxWidth='xl'>
        <div className='footer-block'>
            <div className='footer-block-item'>
            <img src={logo} alt="blog-logo" className="logo-img" />
                <p className='footer-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam obcaecati iure deserunt fuga quisquam, sequi eos accusantium voluptatem repudiandae labore officia odit! Similique incidunt quibusdam illum delectus iste animi dolore!</p>
            </div>
            <div className='footer-block-item'>
                <h2 className='footer-title-item-two'>Recent Posts</h2>
                <div className='footer-post-item'>
                    <img className='footer-img' src='images/contact-footer-img.jpg'/>
                    <div className='footer-post-item-text'>
                        <div className='footer-post-item-title'>
                            Grilled Octopus, Olive Oil And Gremolata
                        </div>
                        <div className='footer-post-item-time'>
                            <img className='calendar-img' src='images/contact-calendar.png'/> September 6, 2022
                        </div>
                    </div>
                </div>
                <div className='footer-post-item'>
                <img className='footer-img' src='images/contact-footer-img2.jpg'/>
                    <div className='footer-post-item-text'>
                        <div className='footer-post-item-title'>
                            7Ways to Make Your Desk Lunch Less Sad
                        </div>
                        <div className='footer-post-item-time'>
                            <img className='calendar-img' src='images/contact-calendar.png'/> September 6, 2022
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-block-item'>
                <h2>Get Every Newsletter</h2>
                <p className='font-family: 'Libre Baskerville', sans-serif;
    letter-spacing: 1.4px;
    font-weight: 700;
    font-size: 1.1rem;'>Enter Email here to be updated. We promise not to send you spam!</p>
                <input placeholder="Email"className='foter-maim-input'/>
                <Button className='foter-maim-button'></Button>
            </div>
        </div>
        </Container>
    </footer>
  )
}
export default FooterVarTwo
