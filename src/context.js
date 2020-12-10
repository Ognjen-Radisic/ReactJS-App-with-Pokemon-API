import React, { useState, useContext, useEffect } from 'react'

const url = 'https://pokeapi.co/api/v2/pokemon'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [pokeListURL, setPokeListURL] = useState([])
  const [prevPage, setPrevPage] = useState(null)
  const [nextPage, setNextPage] = useState(null)

  const fetchPokemons = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
      if (data) {
        const newPokeListURL = data.results.map((item) => {
          return item.url
        })
        setPokeListURL(newPokeListURL)
      } else {
        setPokeListURL([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPokemons()
  }, [])

  return (
    <AppContext.Provider value={{ loading, pokeListURL }}>
      {children}
    </AppContext.Provider>
  )
}

//create custom hook for simplicity reasons

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }
