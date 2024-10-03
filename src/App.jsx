import { BrowserRouter,Routes,Route } from "react-router-dom"

//componente
import Header from "./Componente/Topo/Header"
import Footer from "./Componente/Footer/Footer"
// pages
import Home from "./Paginas/Home/Home"
import Projetos from "./Paginas/Projetos/Projetos"


function App() {

  return (
    <>
      <BrowserRouter>
    
           <Header/>
          <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/projeto" element = {<Projetos/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
