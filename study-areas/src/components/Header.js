import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div>
        <div className="header">
            <h1 className="logo">Study Areas</h1>
            <div className="links">
                <Link to="/" className='links'>Catalog</Link>
                <Link to="/recommender" className='links' >Recommendations</Link>
                <Link to="/profile" className='links' >Profile</Link>
            </div>
        </div>
        <hr className='divider'></hr>
    </div>
    )
}

export default Header