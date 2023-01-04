import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ErrorPage = (props) => {
    return (
        <section id="error-page" className="d-flex align-items-center min-vh-100">

        	<Container>
		
				{/* Message */}
				<Row>
					<Col className="col-12 text-center">
                        
						{/* Title */}
						<div className="icon largest colored">
                            <i className="fas fa-unlink"></i>
                        </div>
						
						<div className="empty-30"></div>
						
						<h2>Hoppá!</h2>
						
						{/* Primary text */}
						<p className="info">
							Az általad kért oldal nem létezik.
						</p>
						
						<p>
							<a href="/" className="btn btn-default btn-rounded">
                                <i className="fas fa-chevron-left"></i> Vissza a főoldalra
                            </a>
						</p>

                    </Col>
				</Row>
			
        	</Container>

    	</section>
    );
}

export default ErrorPage;