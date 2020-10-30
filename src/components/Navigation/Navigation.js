import React, { useState } from 'react'
import classes from './Navigation.module.css';
import Logo from '../../asset/logo1.png'
import Sidebar from '../Sidebar/Sidebar';

const Navigation = () => {
const [sideBar, setSidebar] = useState(false)

const handleToggle = ()=> {
    setSidebar(!sideBar)
}

const renderNav = ()=> {
    let nav = null
    if (sideBar) {
        nav = (
        //     <div className={classes.SideBar}>
        //     <div className={classes.Log}>
        //         <div className={classes.Signup}>signup</div>
        //         <div className={classes.Signin}>signin</div>
        //         <div className={classes.Signout}>signout</div>
        //     </div>
        //     <div className={classes.Logg}></div>
        //   </div> 
            <Sidebar />
        )
    }
    return nav;
}
    return (
        <>
          <nav className={classes.Navbar}>
              <div className={classes.Nav}>
              <div className={classes.Toggle}>
                  <div className={classes.Logo}>
                      <img src={Logo} alt=""/>
                  </div>
                  <div className={classes.Tog} onClick={handleToggle}>
                    <div className={classes.ToggleBar}></div>
                    <div className={classes.ToggleBar}></div>
                    <div className={classes.ToggleBar}></div>
                  </div>

              </div>
              <div className={classes.Search}>
                  <input type="text" placeholder='search...'/>
              </div>
              <div className={classes.Sign}>
                  <div className={classes.Signup}>signup</div>
                  <div className={classes.Signin}>signin</div>
                  <div className={classes.Welcome}>Hi Tarik</div>
              </div>
              <div className={classes.Cart}>
                <i className="fas fa-shopping-cart"></i>
              </div>

              </div>
          </nav> 
            {renderNav()}
        </>
    )
}

export default Navigation;