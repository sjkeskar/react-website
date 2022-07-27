import React from 'react'
import { Row, Col, Image, Button } from 'react-bootstrap'

const ActivityDetail = ({ act }) => {
    console.log(act);
    return (
        <div>
            <Row className='p-1'>
                <Image src={act.img} width={500} height={400} />
            </Row>
            <Row className='p-1'>
                <h4>{act.title}</h4>
                <h4>Choose Slot</h4>
            </Row>
            <Row className='p-3'>
                {act.slots.map((item, index) => (
                    <Col lg={3} xl={2} key={index}>
                        <Button variant='outline-primary' disabled={item.full}>{item.time}</Button>
                    </Col>
                ))}
            </Row>
            <Row className='p-2'>
                <Button variant='outline-danger'>Confirm Time Slot</Button>
            </Row>
        </div>
    )
}

export default ActivityDetail