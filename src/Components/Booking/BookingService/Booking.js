import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';

import { useParams } from 'react-router';
import './booking.css'
const Booking = () => {
    const { serviceKey } = useParams();
    const [bookings, setBooking] = useState([])
    useEffect(() => {

        fetch('/fakedata.json')
            .then(res => res.json())
            .then(data => setBooking(data))


    }, [])

    const bookingInfo = bookings.find(booking => booking.key === parseInt(serviceKey))

    // console.log(bookingInfo)


    return (
        <div className="booking">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={bookingInfo?.image} />
                <Card.Body>
                    <Card.Title>{bookingInfo?.name}</Card.Title>
                    <Card.Text>
                        {bookingInfo?.description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );

};

export default Booking;