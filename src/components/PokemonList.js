import React from 'react'
import { useGlobalContext } from '../context'
import Loading from './Loading'
import Pokemon from './Pokemon'

const PokemonList = () => {
  const { loading, pokeList } = useGlobalContext()

  if (loading) {
    return <Loading />
  }

  if (pokeList.length < 1) {
    return <h2 className='section-title'>No Pokemons for displaying</h2>
  }
  console.log(pokeList)
  return (
    <section className='section'>
      <div className='pokemons-center'>
        {pokeList.map((pokemon) => {
          return <Pokemon key={pokemon.id} {...pokemon} />
        })}
      </div>
    </section>
  )
}

export default PokemonList
