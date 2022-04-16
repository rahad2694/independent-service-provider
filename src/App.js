import './App.css';
import { Toaster } from 'react-hot-toast';
import { Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Carousel></Carousel>
      <Routes>

      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
