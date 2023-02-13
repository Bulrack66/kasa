import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Banner from './Components/Banner/Banner';
import Home from "./Pages/Home/Home";
import Lodging from './Pages/Lodging/Lodging';
import About from './Pages/About/About';
import Error from './Pages/Error/Error';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <>
      <div className="App">
        <Banner />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/lodging/:id' element={<Lodging />} />
            <Route path='/*' element={<Error />} />
        </Routes>
        
      </div>
      <Footer/>
      </>
  );
}

export default App;
