import React from 'react';
import classes from './Signup.module.css';
import Mab from '../../asset/mab1.jpg';

const Signup = () => {
    return (
        <div className={classes.Signup}>
            <form action="">
                <input type="text" placeholder='enter first name'/>
                <input type="text" placeholder='enter last name'/>
                <input type="text" placeholder='enter email'/>
                <input type="text" placeholder='enter password'/>
                <button>sign up</button>
            </form>
            <img src={Mab} className={classes.Mab} alt=""/>
        </div>
    )
}
export default Signup;