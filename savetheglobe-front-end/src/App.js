import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Profile from './pages/Profile';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Addproject from './Project/AddProject';
import Editproject from './Project/EditProject';
import ViewProject from './Project/ViewProject';
import { useEffect, useState } from 'react';

function App() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(()=> {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);  
  }, []);

  const renderContent = () => (
    <>
      <Router>
        <Navbar/>
        
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/adduser" element={<Addproject/>}/>
          <Route exact path="/editproject/:id" element={<Editproject/>}/>
          <Route exact path="/viewproject/:id" element={<ViewProject/>}/>
          <Route exact path="/profile" element={<Profile/>}/>
          {/* <Profile/> */}
        </Routes>
      </Router>
    </>
  );

  return (
    <section className="Parallax">
    <div className="Parallax__background" style={{ transform: `translateY(-${offsetY * 0.5}px)` }}/>
    <div className="Parallax__content">{renderContent()}</div>     
    </section>
  );
}

export default App;
