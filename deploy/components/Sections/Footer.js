import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

export default class Footer extends Component {

	componentDidMount() {
		if(typeof window !== 'undefined') {
			window.WOW = require('wowjs/dist/wow.js');	
		}
	
		new WOW.WOW().init();
	}

	render() {
		return (
			<footer>
				<div className="footer-widgets">
					<Container>
						
						<Row>
							<Col className="col-12 col-md-6 col-lg-3 res-margin">
								<div className="widget">
									<p className="footer-logo">
										<img src="/images/logo-white.png" alt="miertmm" height="60px" data-rjs="2" />
									</p>
									<p>
										Kövess minket közösségi felületeinken!
									</p>
									<div className="footer-social">
										<Link href="https://www.facebook.com/miertmozgasmuhely/">
										<a title="Facebook"><i className="fab fa-facebook-f fa-fw"></i></a>
										</Link>
										<Link href="https://www.instagram.com/miertmozgasmuhely/">
										<a title="Instagram"><i className="fab fa-instagram"></i></a>
										</Link>
									</div>
								</div>
							</Col>
							
							<Col className="col-3 col-md-6 col-lg-3 res-margin">
								<div className="widget">
									
									<h6></h6>
									
									<ul className="footer-menu">
										<Link href="https://miertmm.hu/privacy-policy/">
										<li><a href="#">Adatkezelési tájékoztató</a></li>
										</Link>
									</ul>
									
								</div>
							</Col>
							
						</Row>
						
					</Container>
				</div>		
			</footer>
		);
	}

}