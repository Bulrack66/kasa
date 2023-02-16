import './Home.scss';
import Section1 from '../../Components/Section1/Section1'
import Cards from '../../Components/Card/Cards'

function Home() {
  return (
    <div className="home">
      <Section1 />
      <Cards />
    </div>
  );
}

export default Home;