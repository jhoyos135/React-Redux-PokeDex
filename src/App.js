import React, { Component } from 'react';
import { connect } from 'react-redux'
import Pokemon from './components/Pokemon';
import Search from './components/search';
import * as actions from './redux/actions/index'
import './App.css';

class App extends Component {

  state = {
    currentPage: 1,
    pageNum: 9
  };

  handleClick = (e) =>{
      this.setState({
        currentPage: Number(e.target.id)
      })
  }

  componentDidMount() {
    this.props.getPokemons();   
  }

  handleSearch(e) {
    this.props.filterPokemons(e.target.value);
  }
  render() {

    const { displayedPokemons, isFetched, error } = this.props;
    const {currentPage, pageNum} = this.state;

    const indexOfLastTodo = currentPage * pageNum;
    const indexOfFirstTodo = indexOfLastTodo - pageNum;
    const current = displayedPokemons.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderPokemons = current.map((poke, index) => {
      return <Pokemon key={index} pokemon={poke} />
    });

    return (
      <div className="App">
        {error && <div> {error} </div>}
        <Search onChange={this.handleSearch.bind(this)} />
          
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
  }
}

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