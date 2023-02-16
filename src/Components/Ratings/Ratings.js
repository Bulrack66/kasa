import React from 'react';
import colorStar from '../../assets/star-color.png';
import greyStar from '../../assets/star-grey.png';
import './Ratings.scss'

export default function Ratings(rating) {

    const fullStars = Array(5).fill(colorStar);
    const emptyStars = Array(5).fill(greyStar);
    
  return (
    
    <div className='stars-contener'>
        {fullStars.slice(5-rating.rating).map((fullStars, index )=> {
        return <img key={index} src={fullStars}></img>
        })}
        {emptyStars.slice(rating.rating).map((emptyStars, index )=> {
        return <img key={index} src={emptyStars}></img>
        })}   
    </div>
  )
}
