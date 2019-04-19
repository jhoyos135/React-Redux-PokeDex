import React from 'react'

const Pokemon = (props) => {

  const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

  const padToThree = (num) => {
    return num <= 999 ? `00${num}`.slice(-3) : num
  }
  
  const { pokemon } = props;
  let imgSrc = `${POKE_API}${padToThree(pokemon.id)}.png`

    return (
      <div className="single_poke">
        <img src={imgSrc} alt=""/>
        <p className="poke_name">{pokemon.name}</p>
      </div>
    )
  

}
export default Pokemon