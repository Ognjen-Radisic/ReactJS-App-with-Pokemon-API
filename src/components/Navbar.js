import React, { useEffect, useState } from 'react'
import pokeball from '../pokemon.svg'
import './components.css'

const Navbar = () => {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 50)
    })
  }, [])

  return (
    <nav className={`navbar ${scroll && 'white'}`}>
      <div className='nav-center'>
        <h1>
          P
          <span>
            <img src={pokeball} />
          </span>
          kem
          <span>
            <img src={pokeball} />
          </span>
          ns
        </h1>
      </div>
    </nav>
  )
}

export default Navbar
