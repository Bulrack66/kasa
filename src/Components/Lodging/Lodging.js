import './Lodging.scss';
import React, { Fragment, useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Collapse from '../Collapse/Collapse';
import Profils from '../../Profils/Profils';


function Lodging() {
const {id} = useParams();
const url = `http://localhost:4000/api/products/${id}`;
const [data, setData] = useState({});

    useEffect(() => {
      const fetchData = async () => {
        const res = await axios(url);
        setData(res.data);
      };
      fetchData();
    })
    // const equipments = [data.equipments]
    // console.log(equipments);
    // const pictures = [];
    // pictures.push(data.pictures)
    // console.log (pictures)

  return (
    
    <div>
      <div>Carroussel</div>
      <div className='box-presentation'>
        <div className='box-lodging-about'>
          <h2 className='title-lodging'>{data.title}</h2>
          <h3 className='location-lodging'>{data.location}</h3>
          <div>Tags</div>
        </div>
        <div className='box-profil-about'>
          <div><Profils avatar={'img-avatar'} name={'host.name'}/></div>
          <div>Rating</div>
        </div>
      </div>
      <div className='collapse-box'>
        <div className='callapse-lodging'>
          <Collapse title={'Description'} content={data.description}/>
        </div>
        <div>
          <Collapse title={'Equipements'} content={data.equipments}/>
        </div>
      </div>
        {/* data.equipments.map(e=>{
          <li key={1}>{console.log(e)}</li>
        })
        }/> */}
    </div>
  )
};

export default Lodging;
