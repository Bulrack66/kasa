import './Lodging.scss';
import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Collapse from '../../Components/Collapse/Collapse';
import Profils from '../../Components/Profils/Profils';
import Slider from '../../Components/Slider/Slider';
import Ratings from '../../Components/Ratings/Ratings';

const client = axios.create({
  baseURL: `http://localhost:4000/api/products` 
});

export default function Lodging() {

const {id} = useParams();

const [data, setData] = React.useState(null);

React.useEffect(() => {
  async function getPost() {
    const response = await client.get(`/${id}`);
    setData(response.data);
  }
  getPost();
}, []);

if (!data) return null;

  return (
    <div>
      <div><Slider pictures={data.pictures}/></div>
      <div className='box-presentation'>
          <div className='box-lodging-about'>
            <h2 className='title-lodging'>{data.title}</h2>
            <h3 className='location-lodging'>{data.location}</h3>
            <div>Tags</div>
          </div>
        <div className='box-profil-about'>
            <div><Profils avatar={data.host.picture} name={data.host.name}/></div>
            <div><Ratings rating={data.rating}/></div>
        </div>
      </div>
      <div className='collapse-box'>
        <div className='callapse-lodging'>
          <Collapse title={'Description'} content={data.description}/>
        </div>
        <div className='callapse-lodging equipments'>
          <Collapse title={'Equipements'} content={data.equipments}/>
        </div>
      </div>
    </div>
  )
};