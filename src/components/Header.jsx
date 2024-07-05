import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

export const Header = () => {
  return (
     <nav id='home'>
        <h1>TechXpert</h1>
        <main>
            <HashLink to={"/#Home"}>Home</HashLink>
            <Link to={"/contact"}>Contact</Link>
            <HashLink to={"/#about"}>About</HashLink>
            <HashLink to={"/#brands"}>Brands</HashLink>
            <Link to={"/services"}>Services</Link>
        </main>
     </nav>
  )
}
