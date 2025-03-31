import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Nav from "./components/layout/Nav";
import Index from "./pokemon";
import Pokedex from "./pokemon/pokedex";

function App(){
    return(
        <div className="Pokemon">
        <Header></Header>
        <Nav />
            <Router>
                <Routes>
                    <Route path="/" exact element={<Index />}></Route>
                    <Route path="/pokedex" exact element={<Pokedex />}></Route>
                </Routes>
            </Router>
        
        <Footer />
        </div>

    );
  
}


export default App;