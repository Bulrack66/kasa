import './Section1.scss';
import background from '../../assets/section1.png';

function Section1() {
  return (
    <div className="section1">
      <img className='background1' src={background}></img>
      <h1 className='title'>Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Section1;
