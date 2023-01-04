import React, { useRef, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';

const testimonialSlider = {
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	arrows: false,
  	fade: true,
  	rtl: false,
};

const testimonialNav = {
  	slidesToShow: 6,
  	slidesToScroll: 1,
  	arrows: false,
  	centerMode: true,
  	focusOnSelect: true,
  	variableWidth: false,
  	rtl: false,
  	responsive: [
		{
      		breakpoint: 991,
      		settings: {
        		slidesToShow: 3,
        		arrows: false,
      		},
    	},
    	{
      		breakpoint: 480,
      			settings: {
        		slidesToShow: 1,
        		arrows: false,
      		},
    	}
	]
};

const Testimonial = (props) => {
    const testimonialNavRef = useRef(null);
    const testimonialSliderRef = useRef(null);

    const [state, setState] = useState({
        nav1: testimonialNavRef.current,
        nav2: testimonialSliderRef.current,
    });

    const { nav1, nav2 } = state;

    useEffect(() => {
        let unmounted = false;

        if (!unmounted) {
            setState({
                nav1: testimonialNavRef.current,
                nav2: testimonialSliderRef.current,
            });
        }

        return () => (unmounted = true);
        }, [testimonialSliderRef, testimonialNavRef]
    );

    return (
        <section id="testimonials" className={props.className}>
			
			{/* <!-- Container --> */}
			<Container>
				
				{/* <!-- Section title --> */}
				<Row className="row justify-content-center">
					<Col className="col-12 col-md-10 col-lg-6">
						
						<div className="section-title text-center">
							<h3>Vélemények rólunk</h3>
							<p></p>
						</div>
						
					</Col>
				</Row>
				
				<Row className="row">
					<Col className="col-12 testimonial-carousel">
						
						{/* <!-- Text --> */}
						<div className="block-text row">

                            <Slider
                                ref={testimonialSliderRef}
                                className="carousel-text testimonial-slider col-12 col-lg-8 offset-lg-2"
                                asNavFor={nav1}
                                {...testimonialSlider}
                            >	

								<div>
									<div className="single-box">
										<p><i className="fas fa-quote-left"></i> Judittal nagyon sok éve dolgozunk együtt azon, hogy a triatlonozáshoz megfelelő izomzatot építsünk fel. Sok mindenen túl vagyunk már együtt, mindig figyelembe veszi az aktuális felkészülési időszakot és leterheltségemet. Csuda jókat szoktunk szakmázni és kutyázni, imádom az elhivatottságát. <i className="fas fa-quote-right"></i></p>
									</div>
								</div>
								
                                <div>
									<div className="single-box">
										<p><i className="fas fa-quote-left"></i> Egy éve kerültem Judithoz egy súlyos,leszakadt porckorongsérves kínlódás után. A fájdalom állandó jellegű volt,de már elegem volt a sok gyógyszerből és a pihenjen és feküdjön kijelentésekből. Szakmailag felkészült gyógytornász/személyi edzőt kerestem és nini...Juditra találtam.😍 Fokozatosan építette fel az edzéseket,szinte a minimál mozgástartományról indultunk.<Link href="https://www.facebook.com/miertmozgasmuhely/reviews">Bővebben..</Link> <i className="fas fa-quote-right"></i></p>
									</div>
								</div>
								
								<div>
									<div className="single-box">
										<p><i className="fas fa-quote-left"></i>Életem egyik legjobb döntése volt, hogy elmentem Judithoz és belevágtam a vele való munkába. Szakemberként rendkívüli és szerteágazó szaktudással rendelkezik és emellett emberként az egyik legpozitívabb, legvidámabb, leglendületesebb személy, akivel valaha találkoztam. Juditnak köszönhetően az alapprobléma, ami miatt felkerestem elmúlt és fizikailag sokkal frissebbnek és energikusabbnak érzem magam, ami jelentősen megkönnyíti a stresszes, monoton mindennapokat. <Link href="https://www.facebook.com/miertmozgasmuhely/reviews">Bővebben..</Link><i className="fas fa-quote-right"></i></p>
									</div>
								</div>
								
								<div>
									<div className="single-box">
										<p><i className="fas fa-quote-left"></i> A mozgás mindig meghatározó része volt az életemnek,de nem gondoltam volna hogy egy sport ennyire megváltoztathat. Tavaly szeptemberben mentem el az első edzésre  Judithoz. Elérte, hogy suli után mindig izgatottan sétáljak a teremhez, tudva hogy megint újat tanulhatok, és pozitív kisugárzásának köszönhetően feltöltődve folytassam  a mindennapokat. Bármilyen kérdésem van ő mindig segítőkészen, érthetően ad választ. <Link href="https://www.facebook.com/miertmozgasmuhely/reviews">Bővebben..</Link> <i className="fas fa-quote-right"></i></p>
									</div>
								</div>
								
								<div>
									<div className="single-box">
										<p><i className="fas fa-quote-left"></i> Judit egy csoda! Mindig mindenki maximális figyelmet kap tőle, motivál, tanácsot ad, odafigyel. A tudatos edzések összeállítása mellett csodásan gondolkozik a táplálkozásról. Meggyőződésem, hogy mindenkinek Tőle kéne tanácsot kérnie. 😃 Folyamatosan képzi magát, sugárzik belőle, hogy imádja, amit csinál. Én itt is mindent köszönök! <i className="fas fa-quote-right"></i></p>
									</div>
								</div>	
								
								<div>
									<div className="single-box">
										<p><i className="fas fa-quote-left"></i> 4 évvel ezelőtt azért kerültem Judithoz, mert én is hozzá hasonló idomokat szerettem volna a nyárra 😅 Ennél sokkal többet kaptam, túlzás nélkül az életemet változtatta meg a tőle kapott tudatosság az étkezés, életmód, mozgás terén. Nagyon hálás vagyok neki a sok gyakorlati tudásért, amit hétről hétre átad.  <i className="fas fa-quote-right"></i></p>
									</div>
								</div>
								
								<div>
									<div className="single-box">
										<p><i className="fas fa-quote-left"></i> Juditnak köszönhetem azt, hogy megszerettem az edzést. Minden egyes alkalmat lelkesen várok. Ezenfelül pedig rengeteg nagyon kedves embert ismerhettem meg a MIÉRT Mozgásműhelyben és egy csupaszív és nagyon jól nevelt kutyust, Fly-t. Még csak 4 hónapja dolgozunk együtt, de már most nagyon hálás vagyok Juditnak az elért eredményekért! ♥️ <i className="fas fa-quote-right"></i></p>
									</div>
								</div>
                                
								<div>
									<div className="single-box">
										<p><i className="fas fa-quote-left"></i> Sziasztok!😊 Eszter vagyok és szeretnék köszönetet mondani Juditnak, akinek a segíségével egy 10 éve tartó betegségemből sikerült szinte teljesen kigyógyulnom.🥳
Fiatalkori sokízületi gyulladással diagnosztizáltak 12 évesen, azóta rengeteg féle gyógyszer kúrát írtak fel (szteroidos gyószerek, biológiai terápiák, ebetrexát tabletták) bár néha voltak javulások, a gyulladások szinte állandóak voltak, ezek mellett a gyógyszerek mellékhatásától is sokszor rosszul lettem <Link href="https://www.facebook.com/miertmozgasmuhely/reviews">Bővebben..</Link><i className="fas fa-quote-right"></i></p>
									</div>
								</div>
								
								<div>
									<div className="single-box">
										<p><i className="fas fa-quote-left"></i> ... hogy miért a MIÉRT ?
																					ezer okot felhozhatok. 
																						és nehéz kiemelni egy-egy okot... de megpróbálom. 
																					Pl mert ha úgy érzed, h az egykoron fitt, kisportolt tested már csak egy partra vetett bálnatest, vagy ha úgy érzed, h a fittséged már nem olyan, mint  amit idegenek előtt mutogatnál <Link href="https://www.facebook.com/miertmozgasmuhely/reviews">Bővebben..</Link> <i className="fas fa-quote-right"></i></p>
									</div>
								</div>
								
                            </Slider>

						</div>

						{/* <!-- Media --> */}
						<div className="block-media row">

                            <Slider
                                ref={testimonialNavRef}
                                className="carousel-images testimonial-nav col-12 col-lg-8 offset-lg-2"
                                asNavFor={nav2}
                                {...testimonialNav}
                            >
							
                            	<div>
									<img src="/images/testimonials/client0.png" alt="" className="img-fluid rounded-circle" />
									<div className="client-info">
										<h3>Horváth Katalin</h3>
										<span>Facebook</span>
									</div>
								</div>
								
								<div>
									<img src="/images/testimonials/client0.png" alt="" className="img-fluid rounded-circle" />
									<div className="client-info">
										<h3>Pap Katalin</h3>
										<span>Facebook</span>
									</div>
								</div>
								
								<div>
									<img src="/images/testimonials/client0.png" alt="" className="img-fluid rounded-circle" />
									<div className="client-info">
									<h3>Ferenczi Krisztina</h3>
										<span>Facebook</span>
									</div>
								</div>
								
								<div>
									<img src="/images/testimonials/client0.png" alt="" className="img-fluid rounded-circle" />
									<div className="client-info">
									<h3>Nagy Enikő</h3>
										<span>Facebook</span>
									</div>
								</div>
								
								<div>
									<img src="/images/testimonials/client0.png" alt="" className="img-fluid rounded-circle" />
									<div className="client-info">
										<h3>Kovács-Kozsahuba Kata</h3>
										<span>Facebook</span>
									</div>
								</div>	
								
								<div>
									<img src="/images/testimonials/client0.png" alt="" className="img-fluid rounded-circle" />
									<div className="client-info">
										<h3>Polai Barbara</h3>
										<span>Facebook</span>
									</div>
								</div>
								
								<div>
									<img src="/images/testimonials/client0.png" alt="" className="img-fluid rounded-circle" />
									<div className="client-info">
										<h3>Patrícia Szántóri</h3>
										<span>Facebook</span>
									</div>
								</div>

								<div>
									<img src="/images/testimonials/client0.png" alt="" className="img-fluid rounded-circle" />
									<div className="client-info">
										<h3>Aradi Eszter</h3>
										<span>Facebook</span>
									</div>
								</div>
								
								<div>
									<img src="/images/testimonials/client0.png" alt="3" className="img-fluid rounded-circle" />
									<div className="client-info">
										<h3>Mihály Kiss Gábor</h3>
										<span>Facebook</span>
									</div>
								</div>
								
							</Slider>

						</div>

					</Col>
				</Row>
				
			</Container>
		
		</section>
    );
};

export default Testimonial;
