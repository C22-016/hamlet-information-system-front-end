import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPages from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import Broadcasts from './pages/Broadcasts';
import Messages from './pages/Messages';
import Archives from './pages/Archives';
import AddArchive from './pages/AddArchive';
import UpdateArchive from './pages/UpdateArchive';
import Users from './pages/Users';
import AddUser from './pages/AddUser';
import UpdateUser from './pages/UpdateUser';
import Events from './pages/Events';
import AddEvent from './pages/AddEvent';
import UpdateEvent from './pages/UpdateEvent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPages />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/broadcasts" element={<Broadcasts />}></Route>
          <Route path="/messages" element={<Messages />}></Route>
          <Route path="/archives" element={<Archives />}></Route>
          <Route path="/archives/add" element={<AddArchive />}></Route>
          <Route path="/archives/update/:id" element={<UpdateArchive />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/users/add" element={<AddUser />}></Route>
          <Route path="/users/update/:id" element={<UpdateUser />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/events/add" element={<AddEvent />}></Route>
          <Route path="/events/update/:id" element={<UpdateEvent />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
