import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './Components/Navbar/Navbar';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Patient from './Pages/Patient/Patient';
import Doctor from './Pages/Doctor/Doctor';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
