import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to="/">
        <h3>Ecommerce</h3>
    </Link>
    <div className="Categories">
        <NavLink to={`/category/mochilas`} className={({isActive}) => isActive ? "ActiveOption" : "option"}>Mochilas</NavLink>
        <NavLink to={`/category/bolsos`} className={({isActive}) => isActive ? "ActiveOption" : "option"}>Bolsos</NavLink>
        <NavLink to={`/category/riñoneras`} className={({isActive}) => isActive ? "ActiveOption" : "option"}>Riñoneras</NavLink>
    </div>
    <CartWidget />
    </nav>
    )
}

export default NavBar
