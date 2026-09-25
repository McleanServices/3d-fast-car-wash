
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Contact, Hero, Navbar, StarsCanvas } from "./components";
import Home from './components/Home'
import Form from './components/Form';
import Cursor from './components/Cursor'





const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Cursor/>
        </div>
        <Routes>
          <Route index element={<Home />} />
          <Route path='form' element={<Form />} />
          <Route />
        </Routes>
        <div className='relative z-0'>
        
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
