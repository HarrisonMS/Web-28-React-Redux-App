import axios from 'axios';

export const LOAD_START = 'LOAD_START';
export const LOAD_SUCCESS = 'LOAD_SUCCESS';
export const LOAD_FAILURE = 'LOAD_FAILURE';

// export const loadPokemon = () => dispatch => {
//     dispatch({type:LOAD_START});
//     axios.get('https://api.pokemontcg.io/v1/cards')
//         .then(res => {
//             dispatch({type:LOAD_SUCCESS,payload:res.data.cards})
//         })
//         .catch(err => dispatch({type:LOAD_FAILURE,payload:err}))
// }
export const loadPokemon = (search) => dispatch => {
  dispatch({type:LOAD_START});
  axios.get('https://api.pokemontcg.io/v1/cards')
      .then(res => {
          dispatch({type:LOAD_SUCCESS,payload:res.data.cards})
      })
      .catch(err => dispatch({type:LOAD_FAILURE,payload:err}))
}

// export const loadPokemon = () => dispatch => {
//   dispatch({type:LOAD_START});
//   axios.get('https://pokeapi.co/api/v2/pokemon-species/')
//       .then(res => {
//           dispatch({type:LOAD_SUCCESS,payload:res.data.results})
//       })
//       .catch(err => dispatch({type:LOAD_FAILURE,payload:err}))
// }

