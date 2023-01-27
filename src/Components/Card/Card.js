import React, { Fragment, useEffect, useState } from 'react';
import './Card.scss';
import axios from 'axios';


export default function Card() {
const url = 'http://localhost:4000/api/products';
const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(url);
        setData(result.data);
      };
      fetchData();
    })

  return (
    <Fragment>
      <div>
        <div className="box-card">
          {data.map(item =>(
            <a className='cards' key={item.id} href={`http://localhost:3000/lodging/${item.id}`}>
              <img src={item.cover} className='cards-img'></img><div className='overlay'></div>
              <p className='text-cards'>{item.title}</p>
            </a>
          ))}
        </div>
      </div>
    </Fragment>
  )
}
