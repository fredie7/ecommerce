import React, { useState } from 'react'
import classes from './Navigation.module.css';

const Navigation = () => {
    const [openNav, setNav] = useState(false)

    const handleToggle = ()=> {
        setNav(!openNav)
    }

    const renderNav = ()=> {
        let open = null
        if (openNav) {
            open = (
                <div className={classes.Overlay}>
                <div className={classes.Signup}>sign up</div>
                <div className={classes.Signin}>sign in</div>
                <div className={classes.Signout}>sign out</div>
                </div>
            )
        }
        return open;
    }

    return (
        <>
          <nav className={classes.Navbar}>
              <div className={classes.Toggle} onClick={handleToggle}>
                <i className="fas fa-bars fa-lg"></i>
              </div>

            <div className={classes.Brand}>
                <div className={classes.Logo}>logo</div>
                <div className={classes.CompanyName}>company name</div>
            </div>
            <div className={classes.SearchProduct}>
                <input type="search" placeholder='search product....'/>
            </div>
            <ul className={classes.NavTools}>
                <li><a href="#">sign up</a></li>
                <li><a href="#">sign in</a></li>
                <li><a href="#">sign out</a></li>
            </ul>
            <div className={classes.Cart}>
                <i class="fas fa-shopping-cart"></i>
            </div>
            {renderNav()}
          </nav>  
        </>
    )
}

export default Navigation;