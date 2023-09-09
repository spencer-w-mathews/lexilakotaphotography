import Home from './pages/Home/Home';
import Info from './pages/Info/Info';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MeetLexi from './pages/MeetLexi/MeetLexi';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import  Navigation  from './pages/Navigation';
import $ from 'jquery'
import { useEffect, useState } from 'react';

function App() {
const [navOpen, setNavOpen] = useState(false)

const onNavClick = () => {
  setNavOpen(!navOpen)
  if(navOpen){
  $('#overlay').hide();
  $('.lines-button').removeClass('close');
  }else{
    $('#overlay').show();
        $('.lines-button').addClass('close');
  }
}

const onBodyClick = () => {
  setNavOpen(false)
  if(navOpen){
  $('#overlay').hide();
  $('.lines-button').removeClass('close');
  }
}
  return (
    <BrowserRouter>
        <div style={{justifyContent: 'space-between', display: 'flex', flexDirection: 'row',zIndex: 3}}>
        <div style={{width: '50%', padding: 0}}>
        <p style={{color: 'white', marginLeft: '2%', fontSize: 25, position: 'relative', top: -25}}>Lexi Lakota<br></br>Photography</p>
        </div>
          <button className="lines-button lines" onClick={()=> onNavClick()}><span></span></button>
        </div>
      <div>
      <Navigation navOpen={navOpen} setNavOpen={setNavOpen} onNavClick={onNavClick}/>
      </div>
      <Routes>
        <Route path="*" element={<Home onBodyClick={onBodyClick} />} />
        <Route path="meetlexi" element={<MeetLexi />} />
        <Route path="info" element={<Info />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
