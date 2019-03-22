import {
    GET_POKEMON_REQUEST, 
    GET_POKEMON_SUCCESS,
    GET_POKEMON_FAIL, 
    SET_POKEMON, 
    FILTER_POKEMON,
    } from './types'

const initialState = {
    isFetched: false,
    error: null,
    pokemons: [],
    displayedPokemons: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_POKEMON_REQUEST:
        return {
            ...state,
            isFetched: true
        }
        case GET_POKEMON_SUCCESS:
        return {
            ...state,
            isFetched: false
        }
        case GET_POKEMON_FAIL:
        return {
            ...state,
            isFetched: false,
            error: action.payload
        }
        case SET_POKEMON:
        return {
            ...state,
            pokemons: action.payload
        }
        case FILTER_POKEMON:
        return {
            ...state,
            displayedPokemons: action.payload
        }
       
        default:
        return state
    }
}