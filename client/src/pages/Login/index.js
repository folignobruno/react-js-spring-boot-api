//import React, {useState} from "react";
//import {useHistory} from "react-router-dom";
import React from "react";
import './styles.css';

import api from '../../services/api';

import logoImage from '../../assets/logo.svg'
import padlock from '../../assets/padlock.png'

//const [username, setUsername] = useState('');
//const [password, setPassword] = useState('');

//const history = useHistory();

/*async function login(e){
    e.preventDefault();

    const data = {username,password}

    try{
        const response = await api.post('auth/signin', data);

        localStorage.setItem('username', username);
        localStorage.setItem('accessToken', response.data.token);
    }catch (err) {
        alert('Login falhou')
    }
};*/

export default function Login(){
    return (
        <div className='login-container'>
            <section className="form">
            <img src={logoImage} alt="Erudio Logo"/>

            <form>
                <h1>Access Your Account</h1>
                <input placeholder="User name"/>
                <input type="password" placeholder="Password"/>
                <button className="button" type="submit">Login</button>
            </form>
            </section>

            <img src={padlock} alt="Login"/>

        </div>
    )
}