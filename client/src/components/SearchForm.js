// import React, { useState } from 'react';
// import {connect} from 'react-redux';

// import FilteredList from './FilteredList';
// import { loadPokemon } from '../actions';

// const SearchForm = ({ loadPokemon }) => {
  
//   const [searchFields, setSearchFields ] = useState({
//     name: '',
//     types: ''
//   })
  
//   const [ errors, setErrors ] = useState({
//     name: '',
//     types: ''
//   })
  
//   const handleChange = event => {
//     setSearchFields({ ...searchFields, [event.target.name]: event.target.value });
//     setErrors({...errors, [event.target.name]: ''});
//   }

//   const handleSubmit = event => {
//     event.preventDefault();
//     if (!searchFields.name || !searchFields.types) {
//         setErrors({ name: searchFields.name ? '' : 'name or type required', types: searchFields.types ? '' : 'name or type required'});
//         return;
//     }
//     loadPokemon(searchFields);
//     setSearchFields({name: '', types: ''});
//     setErrors({name: '', types: ''});
//   }
//   return (
//     <form>
//       <input label='Pokemon' name='name' error={Boolean(errors.name)} helperText={errors.name}value={searchFields.name} onChange={handleChange} />
//       <input label='Pokemon type' name='types' error={Boolean(errors.types)} helperText={errors.types}value={searchFields.types} onChange={handleChange} />
//       <button onClick={handleSubmit}>Search</button>
//     </form>
//   )
// }

// const mapStatetoProps = state => {
//   return {
//       filteredList: state.loadPokemon
//   }
// }
// export default connect(mapStatetoProps,{})(SearchForm);