/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react'
import { Container } from '@mui/material'
import logo2 from 'assets/logo2.png'
import './Header2.scss'
interface Props {}

const Header2 = (props: Props) => {
  return (
        <header className="header2">
            <Container maxWidth="xl">
                <div className="header2block">
                    <div className="header2-logo-block">
                        <img
                            src={logo2}
                            alt="blog-logo"
                            className="logo2-img"
                        />
                    </div>
                    <div className="header2-menu-block">
                    <ul className="header2-menu-ul">
                        <li className="header2-menu-item">Home</li>
                        <li className="header2-menu-item header2-menu-item-drop">Categories
                        <img
                            alt="arror_down"
                            className="header-arrow-down"
                            src="images/arrow_down.png"
                        /></li>
                        <li className="header2-menu-item">Contact</li>
                        <li className="header2-menu-item">About Us</li>
                    </ul>
                    </div>
                    <div className='app-bar-part'>
                        <div className='hamburger'>
                        <div className='hamburger-line'></div>
                        <div className='hamburger-line'></div>
                        <div className='hamburger-line'></div>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
  )
}

export default Header2
