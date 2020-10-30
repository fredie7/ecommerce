import React, { useState, useEffect } from 'react'
import classes from './Signin.module.css';
import signinApi from '../../apis/signinApi'
import Mab from '../../asset/mab1.jpg';
import axios from 'axios'

const Signin = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

        const handleSubmit = async e=> {
            e.preventDefault()
           try {
            const response = await axios.post('http://localhost:5001/api/v1/auth/signin', {
                firstName,
                lastName,
            })
            console.log(response)
           } catch (error) {
               console.log(error)
           }
        
            // const res = await fetch('http://localhost:5001/api/v1/auth/signin', {
            //     method: 'POST',
            //     headers: {
            //         'content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({
            //         firstName,
            //         lastName
            //     })
            // })
            // const response = await res.json()
            // console.log(response)
        }

    return (
        <div className={classes.Signin}>
            <form action="">
                <input type="text" onChange={e=> setFirstName(e.target.value)} value={firstName} placeholder='enter email'/>
                <input type="text" onChange={e=> setLastName(e.target.value)} value={lastName} placeholder='enter password'/>
                <button onClick={handleSubmit}>sign in</button>
            </form>
            <img src={Mab} className={classes.Mab} alt=""/>
        </div>
    )
}

export default Signin;
