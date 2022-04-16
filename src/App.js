import './App.css';
import { Toaster } from 'react-hot-toast';
import { Routes } from 'react-router-dom';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>

      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
