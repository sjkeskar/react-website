import React from 'react'
import { Card, Button } from 'react-bootstrap';

const ActivityCard = ({ Activity }) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Activity.img} width={200} height={200} />
                <Card.Body>
                    <Card.Title>{Activity.title}</Card.Title>
                    <Card.Text>
                        {Activity.description}
                    </Card.Text>
                    <div className="d-grid p-1">
                        <Button type='button' className='btn btn-danger btn-block'>Book now</Button>
                    </div>
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
