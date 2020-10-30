import React, { useState } from 'react';
import classes from './Layout.module.css';
import Sidebar from '../Sidebar/Sidebar';


const Layout = props => {
    let [nav, setNav] = useState(true)
    let handleToggle = ()=> {
        setNav(false)
    }
    let ref = ()=> {
        let val = null
        if (nav) {
            val = (
                <Sidebar />
            )
        }
        return val;
    }


    return (
        <div className={classes.Layout} onClick={handleToggle}>
            { props.children }
            {/* {ref()} */}
        </div>
    )
}

export default Layout;