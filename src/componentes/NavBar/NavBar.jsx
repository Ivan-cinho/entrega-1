
import "./NavBar.css"; 
import Brand from "../Brand/Brand.jsx";
import CartWidget from "../CartWidget/CartWidget.jsx";

const NavBar = () => {
    return (
        <header>
            <Brand/>
            <nav>
                <ul>
                    <li>Una</li>
                    <li>Duquesa</li>
                    <li>Triquiñuela</li>
                </ul>
            </nav>
            <CartWidget/>
        </header>
    )
}

export default NavBar;