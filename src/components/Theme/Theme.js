import React from 'react';
import classes from './Theme.module.css';
import Themeimg from '../../asset/toma2.jpg'

const Theme = props => {
    return (
        <div className={classes.Theme}>
           <img src={Themeimg} alt=""/>
        </div>
    )
}

export default Theme