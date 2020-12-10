import React, { useState, useContext, useEffect } from 'react'

const url = 'https://pokeapi.co/api/v2/pokemon'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [pokeList, setPokeList] = useState([])
  const [prevPage, setPrevPage] = useState(null)
  const [nextPage, setNextPage] = useState(null)

  const fetchPokemons = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      if (data) {
        const newPokeList = await Promise.all(
          data.results.map((item) => {
            const singlePokemonData = fetchSinglePokemon(item.url)
            if (singlePokemonData) {
              return singlePokemonData
            }
          })
        )

        setPokeList(newPokeList)
      } else {
        setPokeList([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  const fetchSinglePokemon = async (given_url) => {
    const response = await fetch(given_url)
    const data = await response.json()
    if (data) {
      return data
    }
  }

  useEffect(() => {
    fetchPokemons()
  }, [])
  return (
    <AppContext.Provider value={{ loading, pokeList }}>
      {children}
    </AppContext.Provider>
  )
}

//create custom hook for simplicity reasons

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }
