import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Nav from "./components/layout/Nav";
import Index from "./pokemon";
import Pokedex from "./pokemon/pokedex";
import Contacto from "./pokemon/contacto";
import Modal from "./components/layout/Modal"

function App(){
    return(
      <div className="App">
        <Router>
        <Header></Header>
        <Nav/>
        <Routes>
          <Route path="/" exact element={ <Index />}></Route>
          <Route path="/pokedex" exact element={ <Pokedex />}></Route>
          
          <Route path="/contacto" exact element={ <Contacto />}> </Route>
  
  
        </Routes>
  
  
  
         
      
        <Footer/>
        </Router>
      </div>
      
    )
}

export default App;