import React, { useState, useContext } from 'react'

const url = 'https://pokeapi.co/api/v2/pokemon'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  return (
    <AppContext.Provider value={{ loading }}>{children}</AppContext.Provider>
  )
}

//create custom hook for simplicity reasons

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }
