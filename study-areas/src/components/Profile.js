import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './Profile.css'

const Profile = () => {
    let navigate = useNavigate();

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const firstNameHandler = (event) => {
        setFirstName(event.target.value);
    }

    const lastNameHandler = (event) => {
        setLastName(event.target.value);
    }

    const emailHandler = (event) => {
        setEmail(event.target.value);
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value);
    }

    const profileHandler = (event) => {
        const newUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }
        fetch('http://localhost:8080/api/catalog', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        }).then(navigate("../", ({replace: true})))
    }


    return (
        <div className="form">
            <h1 className="title">Profile</h1>
            <label>First Name</label>
            <input onChange={firstNameHandler}></input>
            <label>Last Name</label>
            <input onChange={lastNameHandler}></input>
            <label>Institutional Email</label>
            <input onChange={emailHandler}></input>
            <label>Password</label>
            <input onChange={passwordHandler}></input>
            <button onClick={profileHandler}>Create Profile</button>
        </div>
    )
}

export default Profile
