import './App.css'

import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'


function App() {
  return (
      <div className='App'>
        <Navbar />
        <h1></h1>
        <Outlet />
        <Footer />
        
    </div>
  );
}

export default App;
