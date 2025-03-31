import React from 'react';
import '../../css/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSmile } from '@fortawesome/free-regular-svg-icons';
const Footer =() => {
    return(
        <footer>
        <p>&copy; 2025 Pokémon</p>
        <hr class="solid"></hr>

        <div className="redes">
            <a href="https://www.facebook.com/PokemonOficialLatAm" target="_blank" className="icono_redes">
                <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.instagram.com/pokemonlatam/" target="_blank" className="icono_redes">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.youtube.com/@PokemonLATAM" target="_blank" className="icono_redes">
                <FontAwesomeIcon icon={faYoutube} />
            </a>
        </div>
    </footer>
    )
}


export default Footer;