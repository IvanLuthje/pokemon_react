// src/Pokedex.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from '../components/layout/Modal'; // Asegúrate de crear el componente Modal

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Obtener los primeros 10 Pokémon
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then((response) => {
        const pokemonUrls = response.data.results;
        const fetchPokemons = pokemonUrls.map((poke) =>
          axios.get(poke.url)
        );

        Promise.all(fetchPokemons)
          .then((results) => {
            const pokemonsData = results.map((result) => result.data);
            setPokemonList(pokemonsData);
            setLoading(false);
          })
          .catch((error) => {
            console.error('Error fetching Pokémon data', error);
            setLoading(false);
          });
      })
      .catch((error) => {
        console.error('Error fetching Pokémon list', error);
        setLoading(false);
      });
  }, []);

  const handlePokemonClick = (pokemon) => {
    setSelectedPokemon(pokemon);
    setShowModal(true); // Mostrar el modal con los detalles del Pokémon
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPokemon(null); // Limpiar el Pokémon seleccionado al cerrar el modal
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Pokedex</h1>
      <div className="pokemon-list">
        {pokemonList.map((poke) => (
          <div
            key={poke.id}
            className="pokemon-card"
            onClick={() => handlePokemonClick(poke)} // Al hacer clic, mostramos el modal
          >
            <h2>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</h2>
            <img src={poke.sprites.front_default} alt={poke.name} />
          </div>
        ))}
      </div>

      {showModal && selectedPokemon && (
        <Modal pokemon={selectedPokemon} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Pokedex;