import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Media from './pages/Media';
import FAQ from './pages/FAQ';
import SignUp from './pages/SignUp';
import './App.css'

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />}/>
        <Route path="/Events" element={<Events />} />
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/Media" element={<Media />} />
        <Route path="/FAQ" element={<FAQ />}/>
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </Router>
  )
}

export default App
