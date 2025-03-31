import React from "react";
import { Link } from "react-router-dom";
import '../../css/styles.css'



const Modal = ({ pokemon, closeModal }) => {
    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <h3>Descripción:</h3>
          <p>{pokemon.base_experience} puntos de experiencia base</p>
          <h4>Tipos:</h4>
          <ul>
            {pokemon.types.map((type) => (
              <li key={type.type.name}>{type.type.name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
export default Modal;