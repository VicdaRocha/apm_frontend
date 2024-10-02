// import { useState } from 'react'
import AppContent from './components/AppContent'
import Navbar from "./components/Nav/Navbar";


function App() {
  const drawerWidth: number = 200;

  return (
    <div className="App">
      <Navbar
        drawerWidth={drawerWidth}
        content={ <AppContent/> }
      />
    </div>
  );
}

export default App;
