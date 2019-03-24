import React, { useState, useEffect, useReducer } from 'react';
import { connect } from 'react-redux'
import Pokemon from './components/Pokemon';
import Search from './components/search';
import * as actions from './redux/actions/index'
import './App.css';

const App = (props) => {
  const { displayedPokemons, isFetched, error, filterPokemons, getPokemons } = props;

  const currentPage = 1;
  const pageNum = 9;
  // const [currentPage, newCurrentPage] = useState(1);
  // const [pageNum, newPageNum] = useState(9);

  useEffect( () => {
   getPokemons();  
  }, []);

 const handleSearch = (e) => {
    filterPokemons(e.target.value);
  }
    const indexOfLastTodo = currentPage * pageNum;
    const indexOfFirstTodo = indexOfLastTodo - pageNum;
    const current = displayedPokemons.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderPokemons = current.map((poke, index) => {
      return <Pokemon key={index} pokemon={poke} />
    });

    return (
      <div className="App">
        {error && <div> {error} </div>}

        <Search onChange={handleSearch} />
          
        {isFetched ? (
          <p> is loading...</p>
        ) : (
          <div>

          <div className='custom_pokemons'>
          {renderPokemons}
          </div>
          </div>
          
        )}

      </div>
    );
  
};

let mapStateToProps = (state) => {
  const {pokemons, displayedPokemons, isFetched, error } = state.pokemons;
  return {
    pokemons,
    displayedPokemons,
    isFetched,
    error
  }
}

export default connect(mapStateToProps, actions)(App);