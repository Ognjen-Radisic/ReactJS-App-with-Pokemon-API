import React from 'react'

import Pagination from '../components/Pagination'
import PokemonList from '../components/PokemonList'

const Home = () => {
  return (
    <main>
      <Pagination />
      <PokemonList />
      <Pagination />
    </main>
  )
}

export default Home
