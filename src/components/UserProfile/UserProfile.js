import React from 'react'
import classes from './UserProfile.module.css';
import Mab from '../../asset/mab1.jpg';

const UserProfile = () => {
    return (
        <div className={classes.UserProfile}>
             <form action="">
                <input type="text" placeholder='first name'/>
                <input type="text" placeholder='enter last name'/>
                <input type="text" placeholder='enter email'/>
                <input type="text" placeholder='enter password'/>
                {/* <button>EDIT</button> */}
                <button>UPDATE</button>
            </form>  
            <img src={Mab} className={classes.Mab} alt=""/>
        </div>
    )
}
export default UserProfile;