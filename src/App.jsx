import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPages from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import Broadcast from './pages/Broadcast';
import Message from './pages/Message';

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
