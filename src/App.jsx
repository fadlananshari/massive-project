import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Users from './Pages/users';
import FormRegist1 from './Pages/formregister1';
import FormRegist2 from './Pages/formregister2';
import Statusregister from './Pages/status_register';
import Edit_users from './Pages/editusers';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<FormRegist1 />}></Route>
        <Route path="/" element={<FormRegist2 />}></Route>
        <Route path="/" element={<Statusregister />}></Route>
        <Route path="/" element={<Users />}></Route>
        <Route path="/" element={<Edit_users />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
