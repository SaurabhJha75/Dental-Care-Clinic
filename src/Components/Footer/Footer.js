import React from 'react';
import './footer.css';
import img1 from './logo.jpg'
import { FaFacebook,FaInstagramSquare,FaTwitterSquare } from "react-icons/fa";
import { Col, Container, Row } from 'react-bootstrap';
const Footer = () => {
    return (
        <div className="footer">
           

           <Container fluid className='footer  ps-5'>
            <Row className='mt-5 pt-5'>
                {/*  footer img */}
                <Col xs={12} md={4} className='social ps-5'>
                    <img src={img1} alt="" height='150' width='150' />
                </Col>
                <Col xs={12} md={6}>
                    <Row >
                        {/* footer notes */}
                        <Col xs={12} md={6} className='mb-5'>
                            <p>About us</p>
                            <p>Our Services</p>
                            <p>Cell:+880412562652</p>
                        </Col>
                        <Col xs={12} md={6} className='d-flex flex-column align-items-center justify-content-center'>
                            <p>Follow us at</p>
                            <div className='d-flex justify-content-center mt-2'>
                                <FaFacebook style={{width:'50px',height:'50px',color:'blue'}}/>
                                <FaInstagramSquare style={{width:'50px',height:'50px',color:'red'}} />
                                <FaTwitterSquare style={{width:'50px',height:'50px',color:'yellow'}} />
                            </div>
                        </Col>
                    </Row>
                </Col>

            </Row>

        </Container>
        </div>
    );
};

export default Footer;