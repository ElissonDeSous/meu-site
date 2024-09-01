import { BrowserRouter,Routes,Route } from "react-router-dom"

//componente
import Header from "./Componente/Topo/Header"

// pages
import Home from "./Paginas/Home/Home"

function App() {

  return (
    <>
      <BrowserRouter>
    
           <Header/>
          <Routes>
            <Route path="/" element = {<Home/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
