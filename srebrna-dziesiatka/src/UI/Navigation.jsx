import React, {useState} from 'react'
import { Link, useNavigate } from "react-router-dom";

export default function Navigation({onToggleMenu}) {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => {
        const newCheckedState = !isChecked;
        setIsChecked(newCheckedState);
        onToggleMenu(newCheckedState);
      };

      const closeMenu = () => {
        setIsChecked(false);
        onToggleMenu(false);
      };

  return (
    <div className="navigation">
        <div className="navigation__logo"><img  className="navigation__logo--img" src="./logo-black.png"/></div>
        <nav className="navigation__overlay">
        <button
        className="navigation__hamburger"
        aria-label="Toggle Menu"
        onClick={toggleCheckbox}
        aria-pressed={isChecked}
      >
        {!isChecked ? (
          <svg className="navigation__hamburger-open">
            <use xlinkHref="./hamburger/sprite.svg#burger"></use>
          </svg>
        ) : (
          <svg className="navigation__hamburger-close">
            <use xlinkHref="./hamburger/sprite.svg#cross"></use>
          </svg>
        )}
      </button>
            <ul className={`navigation__list ${isChecked ? "is-open" : ""}`}>
                <li>
                    <Link to='/home'  className="navigation__link" onClick={closeMenu}>Home</Link>
                </li>
                <li>
                    <Link to='/news'  className="navigation__link" onClick={closeMenu}>Aktualności</Link>
                </li>
                <li>
                <Link to={{ pathname: "/", hash: "#about-us" }}
                    className="navigation__link"
                    onClick={closeMenu}   
                 >O nas</Link>
                </li>
                <li>
                    <Link to='/runs'  className="navigation__link" onClick={closeMenu}>Biegi</Link>
                </li>
                <li>
                    <Link to='/registration'  className="navigation__link" onClick={closeMenu}>Zapisy</Link>
                </li>
            </ul>
            
        </nav>
      
    </div>
  )
}

