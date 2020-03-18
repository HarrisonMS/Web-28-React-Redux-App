import React from 'react';
import {connect} from 'react-redux';

const PokeCard = props => {
  console.log('inpokecard',props)
  const pokemon = props.pokemon[props.i];
  return (
    <div className='pokeCardWrapper'>
      {console.log('************',pokemon)}
      <div className='pokeCardDiv'>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.imageUrl} ></img>
        {pokemon.types ? <p>Type: {pokemon.types}</p> : ''}
        {pokemon.subtype ? <p>Sub Type: {pokemon.subtype}</p> : ''}
        {pokemon.rarity ? <p>Rarity: {pokemon.rarity}</p> : ''}
  
        
      </div>
    </div>
  )
}
const mapStatetoProps = state => {
  return {
      pokemon: state.pokemon
  }
}
export default connect(mapStatetoProps,{})(PokeCard);