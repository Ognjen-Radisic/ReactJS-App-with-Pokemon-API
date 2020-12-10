import React from 'react'

const Pokemon = ({ id, name, sprites, types }) => {
  return (
    <article className='pokemon'>
      <div className='img-container'>
        <img
          src={sprites.other.dream_world.front_default}
          alt={name}
          className='resizer'
        />
      </div>
      <div className='mid-section'>
        <h2>{name}</h2>
      </div>
      <div className='pokemon-footer'>
        {types.map((item) => {
          return <h4>{item.type.name}</h4>
        })}
      </div>
    </article>
  )
}

export default Pokemon
