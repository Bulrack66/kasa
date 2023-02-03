import React, { useEffect, useState } from "react";
import './Collapse.scss';
import Arrow from '../../assets/arrow.png';


const Collapse = ({title, content}) => {
  const [open, setOPen] = useState(false);
  const toggle = () => {
    setOPen(!open);
  };

  return (
    <div className="Collapse">
      <div onClick={toggle} className='btn-collapse'>{title}<img src={Arrow} className={open ? 'arrow arrow_up' : " arrow arrow_down"}></img></div>
      <div className={open ? "content content-show" : "content content-parent"}>
        {typeof content === 'object'
        ? content.map((c,index)=>(<li key={index}>{c}</li>))
        : <div >{content}</div> }
      </div>
    </div>
  )
}

export default Collapse;
