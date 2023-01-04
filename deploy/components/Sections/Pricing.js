import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Pricing = (props) => {
    return (
        <section id="arak" className={props.className}>
			
			{/* <!-- Container --> */}
			<Container>
				
				{/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<Col className="col-12 col-md-10 col-lg-6">
						
						<div className="section-title text-center">
							<h3>Áraink</h3>
							<p></p>
                        </div>
						
					</Col>
				</Row>

				<Row className="row align-items-center pricing-plans">
					
					{/* <!-- Plan 1 --> */}
					<Col className="col-12 col-lg-3 res-margin">
						
                        <div className="price-table">
                            
                        <div className="icon"></div>
                            <h3 className="plan-type">Komplex állapotfelmérés</h3>
                            <h2 className="plan-price">10 000 Ft</h2>
                            
                            <ul className="list-unstyled plan-list">
                            </ul>
                           
                        </div>
                        
					</Col>
					{/* <!-- Plan 2 --> */}
					
					<Col className="col-12 col-lg-3">
						
                        <div className="price-table">
                        
                        <div className="icon"></div>
                            <h3 className="plan-type">1 alkalom személyi edzés</h3>
                            <h2 className="plan-price">6000 Ft</h2>
                            
                            <ul className="list-unstyled plan-list">
                            </ul>
                
                        </div>                        
                        
					</Col>
                    {/* <!-- Plan 3 --> */}
					<Col className="col-12 col-lg-3">
						
                        <div className="price-table">
                        
                        <div className="icon"></div>
                            <h3 className="plan-type">5 alkalom személyi edzés</h3>
                            <h2 className="plan-price">26 000 Ft</h2>
                            
                            <ul className="list-unstyled plan-list">
                            </ul>
                        
                            
                        
                        </div>                        
                        
					</Col>
                    	
					{/* <!-- Plan 4 --> */}
					<Col className="col-12 col-lg-3 res-margin">
						
                        <div className="price-table plan-popular mb-4 mb-sm-5 mb-lg-0">
                    
                            <div className="icon"></div>
                            <h3 className="plan-type">10 alkalom személyi edzés</h3>
                            <h2 className="plan-price">48 000 Ft</h2>
                            
                            <ul className="list-unstyled plan-list">
                            </ul>
                            
                         
                            
                            <div className="card-ribbon">
                                <span>Legkedvezőbb</span>
                            </div>
                    
                        </div>                       
                        
					</Col>	
				</Row>
				
			</Container>
			
		</section>
    );
}

export default Pricing;