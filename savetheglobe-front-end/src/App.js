import './App.css';
import LoginButton from './pages/Login';
import LogoutButton from './pages/Logout';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <LoginButton/>
      <LogoutButton/>
      <Profile/>
    </div>
  );
}

export default App;
