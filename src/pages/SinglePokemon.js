import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from '../components/Loading'
import colorTypes from '../components/colorTypes'

const url = 'https://pokeapi.co/api/v2/pokemon/'

const SinglePokemon = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [pokemon, setPokemon] = useState(null)

  console.log(id)
  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}${id}`)
      const data = await response.json()
      if (data) {
        setPokemon(data)
      } else {
        setPokemon(null)
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [id])

  if (loading) {
    return <Loading />
  }
  if (!pokemon) {
    return <h2>No pokemon to display{console.log('QQQQ')}</h2>
  }
  //destructuring of pokemon value
  console.log(pokemon)
  const { abilities, height, weight, types, stats, name, sprites } = pokemon

  const stats_values = {
    hp: stats[0].base_stat,
    attack: stats[1].base_stat,
    defense: stats[2].base_stat,
    speed: stats[5].base_stat,
  }
  return (
    <main>
      <section className='section center'>
        <div className='mar-bottom'>
          <Link to='/' className='btn margin-zero'>
            back to pokemons
          </Link>
        </div>
        <div className='single-pokemon'>
          <img
            src={sprites.other.dream_world.front_default}
            alt={name}
            className='resizer'
          />
          <div className='single-pokemon-info'>
            <h1 className='center capitalize'>{name}</h1>
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
            <div className='single-row'>
              <p>
                <span className='text-background'>Height: </span>
                {(height * 0.1).toFixed(2)}m
              </p>
              <p>
                <span className='text-background'>Weight: </span>
                {(weight * 0.1).toFixed(1)}kg
              </p>
            </div>
            <div className='single-row'>
              <p>
                <span
                  className='text-background'
                  style={{ backgroundColor: `${colorTypes.hp}` }}
                >
                  HP:{' '}
                </span>
                {stats_values.hp}
              </p>
              <p>
                <span
                  className='text-background'
                  style={{ backgroundColor: `${colorTypes.speed}` }}
                >
                  Speed:{' '}
                </span>
                {stats_values.speed}
              </p>
            </div>
            <div className='single-row'>
              <p>
                <span
                  className='text-background'
                  style={{ backgroundColor: `${colorTypes.attack}` }}
                >
                  Attack:{' '}
                </span>
                {stats_values.attack}
              </p>
              <p>
                <span
                  className='text-background'
                  style={{ backgroundColor: `${colorTypes.defense}` }}
                >
                  Defense:{' '}
                </span>
                {stats_values.defense}
              </p>
            </div>
            <div className='single-row'>
              <p>
                <span className='text-background'>Abilities: </span>

                {abilities.map((item, index) => {
                  return <a key={index}>*{item.ability.name}* </a>
                })}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default SinglePokemon
