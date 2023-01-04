import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';

const Support = (props) => {
    return (
        <section id="support" className={props.className}>
			
			{/* <!-- Container --> */}
			<Container>
				
				{/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<Col className="col-12 col-md-10 col-lg-6">
						
						<div className="section-title text-center">
							<h3>Gyakran ismételt kérdések</h3>
							<p>Összegyűjtöttük nektek a vendégeink által leggyakrabban feltett kérdéseket, hogy ezzel is segítsük döntésetek.</p>
						</div>
						
					</Col>
				</Row>
				
				<Row>					
					<Col className="col-12 col-lg-10 offset-lg-1">
						
						{/* <!-- FAQ accordion --> */}
						<Accordion defaultActiveKey="0" flush>
							
							{/* <!-- Question 1 --> */}
							<Accordion.Item eventKey="0">

								<Accordion.Header as="h5">
									Hogyan zajlik az állapotfelmérés?			        	
								</Accordion.Header>

								<Accordion.Body>
									<p>
									Az állapotfelmérés egy hosszas anamnézis felvétellel és ismerkedéssel kezdődik, majd testösszetétel méréssel folytatódik és egy komplex mozgásminta szűréssel (B-SWOT) záródik.
									</p>
								</Accordion.Body>
								
							</Accordion.Item>
								
							{/* <!-- Question 2 --> */}
							<Accordion.Item eventKey="1">

								<Accordion.Header as="h5">
									Hol jelentkezhetem?			        	
								</Accordion.Header>

								<Accordion.Body>
									<p>
										Írj nekünk bátran, vagy keress a +36 30 6900168 -as telefonszámon.
									</p>
								</Accordion.Body>
								
							</Accordion.Item>

							{/* <!-- Question 3 --> */}
							<Accordion.Item eventKey="2">

								<Accordion.Header as="h5">
									Hol találom a termet?
								</Accordion.Header>

								<Accordion.Body>
									<p>
										Termünket Pécsett, a belváros szívében a Barbakán tér 1/A szám alatt találod.
									</p>
								</Accordion.Body>
								
							</Accordion.Item>
							
							{/* <!-- Question 4 --> */}
							<Accordion.Item eventKey="3">

								<Accordion.Header as="h5">
									Mit jelent az, hogy privát személyi edzés?				        	
								</Accordion.Header>

								<Accordion.Body>
									<p>
									Nálam a vendég kizárólagos figyelmet élvez privát belvárosi termemben. Ha hozzám fordulsz minden lehetséges szempontból felmérem mozgásod és a továbbiakban a felmérésnek megfelelően tanulunk és gyakorlunk.
									Jöhetsz akár egyedül, akár pároddal is.
									</p>
								</Accordion.Body>
								
							</Accordion.Item>
							
						</Accordion>
						
					</Col>					
				</Row>
				
				<div className="empty-30"></div>
				
				<Row>					
					<Col className="col-12">
						<p className="text-center mb-0">További kérdésed lenne? <a href="#kapcsolat"><strong>Fordulj hozzánk bizalommal</strong></a></p>
					</Col>
				</Row>
				
			</Container>
			
		</section>
    );
}

export default Support;