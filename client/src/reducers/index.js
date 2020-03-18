import {LOAD_START,LOAD_SUCCESS,LOAD_FAILURE} from '../actions';

const initState = {
    pokemon: [],
    filteredList: [],
    error: '',
    loading: false
};

export default (state = initState,action) => {
  switch(action.type) {
    case LOAD_START:
      console.log('API Called');
      return {
          ...state,
          error: '',
          loading: true
      }
    case LOAD_SUCCESS:
      console.log('Data Loaded');
      return {
          ...state,
          error: '',
          loading: false,
          pokemon: action.payload
      }
    case LOAD_FAILURE:
      return {
          ...state,
          error: action.payload,
          loading: false
      }
    default:
        return state;
  }
}