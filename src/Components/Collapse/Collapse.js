import React, { useEffect, useState } from "react";
import './Collapse.scss';
import Arrow from '../../assets/arrow.png';


const Collapse = ({title, content}) => {
  const [open, setOPen] = useState(false);
  const toggle = () => {
    setOPen(!open);
  };
  const arrayContent = [];
  arrayContent.push(content)
  return (
    <div>
      <div onClick={toggle} className='btn-collapse'>{title}<img src={Arrow} className={open ? 'arrow arrow-up' : "arrow arrow-down"}></img></div>
      <div className={open ? "content-show" : "content-parent"}>
        {arrayContent.length <= 1 
        ? arrayContent.map(c=>(<div>{c}</div>))
        : arrayContent.map((c,index)=>(<li key={index}>{c}</li>))}
      </div>
    </div>
  )
}

export default Collapse;
