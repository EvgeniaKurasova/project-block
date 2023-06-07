import './HeaderMenu.css'
//import headerArrowDown from 'images/arrow_down.png'

type Props = {}
const HeaderMenu = (props: Props) => {
    return (
        <div className="HeaderMenuBlock">
            <ul className="HeaderMenu">
                <li className="HeaderMenuItem">
                    <a href="#"></a>
                    Home
                    <div className="line"></div>
                </li>
                <li className="HeaderMenuItem HeaderMenuItemDrop">
                    <div className="HeaderMenuItemArrow">
                        <a href="#"></a>
                        Categories
                        <img
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
                    <a href="#"></a>
                    About us
                    <div className="line"></div>
                </li>
                <li className="HeaderMenuItem">
                    <a href="#"></a>
                    Contacts
                    <div className="line"></div>
                </li>
            </ul>
        </div>
    )
}
export default HeaderMenu

/*<div className='greenLine'></div>*/
