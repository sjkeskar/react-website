import React from 'react'
import { Carousel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ImgCarousel = () => {
    const imgData = [{
        "title": "Scuba Diving",
        "img": "scubadiving11.jpg",
        "description": "Dive the deep ocean and enjoy the miracles of the ocean.",
        "color": "#F4F3EE",
        "link": "scubadiving"
    }, {
        "title": "Snorkelling",
        "img": "snorkelingcarousel.jpg",
        "description": "Dive in the ocean and don't worry about the oxygen tanks, just relax.",
        "color": "white",
        "link": "snorkelling"
    }, {
        "title": "Jet skiing",
        "img": "jetskiingcarousel.jpg",
        "description": "Experience the scooter that travels on water, it's mighty fast and adventorous.",
        "color": "black",
        "link": "jetskiing"
    }, {
        "title": "Flyboarding",
        "img": "flyboardcarousel.jpg",
        "description": "fly using the power of water, over water.",
        "color": "black",
        "link": "flyboarding"
    }, {
        "title": "Banana Riding",
        "img": "bananaridecarousel.jpg",
        "description": "Ride the banana shaped ride and have fun with you family and friends!.",
        "color": "#F4F3EE",
        "link": "bananariding"
    }, {
        "title": "Surfing",
        "img": "surfingcarousel1.jpg",
        "description": "Surf the waves and rule them.",
        "color": "white",
        "link": "surfing"
    }]
    return (
        <>
            <Carousel fade  >
                {imgData.map((act) => (
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            // src={`${act.img}/800x400?text=First slide&bg=f5f5f5`}
                            src={act.img}
                            alt={act.title}
                            height={600}
                        />
                        <Carousel.Caption>
                            <h5 style={{ 'color': `${act.color}` }}>{act.title}</h5>
                            <p style={{ 'color': `${act.color}` }}>{act.description}</p>
                            <Link to={`/activity/${act.link}`} className="removea">
                                <Button type='button' className='btn btn-dark px-5 py-2 m-2'>
                                    Book now
                                </Button>
                            </Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    )
}

export default ImgCarousel