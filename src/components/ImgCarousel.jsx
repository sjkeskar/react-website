import React from 'react'
import { Carousel, Button } from 'react-bootstrap';

const ImgCarousel = () => {
    const imgData = [{
        "title": "Surfing",
        "img": "watersurfing.jpg",
        "description": "Surf the waves and rule them.",
        "color": "#F4F3EE"
    }, {
        "title": "Scuba Diving",
        "img": "scubadiving.jpg",
        "description": "Dive the deep ocean and enjoy the miracles of the ocean.",
        "color": "#F4F3EE"
    }, {
        "title": "Banana Riding",
        "img": "bananaride.jpg",
        "description": "Ride the banana shaped ride and have fun with you family and friends!.",
        "color": "#F4F3EE"
    }, {
        "title": "Snorkelling",
        "img": "snorkelling.jpg",
        "description": "Dive in the ocean and don't worry about the oxygen tanks, just relax.",
        "color": "#F4F3EE"
    }, {
        "title": "Jet skiing",
        "img": "jetski.jpg",
        "description": "Experience the scooter that travels on water, it's mighty fast and adventorous.",
        "color": "white"
    }, {
        "title": "Flyboarding",
        "img": "flyboard.jpg",
        "description": "fly using the power of water, over water.",
        "color": "black"
    }]
    return (
        <div>
            <Carousel>
                {imgData.map((act) => (
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            // src={`${act.img}/800x400?text=First slide&bg=f5f5f5`}
                            src={act.img}
                            alt={act.title}
                            width={800}
                            height={620}
                        />
                        <Carousel.Caption>
                            <h5 style={{ 'color': `${act.color}` }}>{act.title}</h5>
                            <p style={{ 'color': `${act.color}` }}>{act.description}</p>
                            <div className="d-grid p-1">
                                <Button type='button' className='btn btn-danger btn-block'>Book now</Button>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}

export default ImgCarousel