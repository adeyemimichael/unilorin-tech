import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Team from './components/Team';
import AdminPortal from './components/AdminPortal';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  return (
    <div className="w-full min-h-screen m-0 p-0 overflow-x-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/admin" element={<AdminPortal />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
