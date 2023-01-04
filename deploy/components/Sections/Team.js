import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Team = () => {
    return (
        <section id="team">
			
			{/* <!-- Container --> */}
			<Container>
				
				{/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<Col className="">
						
						<div className="section-title text-center">
							<h3>Csapatunk</h3>
							<p>Elhivatott csapatunk mindenben rendelkezésetekre áll.</p>
						</div>
						
					</Col>
				</Row>
			
				<Row>
					
					{/* <!-- Member 1 --> */}
					<Col className="col-12 col-md-6 col-lg-3">
						<div className="team-member res-margin">
							<div className="team-image">
								<img src="/images/team/member-1.jpg" alt="" />
								<div className="team-social">
									<div className="team-social-inner">
										<a href="#"><i className="fab fa-twitter"></i></a>
										<a href="#"><i className="fab fa-facebook-f"></i></a>
										<a href="#"><i className="fab fa-linkedin-in"></i></a>
										<a href="#"><i className="fab fa-dribbble"></i></a>
									</div>
								</div>
							</div>
							<div className="team-details">
								<h5 className="title"><a href="/worker">Frei Judit</a></h5>
								<span className="position">Személyi edző</span>
							</div>
						</div>
					</Col>
					
					{/* <!-- Member 2 --> */}
					<Col className="col-12 col-md-6 col-lg-3">
						<div className="team-member res-margin">
							<div className="team-image">
								<img src="/images/team/member-1.jpg" alt="" />
								<div className="team-social">
									<div className="team-social-inner">
										<a href="#"><i className="fab fa-twitter"></i></a>
										<a href="#"><i className="fab fa-facebook-f"></i></a>
										<a href="#"><i className="fab fa-linkedin-in"></i></a>
										<a href="#"><i className="fab fa-dribbble"></i></a>
									</div>
								</div>
							</div>
							<div className="team-details">
							<h5 className="title"><a href="/worker">Frei Judit</a></h5>
								<span className="position">Személyi edző</span>
							</div>
						</div>
					</Col>	
					
					{/* <!-- Member 3 --> */}
					<Col className="col-12 col-md-6 col-lg-3">
						<div className="team-member res-margin">
							<div className="team-image">
								<img src="/images/team/member-1.jpg" alt="" />
								<div className="team-social">
									<div className="team-social-inner">
										<a href="#"><i className="fab fa-twitter"></i></a>
										<a href="#"><i className="fab fa-facebook-f"></i></a>
										<a href="#"><i className="fab fa-linkedin-in"></i></a>
										<a href="#"><i className="fab fa-dribbble"></i></a>
									</div>
								</div>
							</div>
							<div className="team-details">
								<h5 className="title"><a href="/worker">Frei Judit</a></h5>
								<span className="position">Személyi edző</span>
							</div>
						</div>
					</Col>
					
					{/* <!-- Member 4 --> */}
					<Col className="col-12 col-md-6 col-lg-3">
						<div className="team-member">
							<div className="team-image">
								<img src="/images/team/member-1.jpg" alt="" />
								<div className="team-social">
									<div className="team-social-inner">
										<a href="#"><i className="fab fa-twitter"></i></a>
										<a href="#"><i className="fab fa-facebook-f"></i></a>
										<a href="#"><i className="fab fa-linkedin-in"></i></a>
										<a href="#"><i className="fab fa-dribbble"></i></a>
									</div>
								</div>
							</div>
							<div className="team-details">
								<h5 className="title"><a href="/worker">Frei Judit</a></h5>
								<span className="position">Személyi edző</span>
							</div>
						</div>
					</Col>
					
				</Row>
				
			</Container>
			
		</section>
    );
}

export default Team;