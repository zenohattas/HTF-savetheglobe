import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LoginButton from './pages/Login';
import LogoutButton from './pages/Logout';
import Profile from './pages/Profile';
import Navbar from './layout/Navbar';
import { Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Router> */}
        <Navbar/>
        
        {/* <Routes>
          <Route exact path="/profile" element={<Profile/>}/> */}
          
          {/* <LoginButton/>
          <LogoutButton/> */}
          <Profile/>
        {/* </Routes>
      </Router> */}
    </div>
  );
}

export default App;
