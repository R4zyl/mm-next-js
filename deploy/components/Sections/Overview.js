import React, { useRef, useState, useEffect } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { BsFillPenFill } from "react-icons/bs";
import { CgGym } from "react-icons/cg";
import { GiHealthNormal } from "react-icons/gi";
import Link from 'next/link';

const Overview = (props) => {

	const [modalText, setModalText] = useState('');
	const [modalHeading, setModalHeading] = useState('');
	const overviewBtnRef = useRef();
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);


	const handleShowSzemelyi = () => {
		setModalText(personalString);
		setModalHeading('Személyi edzés');
		setShow(true);
	} 

	const handleShowAllapot = () => {
		setModalText(allapotString);
		setModalHeading('Állapotfelmérés');
		setShow(true);
	}

	const handleShowMozgas = () => {
		setModalText(mozgasString);
		setModalHeading('Egyéni mozgásterápia');
		setShow(true);
	}
	const allapotString = () =>{
		return(
			<div>
			<h4>Mi történik az első alkalommal?</h4>
			<p>A munkát megelőzően egy komplex állapotfelmérésen vehetsz részt, amely segít felállítani a hosszú és rövidtávú célokat, hogy a közös munka sikeres lehessen.
			Az állapotfelmérés egy hosszas anamnézis felvétellel és ismerkedéssel kezdődik, majd testösszetétel méréssel folytatódik és egy komplex mozgásminta szűréssel (B-SWOT) záródik. Ezt követően újra átbeszéljük a látottak fényében, a közös munka céljait, konkrét pontjait, fejlesztendő területeit.</p>
			<p>Mi az a B-SWOT Analízis, vagyis Body-SWOT-analízis, amellyel dolgozom?</p>
			<p>A B-SWOT vagyis Body-SWOT-analízis egy szűrő program a közös munka megkezdése előtt. Megalkotója egy pályaelhagyó közgazdász, aki jelenleg gyógytornászként-fizioterapeutaként-edzőként tevékenykedik. (Almásy Csilla az Almásy Mozgásakadémia vezetője)
			A B-SWOT-analízis az emberi test, egész pontosan a mozgásrendszer vizsgálódását jelenti. Vizsgálja a nagyobb terheléssel járó sport-és egyéb tevékenységek, vagy akár a hétköznapi, vagy munkavégzéssel járó mozgások lehetséges kimenetelét. A felmérés célja, hogy kiszűrjem azokat a gyenge pontokat, megelőzhető veszélyeket, melyek a sérülés kockázatát hordozzák magukban, egy edzésprogram megkezdésekor.
			A teszt segítségével sokrétűen figyelhető meg az emberi test. A feladatok során figyelem az ízületek mobilitását, az ízületek, illetve egyes testrészek stabilitását, az izmok nyújthatóságát, a mozgások összerendezettségét, a mozgások szimmetriáját és a mozgásminta minőségét.
			Majd ezen megfigyelések alapján kiszűröm a mozgásrendszerben rejlő deficiteket, úgy mint a csökkent mobilitás, csökkent stabilitás, csökkent izomerő, csökkent flexibilitás, csökkent egyensúlyérzék, a deficitek miatti kompenzációkat, az asszimetriákat és persze a nem megfelelő mozgásmintákat, hogy ennek tükrében megkezdhessük a közös munkát a lehető legbiztonságosabban, a fenntartható egészségsport jegyében.</p>
			<h4>Légy egészségesebb, tudatosabb, fittebb!</h4>
			</div>
			
		)
	} 

	const personalString = () =>{
		return(
			<div>
			<h4>Hogyan zajlik a privát személyi edzés?</h4>
			<p>Nálam nem csak egy edzés vár. Ha hozzám fordulsz minden lehetséges szempontból felmérem mozgásod és a továbbiakban a felmérésnek megfelelően tanulunk és gyakorlunk.</p>
			<p>A folyamat során mindvégig maximális figyelemmel és alapossággal követem a közös munkát, hogy minél közelebb kerüljünk a kitűzött célodhoz.</p>
			<p>Átsegítelek az elakadásokon, a motiválatlan periódusaidon és közben megtanítalak a mozgásra az alapoktól felépítve.</p>
			<p>Véleményem szerint a jó szakember befektetés a jövődbe és egy minőségi élethez. A fő célom, hogy miután a korábban felmért problémáidat megoldottuk, utána megtanítsalak az önálló edzésre is akár.</p>
			<p>Amennyiben célod folytatni a megkezdett utad, akár önállóan képes leszel az általam átadott tudástár alapján, de folytathatjuk együttműködésünket is a neked legmegfelelőbb konstrukcióban. Képes lehetsz fájdalom nélkül, szabadon, jól mozogni, hogy erősebb és kicsattanóbb formába kerülj, mint valaha voltál! Ebben biztosan teljes mértékben segítséget tudok nyújtani egyéni edzéseim során.</p>
			<h4>Legyen életed része a mozgás!</h4>
			</div>
			
		)
	}
	const mozgasString = () =>{
		return(
			<div>
			<p>A mozgásterápia segíthet megelőzni, vagy megoldani mozgásszervi problémáid. A segítségemmel megtanulhatsz az alapoktól jól és fájdalom nélkül mozogni, hogy erősebb, ellenállóbb légy mint valaha voltál.</p>
			<p>Feltérképezzük az eddigi hiányosságokat, elsajátíthatod a helyes mozgásmintákat, fokozatosan növeljük a teherbírásod a fenntartható egészségsport jegyében.</p>
			<p>Triplex® trénerként és terapeutaként különös tekintettel várom a derékpanaszokkal küzdőket, fitmummy posztnatális trénerként pedig az édesanyákat szülés utáni regenerációs periódusukban, hogy biztonságosan térhessenek vissza a hétköznapokba, vagy bármilyen sporttevékenységhez.</p>
			<p></p>
			<p></p>
			<h4>Egy egészséges, fájdalommentes életért!</h4>
			</div>
			
		)
	}
	
	return (
		<section id="szolgaltatasok" className={props.className}>

			{/* <!-- Container --> */}
			<Container>

				{/* <!-- Track time --> */}
				<Row>

					{/* <!-- Content --> */}
					<Col className="col-12 col-lg-6 offset-lg-1 order-lg-last res-margin">

						{/* <!-- Section title --> */}
						<div className="section-title text-center text-lg-start">
							<h3>Szolgáltatások</h3>
							<p> </p>
						</div>

						{/* <!-- Items --> */}
						<div className="overview-item">

							{/* <!-- Item 1 --> */}
							<div className="overview-box d-flex flex-wrap"  onClick={handleShowAllapot}>

								{/* <!-- Icon --> */}
								<BsFillPenFill size={30}/>

								{/* <!-- Content --> */}
								<div className="content">
									<h6 className="font-weight-bold mb-2 mt-0">Állapotfelmérés</h6>
									<p>Légy egészségesebb, tudatosabb, fittebb!</p>
								</div>

							</div>

							{/* <!-- Item 2 --> */}
							<div className="overview-box d-flex flex-wrap"  onClick={handleShowSzemelyi}>

								{/* <!-- Icon --> */}
								<CgGym size={30}/>

								{/* <!-- Content --> */}
								<div className="content">
									<h6 className="font-weight-bold mb-2 mt-0">Személyi edzés</h6>
									<p>Legyen életed része a mozgás!</p>
								</div>

							</div>

							{/* <!-- Item 3 --> */}
							<div className="overview-box d-flex flex-wrap"  onClick={handleShowMozgas}>

								{/* <!-- Icon --> */}
								<GiHealthNormal size={30}/>

								{/* <!-- Content --> */}
								<div className="content">
									<h6 className="font-weight-bold mb-2 mt-0">Egyéni mozgásterápia</h6>
									<p>A mozgásterápia segíthet megelőzni, vagy megoldani mozgásszervi problémáid.</p>
								</div>

							</div>

						</div>

					</Col>

					{/* <!-- Image --> */}
					<Col className="col-12 col-lg-5 order-lg-first text-sm-center">
						<img src="/images/overview/track-time1.JPG" alt="Frei Judit személyi edzés" />
					</Col>

					<Modal
					{...props}
					size="xl"
					aria-labelledby="contained-modal-title-vcenter"
					centered
					show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>{modalHeading}</Modal.Title>
						</Modal.Header>
						<Modal.Body>{modalText}</Modal.Body>
						<Modal.Footer>
							<Button variant="secondary" onClick={handleClose}>
								Bezárás
							</Button>
						</Modal.Footer>
					</Modal>
				</Row>

				<div className="empty-100"></div>

				{/* <!-- Daily schedule --> */}
				<Row>

					{/* <!-- Content --> */}
					<Col className="col-12 col-lg-6 res-margin">

						{/* <!-- Section title --> */}
						<div className="section-title text-center text-lg-start">
							<h3>Szeretettel üdvözöllek az oldalon!</h3>
							<p>Frei Judit vagyok személyi edző, gyógytornász, funkcionális táplálkozási tanácsadó és a Miért Mozgásműhely alapítója.</p>

						</div>

						{/* <!-- List --> */}
						<ul className="overview-list">

							<li>
								<p> Immáron lassan 20 éve aktív sportolóként és 9 év szakmai tapasztalatával segítem a hozzám fordulókat.</p>
							</li>
							<li>

								<h5> Főbb képzettségeim: </h5>
							</li>
							<li>
								<p><i className="fa-li fas fa-check"></i> Pécsi Tudományegyetem ETK gyógytornász-fizioterapeuta BSC</p>
							</li>

							<li>
								<p><i className="fa-li fas fa-check"></i> OKJ-s Csoportos fitness instruktor (Fitness Akadémia)</p>
							</li>

							<li>
								<p><i className="fa-li fas fa-check"></i> OKJ-s Fitness testépítő sportoktató(Weider Professional Fitness Trainer)</p>
							</li>

							<li>
								<p><i className="fa-li fas fa-check"></i> OKJ-s Funkcionális táplálkozási szakreferens(Táplálkozás Beállítás)</p>
							</li>
						</ul>

						{/* <!-- Button --> */}
						<p className="text-center text-lg-start">
						<Link href="/freijudit" label="Frei Judit privát személy edzés, táplálkozási tanácsadás, egyéni mozgásterápia"><a className="btn" ref={overviewBtnRef}>Rólam bővebben</a></Link>
						</p>

					</Col>

					{/* <!-- Image --> */}
					<Col className="col-12 col-lg-5 offset-lg-1 text-sm-center">
						<img src="/images/overview/rolam.png" alt="Frei Judit személyi edzés" height="550px" />
					</Col>

				</Row>
			</Container>

		</section>
	);
}

export default Overview;