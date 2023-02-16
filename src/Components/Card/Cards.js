import React, { Fragment, useEffect, useState } from 'react';
import './Cards.scss';
import axios from 'axios';

const client = axios.create({
  baseURL: `http://localhost:4000/api/products` 
});

export default function Card() {

const [data, setData] = useState(null);

useEffect(() => {
  async function getPost() {
    const response = await client.get(``);
    setData(response.data);
  }
  getPost();
}, []);

if (!data) return null;
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
