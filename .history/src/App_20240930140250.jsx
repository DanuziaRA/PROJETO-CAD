import './App.css'

import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from 


function App() {
  return (
      <div className='App'>
        <Navbar />
        <h1></h1>
        <Outlet />
    </div>
  );
}

export default App;
