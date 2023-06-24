import './HeaderMenu.scss'
import React from 'react'
import { NavLink } from 'react-router-dom'
// import headerArrowDown from 'images/arrow_down.png'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const HeaderMenu = (props: Props) => {
  return (
        <div className="HeaderMenuBlock">
            <ul className="HeaderMenu">
                <li className="header-menu-item">
                    <a href="/">Home </a>

                    <div className="line"></div>
                </li>
                <li className="header-menu-item header-menu-item-drop">
                    <div className="header-menu-item-arrow">
                    <NavLink to={'/categories'}>
                        Categories
                    </NavLink>
                        <img
                            alt="arror_down"
                            className="header-arrow-down"
                            src="images/arrow_down.png"
                        />
                    </div>
                    <div className="line"></div>
                    <ul className="subMenu">
                        <li className="drop-menu-item">Fast food</li>
                        <li className="drop-menu-item">Drinks</li>
                        <li className="drop-menu-item">Salads</li>
                        <li className="drop-menu-item">Appetizer</li>
                        <li className="drop-menu-item">Chicken</li>
                        <li className="drop-menu-item">Pizza</li>
                    </ul>
                </li>
                <li className="header-menu-item">
                <NavLink to={'/about-us'}>
                    About us
                </NavLink>
                    <div className="line"></div>
                </li>
                <li className="header-menu-item">
                    <NavLink to={'/contacts'}>
                    Contacts
                    </NavLink>
                    <div className="line"></div>
                </li>
            </ul>
        </div>
  )
}
export default HeaderMenu
