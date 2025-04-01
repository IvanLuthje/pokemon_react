// src/Index.js
import '../css/styles.css'

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Index = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    // Fetching the first 20 Pokémon
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then((response) => {
        const pokemonUrls = response.data.results;
        // Fetching detailed data for each Pokémon
        const fetchPokemons = pokemonUrls.map((poke) =>
          axios.get(poke.url)
        );

        // Waiting for all Pokémon data to be fetched
        Promise.all(fetchPokemons)
          .then((results) => {
            const pokemonsData = results.map((result) => result.data);
            setPokemonList(pokemonsData);
           
          })
          .catch((error) => {
            console.error('Error al traer los datos de pokemon', error);
           
          });
      })
      .catch((error) => {
        console.error('Se produjo un error en el listado de Pokemon', error);
       
      });
  }, []);



  return (
    <div className="Index">
      <h2>Pokemones Destacados</h2>
      <div className="pokemon-info">
        {pokemonList.map((poke) => (
          <div key={poke.id} className="pokemon-card">
           
            <img
              src={poke.sprites.front_default}
              alt={poke.name}
              className="pokemon-image"
            />

                <button class="compartir" ><i class='fa fa-share-alt' aria-hidden='true'></i></button>
                <button class="descripcion"><i class='fa fa-binoculars' aria-hidden='true'></i></button>
                <button class="favoritos"><i class='fa fa-heart' aria-hidden='true'></i></button>

            <h3>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</h3>
            <div className="pokemon-types">
              {poke.types.map((type) => (
                <span key={type.type.name} className={`type ${type.type.name}`}>
                  {type.type.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;