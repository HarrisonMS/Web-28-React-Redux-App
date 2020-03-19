import React from 'react';
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import  reducer  from './reducers/index';
import thunk from "redux-thunk";
import './App.css';
import { composeWithDevTools } from "redux-devtools-extension";
import PokemonList from './components/PokemonList';
// import SearchForm from './components/SearchForm';


export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);
console.log(reducer)
function App() {
  return (
    <div className="App">
      <h1 className="title">Pokemon</h1>
      {/* <SearchForm /> */}
      <PokemonList/>
    </div>
  );
}

export default App;
