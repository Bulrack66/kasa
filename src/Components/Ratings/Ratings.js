import React from 'react';
import colorStar from '../../assets/star-color.png';
import greyStar from '../../assets/star-grey.png';

export default function Ratings(rating) {

    const fullCircles = Array(5).fill(colorStar);
    const emptyCircles = Array(5).fill(greyStar);
    
  return (
    
    <div className='stars-contener2'>
        {fullCircles.slice(5-rating.rating).map((fullCircle, index )=> {
        return <img key={index} src={fullCircle}></img>
        })}
        {emptyCircles.slice(rating.rating).map((emptyCircles, index )=> {
        return <img key={index} src={emptyCircles}></img>
        })}   
    </div>
  )
}
