import React, { useEffect, useState } from "react";
import './Collapse.scss';
import Arrow from '../../assets/arrow.png';


const Collapse = ({title, content}) => {
  const [open, setOPen] = useState(false);
  const toggle = () => {
    setOPen(!open);
  };

  return (
    <div>
      <div onClick={toggle} className='btn-collapse'>{title}<img src={Arrow} className={open ? 'arrow arrow-up' : "arrow arrow-down"}></img></div>
      <div className={open ? "content-show" : "content-parent"}>
        <div className='content'> {content} </div>
      </div>
    </div>
  )
}

export default Collapse;
