import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import Login from './Pages/Login/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/program" element={<Home />} />
        <Route path="/kontak" element={<Home />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
