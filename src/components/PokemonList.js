import React from 'react'
import { useGlobalContext } from '../context'
import Loading from './Loading'

const PokemonList = () => {
  const { loading, pokeList } = useGlobalContext()

  if (loading) {
    return <Loading />
  }

  return (
    <section>
      {pokeList.map((pokemon) => {
        return (
          <article>
            <h1>{pokemon.name}</h1>
          </article>
        )
      })}
    </section>
  )
}

export default PokemonList
