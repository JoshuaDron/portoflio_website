import react from 'React'
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"

//import pages
import Home from './pages/home';
import About from './pages/about';
import Work from './Pages/Work';
import Resume from './Pages/Resume';
import Interests from './Pages/Interests';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element ={<Home />}/>
        <Route path='/about' element ={<About />}/>
        <Route path='/work' element ={<Work />}/>
        <Route path='/resume' element ={<Resume />}/>
        <Route path='/interests' element ={<Interests />}/>
      </Routes>
    </Router>
  );
}

export default App;
