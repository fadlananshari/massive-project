import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import Login from './Pages/Login/Login';
import PilihJurusan from './Pages/PilihJurusan/PilihJurusan';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pilih-jurusan" element={<PilihJurusan />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
