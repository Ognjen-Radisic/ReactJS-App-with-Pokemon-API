import React from 'react'
import { useGlobalContext } from '../context'

const Pagination = () => {
  const { loadNextPage, loadPrevPage } = useGlobalContext()

  return (
    <section className='section'>
      <h2 className='section-title'>browse through your favourite pokemons</h2>
      <div className='pagination-buttons'>
        <button className='pagi-btn' type='button' onClick={loadPrevPage}>
          Previous Page
        </button>
        <button className='pagi-btn' type='button' onClick={loadNextPage}>
          Next Page
        </button>
      </div>
    </section>
  )
}

export default Pagination
