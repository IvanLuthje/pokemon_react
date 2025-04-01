import React from 'react';
import { Link } from 'react-router-dom';

import '../../css/styles.css'
const Header = (props) => {
    return(
      <header>
        {/* <div class="imagen"> <Link to="/"><img src={require('../../img/International_Pokémon_logo.svg.png')} /></Link></div> */}
        <div class="imagen"><img src={require('../../img/International_Pokémon_logo.svg.png')} /></div>
      </header>
    );
}

export default Header;