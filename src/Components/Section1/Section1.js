import './Section1.scss';
import background from '../../assets/section1.png';

function Section1() {
  return (
    <div className="section1">
      <img className='background1' src={background}></img>
      <div className='title'><h1 className='title1'>Chez vous,</h1><h1 className='title2'>partout et ailleurs</h1></div>
    </div>
  );
}

export default Section1;
