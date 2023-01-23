import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Banner from './Components/Banner/Banner';
import Home from "./Components/Home/Home";
import Lodging from './Components/Lodging/Lodging';
import About from './Components/About/About';
import Error from './Components/Error/Error';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/lodging/:id' element={<Lodging />} />
          <Route path='/*' element={<Error />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
