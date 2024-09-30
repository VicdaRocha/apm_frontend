// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import SignUp from "./components/Cadastro/SignUp";
import SignIn from "./components/Entrar/SignIn";
import Home from "./components/Home";
import Create from "./components/Colaboradores/Create/CreateColaborador";

function App() {
  const drawerWidth: number = 200;

  return (
    <div className="App">
      <Navbar
        drawerWidth={drawerWidth}
        content={
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<SignUp />} />
            <Route path="/entrar" element={<SignIn />} />
            <Route path="/home" element={<Home />} />
            <Route path="/colaboradores/novo" element={<Create />} />
            <Route path="*" element={<h2>404 - Page Not Found</h2>} />
          </Routes>
        }
      />
    </div>
  );
}

export default App;
