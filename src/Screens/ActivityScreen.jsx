import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AlertMessage from '../components/AlertMessgage'
import ActivityDetail from '../components/ActivityDetail'

const ActivityScreen = () => {
    const [act, setAct] = useState({})
    const [set, setSet] = useState(false)
    const params = useParams()
    const activitiesList = [{
        "title": "Surfing",
        "img": "watersurfing.jpg",
        "description": "Use a Water Board to Surf the waves and rule them.",
        "slots": [{ "time": "08:00", "full": false }, { "time": "10:00", "full": true }, { "time": "12:00", "full": false }, { "time": "14:00", "full": false }],
        "link": "surfing"
    }, {
        "title": "Scuba Diving",
        "img": "scubadiving.jpg",
        "description": "Dive the deep ocean and enjoy the miracles of the ocean.",
        "slots": [{ "time": "08:00", "full": false }, { "time": "10:00", "full": true }, { "time": "12:00", "full": false }, { "time": "14:00", "full": false }],
        "link": "scubadiving"
    }, {
        "title": "Banana Riding",
        "img": "bananaride.jpg",
        "description": "Ride the banana shaped ride and have fun with you family and friends!.",
        "slots": [{ "time": "08:00", "full": false }, { "time": "10:00", "full": true }, { "time": "12:00", "full": false }, { "time": "14:00", "full": false }],
        "link": "bananariding"
    }, {
        "title": "Snorkelling",
        "img": "snorkelling.jpg",
        "description": "Dive in the ocean and don't worry about the oxygen tanks, just relax.",
        "slots": [{ "time": "08:00", "full": false }, { "time": "10:00", "full": true }, { "time": "12:00", "full": false }, { "time": "14:00", "full": false }],
        "link": "snorkelling"
    }, {
        "title": "Jet skiing",
        "img": "jetski.jpg",
        "description": "Experience the scooter that travels on water, it's really adventorous.",
        "slots": [{ "time": "08:00", "full": false }, { "time": "10:00", "full": true }, { "time": "12:00", "full": false }, { "time": "14:00", "full": false }],
        "link": "jetskiing"
    }, {
        "title": "Flyboarding",
        "img": "flyboard.jpg",
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
    }, [])
    return (
        <>
            {
                set ? (
                    <ActivityDetail act={act} />
                ) : (
                    <AlertMessage prop={{ variant: 'info', message: 'Loading' }} />
                )
            }
        </>
    )
}

export default ActivityScreen