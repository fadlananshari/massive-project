import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home";
import Login from "./Pages/Login/Login";
import PilihJurusan from "./Pages/PilihJurusan/PilihJurusan";
import Homepage from "./Pages/Homepage";
import { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pilih-jurusan" element={<PilihJurusan />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
