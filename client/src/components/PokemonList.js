import React from "react";
import { connect } from "react-redux";
import { fetchPokemon } from "../actions";
import PokemonCard from './PokemonCard';
import { loadPokemon } from '../actions';



const PokemonList = (props) => {
  console.log("PokemonList", props);
  if (!props.pokemon.length)
  props.loadPokemon()
  return (
    <div className='pokemonListDiv'>
     {props.pokemon.map((poke, index) =>  <PokemonCard key={index} i={index} pokemon={poke} />)}
    </div>
  );
}

const mapStatetoProps = state => {
  return {
      pokemon: state.pokemon
  }
}
export default connect(mapStatetoProps,{loadPokemon})(PokemonList);
