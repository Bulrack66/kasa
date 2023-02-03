import './Section1.scss';
import background from '../../assets/section1.png';

function Section1() {
  return (
    <div className="section1">
      <img className='background1' src={background}></img>
      <h1 className='title'><div className='title'>Chez vous,</div> <div className='title2'>partout et ailleurs</div></h1>
    </div>
  );
}

export default Section1;
