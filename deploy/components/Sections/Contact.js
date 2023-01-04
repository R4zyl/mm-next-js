import React, { useRef,useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useForm } from '@formspree/react';
import { db } from '../../firebaseConfig';
import { collection, addDoc } from "firebase/firestore"; 

const Contact = (props) => {
    const [state, handleForm] = useForm("FORMSPREE_FORM_ID");
    const frm = useRef(null);
    const result = useRef(null);
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [emailText,setEmailText] = useState('');
    const [subject,setSubject] = useState('');
    const [buttonText,setButtonText] = useState('Üzenet küldése');

    if (state.succeeded) {
        frm.current.style.display = "none";
        result.current.style.display = "block";
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let now = new Date();
        try {
            const docRef =  await addDoc(collection(db, "contact"), {
              email: email,
              name: name,
              subject: subject,
              emailText: emailText,
              timeStamp: now
            });
            setButtonText('Üzenet elküldve');
          } catch (e) {
            setButtonText('Sikertelen üzenet küldés');
          }
    };
    return (
        <section id="kapcsolat" className={props.className}>
			
			{/* <!-- Container --> */}
			<Container>
				
				{/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<div className="col-12 col-md-10 col-lg-6">
						
						<div className="section-title text-center">
							<h3>Lépj velünk kapcsolatba</h3>
							<p>Ha bármi kérdésed adódna keress minket bátran.</p>
                        </div>
						
					</div>
				</Row>

				<Row>
					
					{/* <!-- Contact info --> */}
					<Col className="contact-info col-12 col-lg-4 res-margin">
						
                        <h5>
                            <span className="icon icon-basic-geolocalize-05"></span> 
                            Helyszín
                        </h5>
                        <p>
                            7624<br />
                            Pécs<br />
                            Barbakán tér 1/A
                        </p>
                        
                        <h5>
                            <span className="icon icon-basic-smartphone"></span> 
                            Telefonszám
                        </h5>
                        <p><a href="tel:16175723012">+36 30 690 0168</a></p>
                        
                        <h5>
                            <span className="icon icon-basic-mail"></span> 
                            Email cím
                        </h5>
                        <p>
                            <a href="mailto:hello@miertmm.hu">hello@miertmm.hu</a>
                        </p>
                        
                        <h5>
                            <span className="icon icon-basic-clock"></span> 
                            Nyitvatartás
                        </h5>
                        <p>
                            00:00 - 24:00
                        </p>
                        
					</Col>
					
					{/* <!-- Contact form --> */}
					<Col className="col-12 col-lg-8">
						
                        <form id="contact-form" onSubmit={handleSubmit} ref={frm}>                             
                            
                            <Row>
                                <Col className="col-12 col-lg-6">
                                    <div className="form-group mt-2 mb-3">
                                        <input type="text" name="name" className="form-control field-name" placeholder="Név" onChange={(changeEvent) => {
                                setName(changeEvent.target.value);
                              }} />
                                    </div>
                                </Col>
                                <Col className="col-12 col-lg-6">
                                    <div className="form-group mt-2 mb-3">
                                        <input type="email" name="email" className="form-control field-email" placeholder="Email cím" onChange={(changeEvent) => {
                                setEmail(changeEvent.target.value);
                              }}/>
                                    </div>
                                </Col>                                
                            </Row>
                            
                            <Row>
                                <Col className="col-12 col-lg-12">
                                    <div className="form-group mt-2 mb-3">
                                        <input type="text" name="subject" className="form-control field-subject" placeholder="Tárgy" onChange={(changeEvent) => {
                                setSubject(changeEvent.target.value);
                              }}/>
                                    </div>
                                </Col>
                            </Row>
                            
                            <Row>
                                <Col className="col-12 col-lg-12">
                                    <div className="form-group mt-2 mb-3">
                                        <textarea name="message" rows="4" className="form-control field-message" placeholder="Üzenet"onChange={(changeEvent) => {
                                setEmailText(changeEvent.target.value);
                              }}></textarea>
                                    </div>
                                </Col>
                            </Row>
                            
                            <Row>
                                <Col className="col-12 col-lg-12 mt-2">
                                    <button type="submit" id="contact-submit" name="send" className="btn" disabled={state.submitting} onClick={handleSubmit}>{buttonText}</button>
                                </Col>
                            </Row>
                            
                        </form>
                        
                        {/* <!-- Submit Results --> */}
                        <div className="contact-form-result" >
                            <h4>Köszönjük, megkaptuk az üzeneted.</h4>
                            <p>Igyekszünk mihamarabb válaszolni.
                            </p>
                        </div>
                        
					</Col>
					
				</Row>
				
			</Container>
			
		</section>
    );
}

export default Contact;