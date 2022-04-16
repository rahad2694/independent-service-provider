import './App.css';
import { Toaster } from 'react-hot-toast';
import { Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Carousel></Carousel>
      <Services></Services>
      <Routes>

      </Routes>
      <Toaster />
      <Footer></Footer>
    </div>
  );
}

export default App;
