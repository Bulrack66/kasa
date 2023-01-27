import './Lodging.scss';
import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Collapse from '../../Components/Collapse/Collapse';
import Profils from '../../Components/Profils/Profils';
import Slider from '../../Components/Slider/Slider'


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
    
    const findImage = () => {
      const pictures = [];
      if (pictures == []){
        pictures.push(data.pictures);
        console.log (pictures)
        return
      }else return
    }
    // const equipmentsList = ({equipementDescript}) => {
    //   <li>{data.description}</li>
    // }
  return (
    <div>
      <div></div>
      <div className='box-presentation'>
        <div className='box-lodging-about'>
          <h2 className='title-lodging'>{data.title}</h2>
          <h3 className='location-lodging'>{data.location}</h3>
          <div>Tags</div>
        </div>
        <div className='box-profil-about'>
        <div>
    </div>
          <div><Profils avatar={'img-avatar'} name={'host.name'}/></div>
          <div>Rating</div>
        </div>
      </div>
      <div className='collapse-box'>
        <div className='callapse-lodging'>
          <Collapse title={'Description'} content={data.description}/>
        </div>
        <div>
          <Collapse title={'Equipements'} content={equipementDescript}/>
        </div>
      </div>
    </div>
  )
};

export default Lodging;
