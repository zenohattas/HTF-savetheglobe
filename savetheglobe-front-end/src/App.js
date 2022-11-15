import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Profile from './pages/Profile';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Addproject from './pages/Project/AddProject';
import Editproject from './pages/Project/EditProject';
import ViewProject from './pages/Project/ViewProject';
import Slide from './components/Slider';
import Sections from './components/Sections';
import background from "./Images/background.jpg";
import Overview from './pages/Overview';

function App() {
  return (
    <div className="App" >
      <Router>
        <Navbar/>
        <div style={{ backgroundImage: `url(${background})`, height: "720px"}}>
        <Routes>
          <Route exact path="/" element={<Overview/>}/>
          {/* <Route exact path="/" element={<Home/>}/> */}
          {/* <Route exact path="/" element={<Slide/>}/> */}
          {/* <Sections/> */}
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/adduser" element={<Addproject/>}/>
          <Route exact path="/editproject/:id" element={<Editproject/>}/>
          <Route exact path="/viewproject/:id" element={<ViewProject/>}/>
          <Route exact path="/profile" element={<Profile/>}/>
          {/* <Profile/> */}
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
