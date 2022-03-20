import React from 'react';
import style from './Header.module.scss';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Drawers from '../Drawer/Drawers';
import { useEffect } from 'react';
import { useRef } from "react";
const Header = () => {
    const HeaderFixed = useRef(null);
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });
    const isSticky = (e) => {
        const scrollTop = window.scrollY;
        scrollTop >= 250 ? HeaderFixed.current.classList.add('isStickys') : HeaderFixed.current.classList.remove('isStickys');
    };
    return (
        <Navbar expand="lg" className={style.NavbarWrap} ref={HeaderFixed} >
            <Container fluid>
                <Navbar.Brand href="/" className={style.imgWrap}>
                    <img src='https://kenozoik.qodeinteractive.com/wp-content/uploads/2018/06/logo-kenozoik-img-1.png' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={style.navWrapper}>

                        <NavDropdown className={style.navLink}
                            title={
                                <div className={style.linkWrapper}>
                                    <a className={style.linkhover} href="#">Home</a>
                                </div>
                            }
                        >
                            <NavDropdown.Item href="/">
                                <div className={style.linkWra}>
                                    <span className={style.linkhr}></span>
                                    Action
                                </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/">
                                <div className={style.linkWra}>
                                    <span className={style.linkhr}></span>
                                    Action
                                </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/">
                                <div className={style.linkWra}>
                                    <span className={style.linkhr}></span>
                                    Action
                                </div>
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown className={style.navLink}
                            title={
                                <div className={style.linkWrapper}>
                                    <a className={style.linkhover} href="">Pages</a>
                                </div>
                            }
                        >
                            <NavDropdown.Item href="/">
                                <div className={style.linkWra}>
                                    <span className={style.linkhr}></span>
                                    Action
                                </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/">
                                <div className={style.linkWra}>
                                    <span className={style.linkhr}></span>
                                    Action
                                </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/">
                                <div className={style.linkWra}>
                                    <span className={style.linkhr}></span>
                                    Action
                                </div>
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown className={style.navLqink}
                            title={
                                <div className={style.linkWrapper}>
                                    <a className={style.linkhover} href="#">Portfolio</a>
                                </div>
                            }
                        >
                            <NavDropdown className={style.navLinks}
                                style={{
                                    position: "absolute",
                                    top: "15%",
                                    left: "51%",
                                    height: "297px",
                                    transform: "translate(-49%, 6%)",
                                    backgroundColor: "#fff",
                                    maxWidth: "98vw",
                                    width: "98vw",
                                }}
                                title={
                                    <div className={style.WrapLinks}>
                                        <div className={style.ItemLinkWrap}>
                                            <NavDropdown.ItemText>TYPES</NavDropdown.ItemText>

                                            <NavDropdown.Item href="/">
                                                <div className={style.linkWra}>
                                                    <span className={style.linkhr}></span>
                                                    Action
                                                </div>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="/">
                                                <div className={style.linkWra}>
                                                    <span className={style.linkhr}></span>
                                                    Action
                                                </div>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="/">
                                                <div className={style.linkWra}>
                                                    <span className={style.linkhr}></span>
                                                    Action
                                                </div>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="/">
                                                <div className={style.linkWra}>
                                                    <span className={style.linkhr}></span>
                                                    Action
                                                </div>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="/">
                                                <div className={style.linkWra}>
                                                    <span className={style.linkhr}></span>
                                                    Action
                                                </div>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="/">
                                                <div className={style.linkWra}>
                                                    <span className={style.linkhr}></span>
                                                    Action
                                                </div>
                                            </NavDropdown.Item>
                                        </div>
                                        <div className={style.ItemLinkWrap}>
                                            <NavDropdown.ItemText>TYPES</NavDropdown.ItemText>
                                            <NavDropdown.Item href="/">
                                                <div className={style.linkWra}>
                                                    <span className={style.linkhr}></span>
                                                    Action
                                                </div>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="/">
                                                <div className={style.linkWra}>
                                                    <span className={style.linkhr}></span>
                                                    Action
                                                </div>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="/">
                                                <div className={style.linkWra}>
                                                    <span className={style.linkhr}></span>
                                                    Action
                                                </div>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="/">
                                                <div className={style.linkWra}>
                                                    <span className={style.linkhr}></span>
                                                    Action
                                                </div>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="/">
                                                <div className={style.linkWra}>
                                                    <span className={style.linkhr}></span>
                                                    Action
                                                </div>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="/">
                                                <div className={style.linkWra}>
                                                    <span className={style.linkhr}></span>
                                                    Action
                                                </div>
                                            </NavDropdown.Item>
                                        </div>
                                        <div className={style.ItemLinkWrap}>
                                            <NavDropdown.ItemText>TYPES</NavDropdown.ItemText>
                                            <NavDropdown.Item href="/">
                                                <div className={style.linkWra}>
                                                    <span className={style.linkhr}></span>
                                                    Action
                                                </div>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="/">
                                                <div className={style.linkWra}>
                                                    <span className={style.linkhr}></span>
                                                    Action
                                                </div>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="/">
                                                <div className={style.linkWra}>
                                                    <span className={style.linkhr}></span>
                                                    Action
                                                </div>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="/">
                                                <div className={style.linkWra}>
                                                    <span className={style.linkhr}></span>
                                                    Action
                                                </div>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="/">
                                                <div className={style.linkWra}>
                                                    <span className={style.linkhr}></span>
                                                    Action
                                                </div>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="/">
                                                <div className={style.linkWra}>
                                                    <span className={style.linkhr}></span>
                                                    Action
                                                </div>
                                            </NavDropdown.Item>
                                        </div>
                                        <div className={style.ItemLinkWrap}>
                                            <NavDropdown.ItemText>TYPES</NavDropdown.ItemText>
                                            <NavDropdown.Item href="/">
                                                <div className={style.linkWra}>
                                                    <span className={style.linkhr}></span>
                                                    Action
                                                </div>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="/">
                                                <div className={style.linkWra}>
                                                    <span className={style.linkhr}></span>
                                                    Action
                                                </div>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="/">
                                                <div className={style.linkWra}>
                                                    <span className={style.linkhr}></span>
                                                    Action
                                                </div>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="/">
                                                <div className={style.linkWra}>
                                                    <span className={style.linkhr}></span>
                                                    Action
                                                </div>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="/">
                                                <div className={style.linkWra}>
                                                    <span className={style.linkhr}></span>
                                                    Action
                                                </div>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="/">
                                                <div className={style.linkWra}>
                                                    <span className={style.linkhr}></span>
                                                    Action
                                                </div>
                                            </NavDropdown.Item>
                                        </div>
                                    </div>
                                }
                            >
                            </NavDropdown>
                        </NavDropdown>

                        <NavDropdown className={style.navLsmink}
                            title={
                                <div className={style.linkWrapper}>
                                    <a className={style.linkhover} href="#">Portfolio</a>
                                </div>
                            }
                        >
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/">
                                    <div className={style.linkWra}>
                                        <span className={style.linkhr}></span>
                                        Action
                                    </div>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/">
                                    <div className={style.linkWra}>
                                        <span className={style.linkhr}></span>
                                        Action
                                    </div>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/">
                                    <div className={style.linkWra}>
                                        <span className={style.linkhr}></span>
                                        Action
                                    </div>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/">
                                    <div className={style.linkWra}>
                                        <span className={style.linkhr}></span>
                                        Action
                                    </div>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/">
                                    <div className={style.linkWra}>
                                        <span className={style.linkhr}></span>
                                        Action
                                    </div>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/">
                                    <div className={style.linkWra}>
                                        <span className={style.linkhr}></span>
                                        Action
                                    </div>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/">
                                    <div className={style.linkWra}>
                                        <span className={style.linkhr}></span>
                                        Action
                                    </div>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/">
                                    <div className={style.linkWra}>
                                        <span className={style.linkhr}></span>
                                        Action
                                    </div>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/">
                                    <div className={style.linkWra}>
                                        <span className={style.linkhr}></span>
                                        Action
                                    </div>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </NavDropdown>

                        <NavDropdown className={style.navLink}
                            title={
                                <div className={style.linkWrapper}>
                                    <a className={style.linkhover} href="#">Blog</a>
                                </div>
                            }
                        >
                            <NavDropdown.Item href="/">
                                <div className={style.linkWra}>
                                    <span className={style.linkhr}></span>
                                    Action
                                </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/">
                                <div className={style.linkWra}>
                                    <span className={style.linkhr}></span>
                                    Action
                                </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/">
                                <div className={style.linkWra}>
                                    <span className={style.linkhr}></span>
                                    Action
                                </div>
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown className={style.navLink}
                            title={
                                <div className={style.linkWrapper}>
                                    <a className={style.linkhover} href="#">Shop</a>
                                </div>
                            }
                        >
                            <NavDropdown.Item href="/">
                                <div className={style.linkWra}>
                                    <span className={style.linkhr}></span>
                                    Action
                                </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/">
                                <div className={style.linkWra}>
                                    <span className={style.linkhr}></span>
                                    Action
                                </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/">
                                <div className={style.linkWra}>
                                    <span className={style.linkhr}></span>
                                    Action
                                </div>
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown className={style.navLink}
                            title={
                                <div className={style.linkWrapper}>
                                    <a className={style.linkhover} href="#">Elements</a>
                                </div>
                            }
                        >
                            <NavDropdown.Item href="/">
                                <div className={style.linkWra}>
                                    <span className={style.linkhr}></span>
                                    Action
                                </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/">
                                <div className={style.linkWra}>
                                    <span className={style.linkhr}></span>
                                    Action
                                </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/">
                                <div className={style.linkWra}>
                                    <span className={style.linkhr}></span>
                                    Action
                                </div>
                            </NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                </Navbar.Collapse>
                <Drawers />
            </Container>
        </Navbar >
    );
};

export default Header;