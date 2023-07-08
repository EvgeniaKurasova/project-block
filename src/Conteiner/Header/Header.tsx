/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { Container } from '@mui/material'
import logo from 'assets/logo.png'
import HeaderMenu from 'components/HeaderMenu/HeaderMenu'
import './Header.scss'
import React from 'react'
import Swiper from 'components/Swiper/Swiper'

interface Props {}
const Header = (props: Props) => {
  return (
        <header className='header'>
            <div className="header-block">
                <Container maxWidth="md">
                    <div className="logo">
                        <img src={logo} alt="blog-logo" className="logo-img" />
                    </div>
                    <HeaderMenu/>
                    <Swiper/>
                </Container>
            </div>
            <div className="slider"></div>
        </header>
  )
}
// const Header: React.FunctionComponent = () => {
//   const heading = () => <h2>
//     <Slider/>
//     </h2>
//   return (
//       <div>
//         <Wrapper slider={heading} />
//       </div>
//   )
// }
export default Header
