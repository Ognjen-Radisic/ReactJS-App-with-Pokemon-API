import React from 'react'
import { useGlobalContext } from '../context'

const PokemonList = () => {
  const { loading, pokeListURL } = useGlobalContext()

  if (loading) {
    return (
      <section>
        <h2>LOADING...</h2>
      </section>
    )
  }

  return <section>{pokeListURL.map((item) => console.log(item))}</section>
}

export default PokemonList
