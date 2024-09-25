import { useState } from 'react'

function App() {
  
  const [title, setTitle] = useState("Ateliê Ponto Mágico");

  const handleButtonClick = () => {
    setTitle(title === "Ateliê Ponto Mágico" ? "Seja Bem Vindo!" : "Ateliê Ponto Mágico");
  }

  return(
    <div className="App">
      <h1>{title}</h1>
      <button onClick={handleButtonClick}>Click</button>
    </div>
  )
}

export default App;
