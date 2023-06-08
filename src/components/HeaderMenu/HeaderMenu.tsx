import './HeaderMenu.css'
import React from 'react'
// import headerArrowDown from 'images/arrow_down.png'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const HeaderMenu = (props: Props) => {
  return (
        <div className="HeaderMenuBlock">
            <ul className="HeaderMenu">
                <li className="HeaderMenuItem">
                    <a href="/">Home </a>

                    <div className="line"></div>
                </li>
                <li className="HeaderMenuItem HeaderMenuItemDrop">
                    <div className="HeaderMenuItemArrow">
                        <a href="/">Categories</a>
                        <img
                            alt="arror_down"
                            className="header-arrow-down"
                            src="images/arrow_down.png"
                        />
                    </div>
                    <div className="line"></div>
                    <ul className="subMenu">
                        <li className="dropMenu">Fast food</li>
                        <li className="dropMenu">Drinks</li>
                        <li className="dropMenu">Salads</li>
                        <li className="dropMenu">Appetizer</li>
                        <li className="dropMenu">Chicken</li>
                        <li className="dropMenu">Pizza</li>
                    </ul>
                </li>
                <li className="HeaderMenuItem">
                    <a href="/">About us</a>
                    <div className="line"></div>
                </li>
                <li className="HeaderMenuItem">
                    <a href="/">Contacts</a>
                    <div className="line"></div>
                </li>
            </ul>
        </div>
  )
}
export default HeaderMenu

/* <div className='greenLine'></div> */
