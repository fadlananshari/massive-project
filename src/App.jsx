import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import FormRegist1 from './Pages/formregister1';
import FormRegist2 from './Pages/formregister2';
import Statusregister from './Pages/status_register';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        
        {/* <Route path="/" element={<FormRegist1 />}></Route> */}
        {/* <Route path="/" element={<FormRegist2 />}></Route> */}
        <Route path="/" element={<Statusregister />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
