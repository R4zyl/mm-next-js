import React, { useEffect,useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { db } from '../../firebaseConfig';
import { collection, addDoc } from "firebase/firestore"; 


// MailChimp

// Custom subscription form
const SubscribeForm = () => {
    const [status, setStatus] = useState('');
    const [email, setEmail] = useState('');
    const [aboutMe, setAboutMe] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        let now = new Date();
        try {
            const docRef =  await addDoc(collection(db, "subscriptions"), {
              email: email,
              timeStamp: now
            });
            setStatus('success');
          } catch (e) {
            setStatus('failed');
          }
    };

    return (
        <form id="#subscribe-form">
            
            {status !== "success" ? (               
                <>
                    <div className="input-group mb-3">
                        <input type="email" value={email} name="email"
                            className="form-control field-subscribe"
                            placeholder="Email címed"
                            required
                            onChange={(changeEvent) => {
                                setEmail(changeEvent.target.value);
                              }}
                         />
                    </div>
                    <button type="submit" className="btn w-100" onClick={handleSubmit}>
                        Feliratkozás
                    </button>
                </>
            ) : null}

            {status === "success" && (
                <h3 id="subscribe-result" className="text-center text-white">
                    Köszönjük, hogy feliratkoztál!
                </h3>
            )}
            {status === "failed" && (
                <h3 id="subscribe-result" className="text-center text-white">
                    Sikertelen feliratkozás
                </h3>
            )}

        </form>
    );
};

const Subscribe = () => {
    const parallax = useRef(null);

    useEffect(() => {
        if (parallax.current) {
            parallax.current.style.backgroundImage = `url(${parallax.current.getAttribute('data-image')})`;
        }
    }, [parallax]);
    

    return (
        <section id="subscribe" className="parallax" data-image="/images/parallax/subscribe.jpg" ref={parallax}>
			
			{/* <!-- Overlay --> */}
			<div className="overlay"></div>	
			
			{/* <!-- Container --> */}
			<Container>

                {/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<Col className="col-12 col-md-10 col-lg-6">
						
						<div className="section-title text-center white">
							<h3 className="text-white">Iratkozz fel hírlevelünkre</h3>
							<p>Rendszeresen tájékoztatunk workshopjainkról és kedvezményeinkről.</p>
                        </div>
						
					</Col>
				</Row>

                {/* <!-- Newsletter form --> */}
                <Row className="justify-content-center">
                    <Col className="col-12 col-md-10 col-lg-6">
                                <SubscribeForm
                                    onValidated={formData => subscribe(formData)}
                                />
                      
                        
                        <div className="empty-30"></div>
                        
                        <p className="text-center mb-0">                         
                            Személyes adataidat nem osztjuk meg senkivel.
                            Bővebb információért olvasd el <a href="#"><Link href="https://miertmm.hu/privacy-policy/"><strong>adatkezelési tájékoztatónkat.</strong></Link></a>
                        </p>
                        
                    </Col>
                </Row>

            </Container>
				
		</section>
    );
}

export default Subscribe;