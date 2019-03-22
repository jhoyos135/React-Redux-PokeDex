import axios from 'axios';
import {
    GET_POKEMON_REQUEST, 
    GET_POKEMON_SUCCESS,
    GET_POKEMON_FAIL, 
    SET_POKEMON, 
    FILTER_POKEMON} from '../reducers/types';

    let setPokemons = (data) => {
      const pokemons = data.results.map(pokemon => {
        let { url } = pokemon;
        pokemon.id = url.substring(34, url.length - 1)
        pokemon.name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
        // console.log(pokemon)
        return pokemon;
      })
      return {
        type: SET_POKEMON,
        payload: pokemons
      }
    }


    
    export const getPokemons = () => async dispatch => {
        
      const res = await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807');
      const data = res.data
      
      dispatch({
        type: GET_POKEMON_REQUEST,
        payload: res.data
      })
      dispatch({
        type: GET_POKEMON_SUCCESS
      })
      dispatch(setPokemons(data));
      dispatch(filterPokemons())

      }

      export const filterPokemons = (searchString = '') => (dispatch, initialstate) => {

        const displayedPokemons = initialstate().pokemons.pokemons.filter(pokemon => {
          return pokemon.name.toLowerCase().includes(searchString.toLowerCase())
         
        });
       

        dispatch({
          type: FILTER_POKEMON,
          payload: displayedPokemons
        })
      }