import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AlertMessage from '../components/AlertMessgage'
import { Row, Col, Button, Form, Alert } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'

const ActivityScreen = () => {
    const [act, setAct] = useState({})
    const [set, setSet] = useState(false)
    const [show, setShow] = useState(false)
    const [timeSelect, setTimeSelect] = useState("")
    const params = useParams()
    const activitiesList = [{
        "title": "Surfing",
        "img": "/watersurfing2.jpg",
        "description": "Use a Water Board to Surf the waves and rule them.",
        "slots": [{ "time": "08:00", "full": false }, { "time": "10:00", "full": true }, { "time": "12:00", "full": false }, { "time": "14:00", "full": false }],
        "link": "surfing"
    }, {
        "title": "Scuba Diving",
        "img": "/scubadiving2.jpg",
        "description": "Dive the deep ocean and enjoy the miracles of the ocean.",
        "slots": [{ "time": "08:00", "full": false }, { "time": "10:00", "full": true }, { "time": "12:00", "full": false }, { "time": "14:00", "full": false }],
        "link": "scubadiving"
    }, {
        "title": "Banana Riding",
        "img": "/bananaactivity.jpg",
        "description": "Ride the banana shaped ride and have fun with you family and friends!.",
        "slots": [{ "time": "08:00", "full": false }, { "time": "10:00", "full": true }, { "time": "12:00", "full": false }, { "time": "14:00", "full": false }],
        "link": "bananariding"
    }, {
        "title": "Snorkelling",
        "img": "/snorkelling.jpg",
        "description": "Dive in the ocean and don't worry about the oxygen tanks, just relax.",
        "slots": [{ "time": "08:00", "full": false }, { "time": "10:00", "full": true }, { "time": "12:00", "full": false }, { "time": "14:00", "full": false }],
        "link": "snorkelling"
    }, {
        "title": "Jet skiing",
        "img": "/jetski.jpg",
        "description": "Experience the scooter that travels on water, it's really adventorous.",
        "slots": [{ "time": "10:00", "full": false }, { "time": "10:20", "full": true }, { "time": "10:40", "full": false }, { "time": "11:00", "full": false }, { "time": "11:00", "full": false }, { "time": "11:20", "full": false }, { "time": "11:40", "full": false }, { "time": "12:00", "full": false }],
        "link": "jetskiing"
    }, {
        "title": "Flyboarding",
        "img": "/flyboarding.jpg",
        "description": "A Water sport that lets you fly using the power of water, over water.",
        "slots": [{ "time": "08:00", "full": false }, { "time": "10:00", "full": true }, { "time": "12:00", "full": false }, { "time": "14:00", "full": false }],
        "link": "flyboarding"
    }]
    const selectAct = () => {
        activitiesList.forEach((i) => {
            if (i.link === params.id) {
                setAct(i)
                setSet(true)
            }
        })
    }
    useEffect(() => {
        selectAct()
        // eslint-disable-next-line
    }, [])
    return (
        <>
            {show && <Alert variant='success' dismissible={true} onClose={() => { setShow(false) }}>Slot Booked Successfully</Alert>}
            {
                set ? (
                    <div>
                        <Row>
                            <Col className='col-5'>
                                <h2 className='py-2 my-1'>{act.title}</h2>
                                <p>{act.description}</p><br /><br /><br />
                                <h2 className='py-2 my-1'>Location</h2>
                                
                            </Col>
                            <Col className='col-7'>
                                <img src={act.img} alt={act.title} width={700} height={400} className="rounded" />
                            </Col>
                        </Row>
                        <Row>
                            <h3>Time Slot</h3>
                            <sub>Slots can be booked for the current day only.</sub>
                            <FormContainer>
                                <Form>
                                    <Form.Group controlId='timeSlot' className='py-1'>
                                        {
                                            act.slots.map((ele, index) => (
                                                <Form.Check inline type='radio' disabled={ele.full} value={ele.time} label={ele.time} name="timeSlot" id={index} onChange={(e) => setTimeSelect(e.target.value)} className="p-3" />
                                            ))
                                        }
                                    </Form.Group>
                                    <div className="text-center py-3">
                                        <Button variant='outline-dark' size='md' onClick={() => { setShow(true) }} className='px-5 py-2 m-2' style={{ fontSize: '18px' }} disabled={timeSelect === "" ? true : false}>Register</Button>
                                    </div>
                                </Form>
                            </FormContainer>
                        </Row>
                    </div>
                ) : (
                    <AlertMessage prop={{ variant: 'info', message: 'Loading' }} />
                )
            }
        </>
    )
}

export default ActivityScreen