import React from 'react';
import { Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Card.css'

const Cards = (props) => {
    const { key, name, image, description } = props.service
    return (
        <div>

         

<Card  className="text-center border-0  p-2 hCard box-shadow-3d">
  
    <Card.Img variant="top" src={image} className='img-fluid cardpic px-5' />
   
 
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
     {description.slice(0,50)}...
    </Card.Text>
    <Link to={`/bookingservice/${key}`}>
    <Button className='btnCard fw-bold' variant="success">Book Now</Button>
    </Link>
   
  </Card.Body>
</Card>

            
        </div>
    );
};

export default Cards;