import React from 'react'
import { Carousel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ImgCarousel = () => {
    const imgData = [{
        "title": "Surfing",
        "img": "watersurfing.jpg",
        "description": "Surf the waves and rule them.",
        "color": "white",
        "link": "surfing"
    }, {
        "title": "Scuba Diving",
        "img": "scubadiving1.jpg",
        "description": "Dive the deep ocean and enjoy the miracles of the ocean.",
        "color": "#F4F3EE",
        "link": "scubadiving"
    }, {
        "title": "Banana Riding",
        "img": "bananaride.jpg",
        "description": "Ride the banana shaped ride and have fun with you family and friends!.",
        "color": "#F4F3EE",
        "link": "bananariding"
    }, {
        "title": "Snorkelling",
        "img": "snorkelling.webp",
        "description": "Dive in the ocean and don't worry about the oxygen tanks, just relax.",
        "color": "white",
        "link": "snorkelling"
    }, {
        "title": "Jet skiing",
        "img": "jetski.jpg",
        "description": "Experience the scooter that travels on water, it's mighty fast and adventorous.",
        "color": "black",
        "link": "jetskiing"
    }, {
        "title": "Flyboarding",
        "img": "flyboard.jpg",
        "description": "fly using the power of water, over water.",
        "color": "black",
        "link": "flyboarding"
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
                            <Link to={`/activity/${act.link}`}>
                                <div className="d-grid p-1">
                                    <Button type='button' className='btn btn-danger btn-block'>
                                        Book now
                                    </Button>
                                </div>
                            </Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}

export default ImgCarousel