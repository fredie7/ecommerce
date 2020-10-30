import React from 'react'
import classes from './Sidebar.module.css';

const Sidebar = props => {
    return (
        <div>
            <div className={classes.SideBar}>
                <div className={classes.Log}>
                    <div className={classes.Signup}>HiTarik</div>
                    <div className={classes.Signin}>signin</div>
                    <div className={classes.Signout}>signout</div>
                    <div className={classes.Signout}>signout</div>
                </div>
                <div className={classes.Logg}></div>
            </div> 
        </div>
    )
}
export default Sidebar;