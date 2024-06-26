import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css";

export const Header = () => {
  return (
    <header className='header'>
        <div className='container'>
        <nav className='menu'>
        <h1>Our Products</h1>

            <ul className='menu_links'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/'>Technology</Link>
                </li>
                <li>
                    <Link to='/'>Food</Link>
                </li>
            </ul>
        </nav>
        </div>
    </header>
  )
}
