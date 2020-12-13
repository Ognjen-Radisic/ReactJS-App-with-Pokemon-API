import React from 'react'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './components.css'
import colorTypes from './colorTypes'

const Pokemon = ({ id, name, sprites, types }) => {
  React.useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <article
      data-aos='flip-left'
      data-aos-anchor-placement='top-bottom'
      className='pokemon'
    >
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
        {types.map((item, index) => {
          return (
            <h4
              key={index}
              style={{ backgroundColor: `${colorTypes[item.type.name]}` }}
            >
              {item.type.name}
            </h4>
          )
        })}
      </div>
      <Link to={`/pokemon/${id}`} className='btn'>
        More details..
      </Link>
    </article>
  )
}

export default Pokemon
