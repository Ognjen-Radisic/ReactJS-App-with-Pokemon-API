import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGlobalContext } from '../context'
import Loading from '../components/Loading'

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
  return (
    <div>
      <h1>Hello{console.log('FFF')}</h1>
      <h1>{name}</h1>
      <h1>{height}</h1>
      <h1>{weight}</h1>
    </div>
  )
}

export default SinglePokemon
