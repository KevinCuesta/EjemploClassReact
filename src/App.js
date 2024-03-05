import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Contact from './pages/Contact';
import AbautMe from './pages/AbautMe';
import Profile from './pages/Profile';

function App(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
            <li>
              <Link to="/abautme">Abaut Me</Link>
            </li>
            <li>
              <Link to="/profile">profile</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/abautme" element={<AbautMe />} />
          <Route path="/profile/:name" element={<Profile />} />
        </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
