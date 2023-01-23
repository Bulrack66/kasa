import React from 'react';
import { Slide } from 'react-slideshow-image';
import './Slide.scss'
import pictures from '../../api.json';

const proprietes = {

}

const slideImages = [
    pictures.map(p => {
        return p.cover
    })
]

const Slideshow = () => {
    return (
        <div className='containerSlide'>
            <Slide {...proprietes}>
                <div className='each-slide'>
                    <div>
                        <img src={p.cover} alt='img1'></img>
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Slideshow