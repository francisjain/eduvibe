import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeOne from './pages/HomeOne';
import HomeTwo from './pages/HomeTwo';
import HomeThree from './pages/HomeThree';

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route path='/' element={<HomeOne />} />
          <Route path='/home-two' element={<HomeTwo />} />
          <Route path='/home-three' element={<HomeThree />} />
        </Routes>
          <Footer/>
      </BrowserRouter>
    </>

  );
}

export default App;

