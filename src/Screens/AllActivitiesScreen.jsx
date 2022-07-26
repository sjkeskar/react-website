import React, { useState } from 'react'
import ActivityCard from '../components/ActivityCard'
import { Row, Col } from 'react-bootstrap'

const AllActivitiesScreen = () => {
    const [page, setPage] = useState(0)
    const activitiesList = [{
        "title": "Surfing",
        "img": "watersurfing.jpg",
        "description": "Surf the waves and rule them."
    }, {
        "title": "Scuba Diving",
        "img": "scubadiving.jpg",
        "description": "Dive the deep ocean and enjoy the miracles of the ocean."
    }, {
        "title": "Banana Riding",
        "img": "bananaride.jpg",
        "description": "Ride the banana shaped ride and have fun with you family and friends!."
    }, {
        "title": "Snorkelling",
        "img": "snorkelling.jpg",
        "description": "Dive in the ocean and don't worry about the oxygen tanks, just relax."
    }, {
        "title": "Jet skiing",
        "img": "jetski.jpg",
        "description": "Experience the scooter that travels on water, it's mighty fast and adventorous."
    }, {
        "title": "Flyboarding",
        "img": "flyboard.jpg",
        "description": "fly using the power of water, over water."

    }]
    return (
        <div>
            <Row>
                {activitiesList.map((activity, index) => (
                    <Col xl={3} md={4} lg={4} sm={2} key={index} className='p-2'>
                        <ActivityCard Activity={activity} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default AllActivitiesScreen