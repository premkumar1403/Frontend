
import React from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import { Routes,Route} from 'react-router-dom'
import Contactus from './Components/Contactus';
import Portfolio from './Components/Portfolio';
import Captcha from './Components/Captcha';
import Ecommerce from './Components/Ecommerce'
import Ticketbooking from './Components/Ticketbooking'
import Filesharing from './Components/Filesharing'
import Foodblog from './Components/Foodblog'

function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contactus" element={<Contactus />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/captcha" element={<Captcha />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/ticketbooking" element={<Ticketbooking />} />
        <Route path="/projectsend" element={<Filesharing />} />
        <Route path="/foodblog" element={<Foodblog />} />
      </Routes>
    </div>
  );
}
export default App;
