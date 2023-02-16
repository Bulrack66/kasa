import './Lodging.scss';
import React,{ useEffect, useState } from 'react';
import { useParams, redirect, useNavigate} from 'react-router-dom';
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
const navigate = useNavigate();

const [data, setData] = useState(null);

useEffect(() => {
  client.get(`/${id}`)
  .then((response) => {
    setData(response.data)
  })
  .catch((error) => {
    if (error.response.status == 404) {
      navigate("/error")
    }
  })
}, []);

  return (data &&
    <div className='Lodging'>
      <Slider pictures={data.pictures}/>
      <div className='box-presentation'>
          <div className='box-lodging-about'>
            <h2 className='title-lodging'>{data.title}</h2>
            <h3 className='location-lodging'>{data.location}</h3>
            <div className='tags'>{data.tags.map((t, index)=>(<div key={index} className='tag'>{t}</div>))}</div>
          </div>
        <div className='box-profil-about'>
            <div><Profils avatar={data.host.picture} name={data.host.name}/></div>
            <div><Ratings rating={data.rating}/></div>
        </div>
      </div>
      <div className='collapse-box'>
        <div className='collapse-lodging'>
          <Collapse title={'Description'} content={data.description}/>
        </div>
        <div className='collapse-lodging equipments'>
          <Collapse title={'Equipements'} content={data.equipments} />
        </div>
      </div>
    </div>
  )
};