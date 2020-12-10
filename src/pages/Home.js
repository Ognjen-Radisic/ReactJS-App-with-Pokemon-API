import React from 'react'

import Pagination from '../components/Pagination'
import PokemonList from '../components/PokemonList'

const Home = () => {
  return (
    <main>
      <Pagination />
      <PokemonList />
      <div style={{ marginTop: '100rem' }}>hello</div>
    </main>
  )
}

export default Home
