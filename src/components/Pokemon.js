import React, { PureComponent } from 'react'

class Pokemon extends PureComponent {
  render() {
    const { pokemon } = this.props;

    return (
      <div className="single_poke">
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt=""/>
        <p className="poke_name">{pokemon.name}</p>
      </div>
    )
  }

}
export default Pokemon