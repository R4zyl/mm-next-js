import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { SRLWrapper } from 'simple-react-lightbox';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';


SwiperCore.use([Autoplay, Pagination]);

const Screenshots = (props) => {
    return (
        <section id="screenshots" className={props.className}>
            
            {/* <!-- Container --> */}
            <Container>

                {/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<Col className="col-12 col-md-10 col-lg-6">
						
						<div className="section-title text-center">
							<h3>Képek a teremről</h3>
							<p>Néhány ízelítő a belvárosi termünkből</p>
						</div>
						
					</Col>
				</Row>         

                <Row>

                    <Col className="col-12">

                        {/* <!-- Carousel --> */}
                        <SRLWrapper >
                            <Swiper
                                className="screenshot-slider zoom-screenshot"
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: true
                                }}
                                pagination={{ clickable: true }}
                                breakpoints={{
                                    320: {
                                        spaceBetween: 15,
                                        slidesPerView: 1
                                    },
                                    768: {
                                        spaceBetween: 20,
                                        slidesPerView: 2
                                    },
                                    1024: {
                                        spaceBetween: 30,
                                        slidesPerView: 4
                                    }
                                }}
                            >

                                <SwiperSlide className="item">
                                    <a href="/images/screenshots/terem-kép1.jfif">
                                        <img src="/images/screenshots/terem-kép1.jfif" alt="Pécs belvárosi privát edzőtermünk" />
                                    </a>
                                </SwiperSlide>

                                <SwiperSlide className="item">
                                    <a href="/images/screenshots/terem-kép2.jfif">
                                        <img src="/images/screenshots/terem-kép2.jfif" alt="Pécs belvárosi privát edzőtermünk" />
                                    </a>
                                </SwiperSlide>

                                <SwiperSlide className="item">
                                    <a href="/images/screenshots/terem-kép3.jfif">
                                        <img src="/images/screenshots/terem-kép3.jfif" alt="Pécs belvárosi privát edzőtermünk" />
                                    </a>
                                </SwiperSlide>

                                <SwiperSlide className="item">
                                    <a href="/images/screenshots/terem-kép4.jfif">
                                        <img src="/images/screenshots/terem-kép4.jfif" alt="Pécs belvárosi privát edzőtermünk" />
                                    </a>
                                </SwiperSlide>

                                <SwiperSlide className="item">
                                    <a href="/images/screenshots/terem-kép5.jfif">
                                        <img src="/images/screenshots/terem-kép5.jfif" alt="Pécs belvárosi privát edzőtermünk" />
                                    </a>
                                </SwiperSlide>

                                <SwiperSlide className="item">
                                    <a href="/images/screenshots/terem-kép6.jfif">
                                        <img src="/images/screenshots/terem-kép6.jfif" alt="Pécs belvárosi privát edzőtermünk" />
                                    </a>
                                </SwiperSlide>

                                <SwiperSlide className="item">
                                    <a href="/images/screenshots/terem-kép7.jfif">
                                        <img src="/images/screenshots/terem-kép7.jfif" alt="Pécs belvárosi privát edzőtermünk" />
                                    </a>
                                </SwiperSlide>

                                <SwiperSlide className="item">
                                    <a href="/images/screenshots/terem-kép8.jfif">
                                        <img src="/images/screenshots/terem-kép8.jfif" alt="Pécs belvárosi privát edzőtermünk" />
                                    </a>
                                </SwiperSlide>

                            </Swiper>
                        </SRLWrapper>

                    </Col>

                </Row>
                    
            </Container>

        </section>
    );
}

export default Screenshots;