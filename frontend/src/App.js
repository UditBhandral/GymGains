import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginForm from './Components/LoginForm';
import Otp from './Components/Otp';
import UserDetails from './Pages/UserDetails';
import UserDashboard from './Pages/UserDashboard';
import TrackWorkout from './Pages/TrackWorkout';
import CreateWorkout from './Pages/CreateWorkout';


import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<LoginForm />} />
          <Route path='/validate-otp' element = {<Otp />} />
          <Route path='/user-details' element={<UserDetails />} />
          <Route path='/user-dashboard' element = {<UserDashboard />} />
          <Route path='/track-workout' element = {<TrackWorkout />} />
          <Route path='/create-workout' element = {<CreateWorkout />} />
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
