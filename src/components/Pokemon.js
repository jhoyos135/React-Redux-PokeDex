import React from 'react'

const Pokemon = (props) => {
  
    const { pokemon } = props;

    return (
      <div className="single_poke">
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt=""/>
        <p className="poke_name">{pokemon.name}</p>
      </div>
    )
  

}
export default Pokemon