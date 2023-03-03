import React from 'react';
import styles from './Header.module.css';
import {Link, NavLink} from "react-router-dom";
import classes from 'classnames';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    const setActive = ({isActive}) => isActive ? 'active-link' : '';

    return (
        <>
            <div className={styles.header}>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>My-store</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavLink className={setActive} to="/">Главная</NavLink>
                                <NavLink className={setActive} to="/about-us">О нас</NavLink>
                                <NavLink className={setActive} to="/catalog">Продукция</NavLink>
                                <NavLink className={setActive} to="/accessory">Аксессуары</NavLink>
                                <NavLink className={setActive} to="/">Гарантия</NavLink>
                                <NavLink className={setActive} to="/">В кредит</NavLink>
                                <NavLink className={setActive} to="/">Статьи</NavLink>
                                <NavLink className={setActive} to="/contacts">Контакты</NavLink>
                                <NavLink className={setActive} to="/users">Users</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );
};

export default Header;
// <header className={classes(styles.header, 'container')}>
//     <nav>
//         <ul>
//             <li>
//                 <NavLink className={setActive} to="/">Главная</NavLink>
//             </li>
//             <li>
//                 <NavLink className={setActive} to="/about-us">О нас</NavLink>
//             </li>
//             <li>
//                 <NavLink className={setActive} to="/catalog">Продукция</NavLink>
//             </li>
//             <li>
//                 <NavLink className={setActive}  to="/accessory">Аксессуары</NavLink>
//             </li>
//             <li>
//                 <NavLink className={setActive} to="/">Гарантия</NavLink>
//             </li>
//             <li>
//                 <NavLink className={setActive} to="/">В кредит</NavLink>
//             </li>
//             <li>
//                 <NavLink className={setActive} to="/">Статьи</NavLink>
//             </li>
//             <li>
//                 <NavLink className={setActive} to="/contacts">Контакты</NavLink>
//             </li>
//         </ul>
//     </nav>
// </header>