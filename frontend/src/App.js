import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginForm from './Components/LoginForm';
import Otp from './Components/Otp';
import UserDetails from './Pages/UserDetails';



import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<LoginForm />} />
          <Route path='/validate-otp' element = {<Otp />} />
          <Route path='/user-details' element={<UserDetails />} />
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
