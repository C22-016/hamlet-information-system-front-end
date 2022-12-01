import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPages from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import Broadcast from './pages/Broadcast';
import Message from './pages/Message';
import Archive from './pages/Archive';
import User from './pages/User';
import Event from './pages/Event';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPages />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/broadcast" element={<Broadcast />}></Route>
          <Route path="/message" element={<Message />}></Route>
          <Route path="/archive" element={<Archive />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="/event" element={<Event />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
