import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Blog = (props) => {
    return (
        <section id="blog" className={props.className}>
			
			{/* <!-- Container --> */}
			<Container>
				
				{/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<Col className="col-12 col-md-10 col-lg-6">
						
						<div className="section-title text-center">
							<h3>Legutóbbi blog bejegyzések</h3>
							<p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere ipsum dolor sit amet, consectetur elit.</p>
                        </div>
						
					</Col>
				</Row>

				<Row className="blog-home">
					
					{/* <!-- Post 1 --> */}
					<Col className="col-12 col-lg-4 res-margin">
                        
						<div className="blog-col">
                            
							<p>
								<a href="/blog-post">
									<img src="/images/blog/post-1.jpg" className="blog-img" alt="" />
								</a>
								<span className="blog-category">Edzés</span>
							</p>
                            
							<div className="blog-wrapper">								
								<div className="blog-text">
                                    
									<p className="blog-about">
                                        <span>Frei Judit</span>
                                        <span>2022. Július 14.</span>
                                    </p>
                                    
									<h4>
                                        <a href="/blog-post">Az egészséges életmód 5 fő alappillére</a>
                                    </h4>
                                    
                                    <p>
										Quisque dui at erat auctor pulvinar nisl felis, gravida et aliquam vitae, aliquet quis nibh.
										<a href="/blog-post" className="btn-read-more">Olvasd el</a>
									</p>
                                    
								</div>
							</div>
                            
						</div>
                        
					</Col>
					
					{/* <!-- Post 2 --> */}
					<Col className="col-12 col-lg-4 res-margin">
                        
						<div className="blog-col">
                            
							<p>
								<a href="/blog-post">
									<img src="/images/blog/post-2.jpg" className="blog-img" alt="" />
								</a>
								<span className="blog-category">Életmód</span>
							</p>
                            
							<div className="blog-wrapper">
								<div className="blog-text">
                                    
									<p className="blog-about">
										<span>Frei Judit</span>
                                        <span>2022. Január 5.</span>
                                    </p>
                                    
									<h4>
                                        <a href="/blog-post">Példa életmód blogbejegyzés cím</a>
                                    </h4>
                                    
                                    <p>
										Quisque dui at erat auctor pulvinar nisl felis, gravida et aliquam vitae, aliquet quis nibh.
										<a href="/blog-post" className="btn-read-more">Olvasd el</a>
									</p>
                                    
								</div>
							</div>
                            
						</div>
                        
					</Col>	
					
					{/* <!-- Post 3 --> */}
					<Col className="col-12 col-lg-4">
                        
						<div className="blog-col">
                            
							<p>
								<a href="/blog-post">
									<img src="/images/blog/post-3.jpg" className="blog-img" alt="" />
								</a>
								<span className="blog-category">Mozgásterápia</span>
							</p>
                            
							<div className="blog-wrapper">
								<div className="blog-text">
                                    
									<p className="blog-about">
										<span>Frei Judit</span>
                                        <span>2022. Augusztus 14.</span>
                                    </p>
                                    
									<h4>
                                        <a href="/blog-post">Valami példa cím</a>
                                    </h4>
                                    
                                    <p>
										Quisque dui at erat auctor pulvinar nisl felis, gravida et aliquam vitae, aliquet quis nibh.
										<a href="/blog-post" className="btn-read-more">Olvasd el</a>
									</p>
                                    
								</div>
							</div>
                            
						</div>
                        
					</Col>
					
				</Row>
				
			</Container>
			
		</section>
    );
}

export default Blog;