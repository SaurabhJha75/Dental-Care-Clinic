import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Cards from '../Card/Cards';
import './service.css'
const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {

        fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => setServices(data))


    }, [])


    return (
        <Container>
            <h2 className=" textCard mt-5" style={{fontSize:'2rem',fontWeight:'bold',color:'black'}}>This is Our Services</h2>
            <hr className='w-50 mx-auto mb-2 mt-0' />
            <Row xs={1} sm={1} md={2} lg={3} className="g-4" style={{marginLeft:'5px',paddingLeft:'5px'}}>
                {
                    services.map(service => <Cards

                        key={service.key}
                        service={service}
                    >

                    </Cards>)
                }
            </Row>

        </Container>
    );
};

export default Services;