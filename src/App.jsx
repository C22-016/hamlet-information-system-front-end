import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  LandingPage,
  LoginPage,
  Dashboard,
  Broadcasts,
  Messages,
  UpdateMessage,
  Archives,
  AddArchive,
  UpdateArchive,
  Users,
  AddUser,
  UpdateUser,
  ViewUser,
  Events,
  AddEvent,
  UpdateEvent,
  ViewEvent,
  SettingProfile,
  SettingPrivacy,
  Forbidden,
} from './pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/broadcasts" element={<Broadcasts />}></Route>
          <Route path="/messages" element={<Messages />}></Route>
          <Route
            path="/messages/update/:id"
            element={<UpdateMessage />}
          >
          </Route>
          <Route path="/archives" element={<Archives />}></Route>
          <Route path="/archives/add" element={<AddArchive />}></Route>
          <Route
            path="/archives/update/:id"
            element={<UpdateArchive />}
          >
          </Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/users/:id" element={<ViewUser />}></Route>
          <Route path="/users/add" element={<AddUser />}></Route>
          <Route path="/users/update/:id" element={<UpdateUser />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/events/:id" element={<ViewEvent />}></Route>
          <Route path="/events/add" element={<AddEvent />}></Route>
          <Route path="/events/update/:id" element={<UpdateEvent />}></Route>
          <Route path="/settings/profile" element={<SettingProfile />}></Route>
          <Route path="/settings/privacy" element={<SettingPrivacy />}></Route>
          <Route path="/forbidden" element={<Forbidden />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
