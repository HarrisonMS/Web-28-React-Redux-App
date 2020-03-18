import React from 'react';
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import  reducer  from './reducers/index';
import thunk from "redux-thunk";
import './App.css';
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);
console.log(reducer)
function App(props) {
  console.log(getState)
  return (
    <div className="App">
      <h1>Pokemon Search</h1>
    </div>
  );
}

export default App;
