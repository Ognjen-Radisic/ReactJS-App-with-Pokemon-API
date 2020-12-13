import React, { useEffect, useState } from 'react'
import pokeball from '../pokemon.svg'
import './components.css'
import { Link } from 'react-router-dom'

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
        <Link to='/'>
          <h1>
            P
            <span>
              <img src={pokeball} alt='o' />
            </span>
            kem
            <span>
              <img src={pokeball} alt='o' />
            </span>
            ns
          </h1>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
