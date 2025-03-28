import React from 'react'
import { Link, useNavigate } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="navigation">
        <div className="navigation__logo">logo</div>
        <nav className="navigation__overlay">
            <ul>
                <li>
                    <Link to='/home'  className="navigation__link">Home</Link>
                </li>
                <li>
                    <Link to='/news'  className="navigation__link">Aktualności</Link>
                </li>
                <li>
                    <Link to='/'  className="navigation__link">O Nas</Link>
                </li>
                <li>
                    <Link to='/runs'  className="navigation__link">Biegi</Link>
                </li>
                <li>
                    <Link to='/registration'  className="navigation__link">Zapisy</Link>
                </li>
            </ul>
            
        </nav>
      
    </div>
  )
}
