import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsCheck2Circle } from "react-icons/bs";
import Link from 'next/link';

const WorkerInfo = (props) => {
    return (
        <section id="worker" className={props.className}>
			
			{/* <!-- Container --> */}
			<Container>
				
				<Row>
					
					{/* <!-- Image --> */}
					<Col className="col-12 col-lg-5 res-margin">
						<img className="juditTopImg" src="/images/team/judit-1.jpg" alt="Frei Judit Portré" height="90%" />
					</Col>
					
					{/* <!-- Content --> */}
					<Col className="col-12 col-lg-7">
						
						<div className="empty-30"></div>
						
						{/* <!-- Section title --> */}
						<div className="section-title text-center text-lg-start">
							<h3>Frei Judit</h3>
							<p>Személyi edző, gyógytornász, funkcionális táplálkozási tanácsadó</p>
						</div>
						
						<p>
						Immáron lassan 20 éve aktív sportolóként és 9 év szakmai tapasztalatával segítem a hozzám fordulókat. Kezdő edzőként hamar felismertem, hogy az emberek egyre több mozgásszervi problémával küszködnek és több tudásra volt szükségem, hogy teljeskörű segítséget nyújthassak számukra. Elvégeztem hát a Pécsi Tudományegyetem a gyógytornász szakirányát a komplex segítségnyújtás jegyében, ami megnyitotta számomra a további képzési lehetőségeket és egy biztos szakmai alapot adott.
									Ezek után jött a táplálkozás tudományok iránti érdeklődésem, mellyel célom volt a hozzám fordulóknak még teljesebb körben segítséget biztosítani. Munkám során fontosnak tartom, hogy a testmozgás az egészségünk egyik fontos alappillére, nem csak egy eszköz a fogyáshoz, izmosodáshoz, akár csak a kiegyensúlyozott táplálkozás.
									Fő érdeklődési területeim a derékpanaszok, a várandósság és a szülés utáni időszak támogatása, a kismamák segítése ezen a csodálatos, ám kihívásokkal teli úton, autoimmun betegségek táplálkozástudományi intervenciói és testmozgásos lehetőségei.
									Ezenkívül persze segítségedre lehetek a tartáshibák korrigálásában, testkompozíció javításában , edzésmunkád hatékonyságnövelésében, a helyes melegítési stratégiák megtanulásában, vagy a regenerációs programod elsajátításában, edzéstervezésben, a fenntartható preventív szemléletű mozgás beépítésében a mindennapokba.
						</p>
						
						<div className="author-social">
							<div className="social">
							<Link href="https://www.facebook.com/miertmozgasmuhely/"><a><i className="fab fa-facebook-f"></i></a></Link>
								<Link href="https://www.instagram.com/miertmozgasmuhely/"><a><i className="fab fa-instagram"></i></a></Link>						
							</div>
						</div>
						
					</Col>
					
				</Row>

		
		
				<Row>
					
					{/* <!-- About --> */}
					<Col className="col-12 col-lg-6 res-margin">
					<h4 className="kepzettsegTitle">Képzettségeim:</h4>
					<div className="kepzettsegOuterContainer">
						
						<div className="kepzettsegInnerContainer">
								<h5> Főbb képzettségeim: </h5>
								 <div className="listElement"><BsCheck2Circle size={25} /><p>Pécsi Tudományegyetem ETK gyógytornász-fizioterapeuta BSC</p></div>

								 <div className="listElement"><BsCheck2Circle size={25} /><p>OKJ-s Csoportos fitness instruktor (Fitness Akadémia)</p></div>
							
								 <div className="listElement"><BsCheck2Circle size={25} /><p>OKJ-s Fitness testépítő sportoktató(Weider Professional Fitness Trainer)</p></div>
							
								 <div className="listElement"><BsCheck2Circle size={25} /><p>OKJ-s Funkcionális táplálkozási szakreferens(Táplálkozás Beállítás)</p></div>
								 <img className="szekesPortre" src="/images/team/judit-2.jpg" alt="Frei Judit székes portré"  height="620px"/>
								</div>
								<div className="kepzettsegInnerContainer">
							<h5> Továbbképzéseim: </h5>
							
								<div className="listElement"><BsCheck2Circle size={25} /><p>TripleX® gerincterápia (Almásy Mozgásakadémia)</p></div>
							
								<div className="listElement"><BsCheck2Circle size={25} /><p>TripleX® tréner(Almásy Mozgásakadémia)</p></div>
							
								<div className="listElement"><BsCheck2Circle size={25} /><p>Fitmummy posztnatális tréning (Almásy Mozgásakadémia)</p></div>
							
								<div className="listElement"><BsCheck2Circle size={25} /><p>Gerinctudatos testedzés (Almásy Mozgásakadémia)</p></div>
							
								<div className="listElement"><BsCheck2Circle size={25} /><p>Core stabilizáció (Almásy Mozgásakadémia) (Almásy Mozgásakadémia)</p></div>
							
								<div className="listElement"><BsCheck2Circle size={25} /><p>B-Swot analízis-funkcionális mozgásminta szűrés-(Almásy Mozgásakadémia)</p></div>
							
								<div className="listElement"><BsCheck2Circle size={25} /><p>Stretch and Roll (GaraSport)</p></div>
							
								<div className="listElement"><BsCheck2Circle size={25} /><p>Fasciák és étkezés (OriolusMED)</p></div>
						
								<div className="listElement"><BsCheck2Circle size={25} /><p>Termékenységtudat tanfolyam (Hormonmentes)</p></div>

								<div className="listElement"><BsCheck2Circle size={25} /><p>A funkcionális autoimmunitás-a gyógyító élestílus (Szakmai Továbbképző)</p></div>
							
								<div className="listElement"><BsCheck2Circle size={25} /><p>Laborleletek értékelése a természetgyógyászati gyakorlatban (Helicastudio)</p></div>
						
								<div className="listElement"><BsCheck2Circle size={25} /><p>Emelt szintű laborelemzés. (Helicastudio)</p></div>
							
								<div className="listElement"><BsCheck2Circle size={25} /><p>Alkalmazott táplálkozási ismeretek 1-2 Modul-Egészségsport fókusszal (Táplálkozás Beállítás)</p></div>
							
								<div className="listElement"><BsCheck2Circle size={25} /><p>Meddőség holisztikus megközelítése, természetgyógyászati kiegészítő kezelése(Helicastudio)</p></div>
							
								<div className="listElement"><BsCheck2Circle size={25} /><p>Buteyko szeminárium (Lakatos Péter)</p></div>
							
								<div className="listElement"><BsCheck2Circle size={25} /><p>Fermentáló szeminárium (Müller Ildikó)</p></div>
								</div>
								</div>
					</Col>
						
				</Row>		
				<ul className="member-info">
							<li>
								<strong>Telefonszám:</strong> +36 30 690 0168
							</li>
							<li>
								<strong>Email cím:</strong> <a href="mailto:hello@miertmm.hu">hello@miertmm.hu</a>
							</li>
						</ul>
			</Container>
			
		</section>
    );
}

export default WorkerInfo;