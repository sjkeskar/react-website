import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ActivityCard = ({ Activity }) => {
    return (
        <div>
            <Card style={{ width: '18rem', minHeight: '24rem' }}>
                <Card.Img variant="top" src={Activity.img} height={'180rem'} />
                <Card.Body>
                    <Card.Title>{Activity.title}</Card.Title>
                    <Card.Text>
                        {Activity.description}
                    </Card.Text>
                    <div className="p-2"></div>
                    <Link to={`/activity/${Activity.link}`} className="removea">
                        <div className="d-grid p-1">
                            <Button type='button' className='btn btn-dark'>Book now</Button>
                        </div>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ActivityCard

// const data = {
//     "title": "Banana Ride",
//     "details": "A banana shaped baloon ride across the beach, that will be very adventerous.",
//     "img": "bananaride.jpg"
//   }
