import React from 'react'
import './Styles/styles.css'
import Navbar1 from './Components/Navbar1'
// import Footer from './Components/Footer';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Categories from './Pages/Categories';
import Colleges from './Pages/Colleges';
import About from './Pages/About';
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import NewFooter from './Components/NewFooter';

function App() {
  return (
    <div className='initial'>
      <BrowserRouter>
        <Routes>

        </Routes>

        <Navbar1 />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="categories" element={<Categories/>} />
        <Route path="colleges" element={<Colleges />} />
        <Route path="blogs" element={<Blogs/>} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      
        <NewFooter/>
      </BrowserRouter>



    </div>
  )
}

export default App