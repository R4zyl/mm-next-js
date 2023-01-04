import React, { useRef, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";


const Features = (props) => {

	
	const root = useRef();
 	const q = gsap.utils.selector(root);
  
  useEffect(() => {
	gsap.registerPlugin(ScrollTrigger);
    gsap.from(q(".firstFeatureBox"), {
		opacity: 0,
		x: -400,
      scrollTrigger: {
        trigger: q(".featureH3"),
        start: "top center",
        end: "bottom 100px",
        scrub: false,
        markers: false,
        id: "scrub"
      }
    });
	gsap.from(q(".secondFeatureBox"), {
		opacity: 0,
		x: -400,
      scrollTrigger: {
        trigger: q(".featureH3"),
        start: "top 200px",
        end: "bottom 100px",
        scrub: false,
        markers: false,
        id: "scrub"
      }
    });
	gsap.from(q(".thirdFeatureBox"), {
		opacity: 0,
		x: -400,
      scrollTrigger: {
        trigger: q(".firstFeatureBox"),
        start: "center center",
        end: "bottom 100px",
        scrub: false,
        markers: false,
        id: "scrub"
      }
    });
	gsap.from(q(".fourthFeatureBox"), {
		opacity: 0,
		x: 400,
		delay: 0.5,
		scrollTrigger: {
			trigger: q(".firstFeatureBox"),
			start: "center center",
			end: "bottom 100px",
			scrub: false,
			markers: false,
			id: "scrub"
		  }
    });
	gsap.from(q(".fifthFeatureBox"), {
		opacity: 0,
		x: 400,
		delay: 1,
		scrollTrigger: {
			trigger: q(".firstFeatureBox"),
			start: "center center",
			end: "bottom 100px",
			scrub: false,
			markers: false,
			id: "scrub"
		  }
    });
    // Or you can attach a tween or timeline to a ScrollTrigger later

  }, []);

  

	return (
		<section ref={root} id="miert" className={props.className}>

			{/* <!-- Container --> */}
			<Container>

				{/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<Col className="col-12 col-md-10 col-lg-6">

						<div className="section-title text-center">
							<h3 className="featureH3">M.I.É.R.T.</h3>
							<p>Az egészséges életmód 5 fő alappillére:</p>
						</div>

					</Col>
				</Row>

				<Row className="d-flex align-items-center">

					{/* <!-- Left --> */}
					<Col className="col-12 col-md-6 col-lg-4">

						<ul className="features-item">

							{/* <!-- Feature box --> */}
							<li className="firstFeatureBox">
								<div className={"feature-box d-flex" + (props.boxLeft ? " box-left" : "")}>

									{/* <!-- Box icon --> */}
									<div className="box-icon">
										<div className="iconletterBorder"><div className="iconLetter">M</div></div>
									</div>

									{/* <!-- Box Text --> */}
									<div className="box-text align-self-center align-self-md-start">
										<h4>Mozgás</h4>
										<p>Folyamatos támogató, felügyelő jelenlétemmel, esetleges panaszaidat figyelembe véve megtanítalak helyesen, természetesen, fájdalommentesen mozogni.</p>
									</div>

								</div>
							</li>

							{/* <!-- Feature box --> */}
							<li className="secondFeatureBox">
								<div className={"feature-box d-flex" + (props.boxLeft ? " box-left" : "")}>

									{/* <!-- Box icon --> */}
									<div className="box-icon">
										<div className="iconletterBorder"><div className="iconLetter">I</div></div>
									</div>

									{/* <!-- Box Text --> */}
									<div className="box-text align-self-center align-self-md-start">
										<h4>Inspiráció</h4>
										<p>Miután már megérezted az első foglalkozások hatékonyságát, további új ismeretek átadásával és támogatással lendítelek tovább.</p>
									</div>

								</div>
							</li>

							{/* <!-- Feature box --> */}
							<li className="thirdFeatureBox">
								<div className={"feature-box d-flex" + (props.boxLeft ? " box-left" : "")}>

									{/* <!-- Box icon --> */}
									<div className="box-icon">
										<div className="iconletterBorder"><div className="iconLetter">É</div></div>
									</div>

									{/* <!-- Box Text --> */}
									<div className="box-text align-self-center align-self-md-start">
										<h4>Étkezés</h4>
										<p>Mivel az életmódváltás esetleges alappilléreit már elsajátítottad, újabb területet veszünk górcső alá. A következő lépcsőfok, hogy minél gyorsabban, eredményesebben érjük el egészségeddel kapcsolatos célkitűzéseid.</p>
									</div>

								</div>
							</li>

						</ul>
					</Col>

					{/* <!-- Center --> */}
					<Col className="col-12 col-lg-4 d-none d-lg-block">
						<div className="features-thumb text-center">
							<img src="/images/features/miertmozgas.png" alt="Frei Judit személyi privát személyi edző" />
						</div>
					</Col>

					{/* <!-- Right --> */}
					<Col className="col-12 col-md-6 col-lg-4">

						<ul className="features-item">

							{/* <!-- Feature box --> */}
							<li className="fourthFeatureBox">
								<div className="feature-box d-flex">

									{/* <!-- Box icon --> */}
									<div className="box-icon">
										<div className="iconletterBorder"><div className="iconLetter">R</div></div>
									</div>

									{/* <!-- Box Text --> */}
									<div className="box-text align-self-center align-self-md-start">
										<h4>Regeneráció</h4>
										<p>A megfelelő fejlődés kulcsa a minőségi és mennyiségi pihenés, megújulás. Ebben az időben tested edzésed hatására elvégzi a javítási folyamatokat, hogy a jövőben még magasabb szintekre juthass el.</p>
									</div>

								</div>
							</li>

							{/* <!-- Feature box --> */}
							<li className="fifthFeatureBox">
								<div className="feature-box d-flex">

									{/* <!-- Box icon --> */}
									<div className="box-icon">
										<div className="iconletterBorder"><div className="iconLetter">T</div></div>
									</div>

									{/* <!-- Box Text --> */}
									<div className="box-text align-self-center align-self-md-start">
										<h4>Tanulás</h4>
										<p>Az előző lépésekben megismert technikák folyamatos elsajátítása, tökéletesítése és ismétlése vezet el a sikerhez. Így válsz saját magad legegészségebb verziójává!</p>
									</div>

								</div>
							</li>

						</ul>
					</Col>

				</Row>

			</Container>

		</section>
	);
}

export default Features;