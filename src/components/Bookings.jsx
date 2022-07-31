import React from 'react'
import { Container, Table } from 'react-bootstrap'

const Bookings = () => {
    const data = [{
        "activity": "Scuba Diving",
        "location": "Malvan",
        "date": "12-04-2020"
    }, {
        "activity": "Snorkelling",
        "location": "Malvan",
        "date": "13-04-2020"
    }, {
        "activity": "Jet Skiing",
        "location": "Tarkarli",
        "date": "15-04-2020"
    }, {
        "activity": "Banana Ride",
        "location": "Tarkarli",
        "date": "16-04-2020"
    }, {
        "activity": "Scuba Diving",
        "location": "Goa",
        "date": "22-06-2020"
    }, {
        "activity": "Surfing",
        "location": "Goa",
        "date": "22-06-2020"
    }, {
        "activity": "FlyBoarding",
        "location": "Goa",
        "date": "30-06-2020"
    }]
    return (
        <Container>
            <div>
                <div className='py-3'>
                    <h2>My Bookings</h2>
                </div>
                <Table borderless>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Activity</th>
                            <th>Location</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((element, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{element.activity}</td>
                                    <td>{element.location}</td>
                                    <td>{element.date}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        </Container>
    )
}

export default Bookings