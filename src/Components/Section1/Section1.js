import './Section1.scss';
import background from '../../assets/background-home.png';

function Section1() {
  return (
    <div className="top">
      <img className='background' src={background}></img>
      <h1 className='title'>Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Section1;
