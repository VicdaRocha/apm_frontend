import { Routes, Route } from "react-router-dom";
import SignUp from "./Cadastro/SignUp";
import SignIn from "./Entrar/SignIn";
import Home from "./Home";
import Create from "./Colaboradores/Create/CreateColaborador";
import About from "./About"

const AppContent = () => {
    return(
      <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cadastro" element={<SignUp />} />
              <Route path="/entrar" element={<SignIn />} />
              <Route path="/create" element={<Create />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<h2>404 - Page Not Found</h2>} />
            </Routes>
    )
  }

export default AppContent;