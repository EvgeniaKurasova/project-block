/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { Container } from '@mui/material'
import logo from 'assets/logo.png'
import HeaderMenu from 'components/HeaderMenu/HeaderMenu'
import './Header.scss'
import React from 'react'

interface Props {}
const Header = (props: Props) => {
  return (
        <header className='header'>
            <div className="header-block">
                <Container maxWidth="md">
                    <div className="logo">
                        <img src={logo} alt="blog-logo" className="logo-img" />
                    </div>
                    <HeaderMenu />
                </Container>
            </div>
            <div className="slider"></div>
        </header>
  )
}
export default Header
