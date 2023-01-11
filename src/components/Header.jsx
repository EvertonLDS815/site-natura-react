import logo from "../assets/logo.png";
import { Container } from "../styles/styles";
import { useEffect, useState } from "react";

function Header() {
    const [search, setSearch] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const [opacity, setOpacity] = useState(false);

    const changeBackground = () => {
        if(window.scrollY > 0) {
            setOpacity(true);
            setSearch(false);
            setNavbar(false);
        } else {
            setOpacity(false);
        }
    };

    window.addEventListener("scroll", changeBackground);

    const toggleSearch = () => {
        setSearch(!search);
        setNavbar(false);
    }
    const toggleNav = () => {
        setSearch(false);
        setNavbar(!navbar);
    }
    
    return (
        <Container className={opacity ? "shadow" : ""}>
            <a href="#" className="logo">
                <img src={logo} alt="logo" />
            </a>
            {/* Menu Icon */}
            <i className="bx bx-menu" id="menu-icon" onClick={toggleNav}></i>
            <ul className={navbar ? "navbar active" : "navbar"}>
                <li><a href="#home">Home</a></li>
                <li><a href="#kits">Kits</a></li>
                <li><a href="#products">Produtos</a></li>
                <li><a href="#customers">Sócios</a></li>
            </ul>
            {/* Icon */}
            <div className="header-icon">
                <i className="bx bx-cart-alt"></i>
                <i className="bx bx-search" id="search-icon" onClick={toggleSearch}></i>
            </div>
            {/* Search Box */}
            <div className={search ? "search-box active" : "search-box"}>
                <input type="search" name="" id="" placeholder="Search Here..." />
            </div>
        </Container>
    )
}

export default Header;