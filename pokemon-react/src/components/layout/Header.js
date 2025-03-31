import react from "react";
import { Link } from "react-router-dom";
import '../../css/styles.css'


const Header =() => {
    return(
        <header>
            <img src={require('../../img/International_Pokémon_logo.svg.png')}></img>
        </header>
       
            // <div> <Link to="/"><img src={require('../../img/International_Pokémon_logo.svg.png')}></img></Link></div>
      
    );
}

export default Header;