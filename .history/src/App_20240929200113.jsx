import './App.css'

import { Outlet } from 'react-router-dom';


function App() {
  return (
      <div className='App'>
        <p>Nav</p>
        <h1>React Router</h1>
        <Outlet/>
    </div>
  )
}

export default App
