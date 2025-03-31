import react from "react";
import { Link } from "react-router-dom";
import '../../css/styles.css'

const Nav =() => {
    return(
        <nav>
            <ul class="menu">
            <li>Inicio</li>
            <li>Pokedex</li>
            {/* <li><a href="pokedex.html">Pokedex</a></li>
            <li><a href="historial.html">Historial</a></li>
            <li><a href="contacto.html">Contacto</a></li>
            <li><a href="compartir.html">Compartir</a></li> */}
            </ul>    
        </nav>
     
    );
}

export default Nav;