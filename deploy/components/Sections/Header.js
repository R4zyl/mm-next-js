import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

const Header = (props) => {
    const [isMobileMenu, setIsMobileMenu] = useState(false);
    const [isSearch, setIsSearch] = useState(false);

    const handleMobileMenu = e => {
        e.preventDefault();
        return setIsMobileMenu(!isMobileMenu);
    };

    return (
        <>
            <header id="top-page" className="header">
                <div id="mainNav" className={isMobileMenu ? 'main-menu-area animated mobile-menu-open' : 'main-menu-area animated'}>
                    <Container>
                        <Row className="align-items-center">
                            
                            <Col className="col-12 col-lg-2 d-flex justify-content-between align-items-center">

                                {/* <!-- Logo --> */}
                                <div className="logo">
                                    
                                    <Link href="/">
                                        <a className="navbar-brand navbar-brand1">
                                            <img src="/images/logoImg.png" srcSet={`/images/logoImg.png 2x`} alt="logo" height="80px"/>
                                        </a>
                                    </Link>

                                    <Link href="/">
                                        <a className="navbar-brand navbar-brand2">
                                            
                                        </a>
                                    </Link>
                                
                                </div>

                                {/* <!-- Burger menu --> */}
                                <div className="menu-bar d-lg-none" role="button" tabIndex={0} onKeyPress={() => {}} onClick={handleMobileMenu}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>

                            </Col>

                            <div className="op-mobile-menu col-lg-10 p-0 d-lg-flex align-items-center justify-content-end" role="button" tabIndex={0} onKeyPress={() => {}} onClick={handleMobileMenu}>
                            
                                {/* <!-- Mobile menu --> */}
                                <div className="m-menu-header d-flex justify-content-between align-items-center d-lg-none">
                                    
                                    <a href="#" className="logo">
                                        <img src="images/logoImg.png" srcSet={`/images/logoImg@2x.png 2x`} alt="Miért mozgásműhely" height="20px" />
                                    </a>
                                    
                                    {/* <!-- Close button --> */}
                                    <span className="close-button" role="button" tabIndex={0} onKeyPress={() => {}} onClick={handleMobileMenu}></span>
                                    
                                </div>
                                <ul className="nav-menu d-lg-flex flex-wrap list-unstyled justify-content-center">
                                    
                                    <li className="nav-item">
                                        <Link href="/#home">
                                            <a className={props.nav !== undefined && props.nav==="home" ? 'nav-link js-scroll-trigger active' : 'nav-link js-scroll-trigger'}>
                                                <span>Főoldal</span>
                                            </a>
                                        </Link>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <Link href="/#szolgaltatasok">
                                            <a className="nav-link js-scroll-trigger">
                                                <span>Szolgáltatások</span>
                                            </a>
                                        </Link>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <Link href="/#arak">
                                            <a className="nav-link js-scroll-trigger">
                                                <span>Áraink</span>
                                            </a>
                                        </Link>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <Link href="/#kapcsolat">
                                            <a className="nav-link js-scroll-trigger">
                                                <span>Kapcsolat</span>
                                            </a>
                                        </Link>
                                    </li>
                                    <Link href="https://miertmm.hu/">
                                    <li className="nav-item">       
                                            <a className="nav-link js-scroll-trigger">
                                                <span>Tagoknak</span>
                                            </a>
                                    </li>
                                    </Link>
                                </ul>
                                
                            </div>

                        </Row>
                    </Container>
                </div>
            </header>
        </>
    );
}

export default Header;