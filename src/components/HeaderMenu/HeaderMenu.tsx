import './HeaderMenu.scss'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { categoriesArray } from 'utils/categoriesArray'
// import { type Category } from 'utils/categoriesArray'
// import { categoriesArray } from 'utils/categoriesArray'
// import headerArrowDown from 'images/arrow_down.png'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const HeaderMenu = (props: Props) => {
  return (
        <div className="HeaderMenuBlock">
            <ul className="HeaderMenu">
                <li className="header-menu-item">
                <NavLink to={'/'}>
                    Home
                </NavLink>
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
                    {
                        categoriesArray.map((category) => (
                            <li className="drop-menu-item" key={category.id}>
                            <Link to={`/categories/${category.id}`}>{category.title}</Link></li>
                        ))
                    }
                    </ul>
                </li>
                <li className="header-menu-item">
                <NavLink to={'/about_us'}>
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
                <li className="header-menu-item">
                    <NavLink to={'/liked_articles'}>
                    Liked
                    </NavLink>
                    <div className="line"></div>
                </li>
            </ul>
        </div>
  )
}
export default HeaderMenu
