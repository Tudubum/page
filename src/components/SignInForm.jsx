import React, { useState } from 'react';

const SignInForm = (props) => {
    const [signIn, setSignIn] = useState({
        name: "",
        password: ""
    });
    
const [status, setStatus] = useState('');

const handleInput = (e) => {
        setSignIn({
            ...signIn,
            [e.target.name]: e.target.value
        });
    }
    
const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/users');
            const signInData = await response.json();
            const users = signInData.filter(user => user.name === signIn.name && user.password === signIn.password);
            if (users.length) {
              props.onSuccess("Labas, " + signIn.name );
            } else {
              setStatus("Neteisingas prisijungimo vardas arba slaptažodis");
            }
        } catch (error) {
            console.error(error);
            setStatus('Serverio klaida');
        }
    }

    return (
    <>   
        <form className="SignInForm" onSubmit={handleSubmit}>

        <input 
            type="text"
            name="name"
            placeholder="Username" 
            value={signIn.name} 
            onChange={handleInput} 
        />

        <input 
            type="password" 
            name="password"
            placeholder="Password" 
            value={signIn.password} 
            onChange={handleInput} 
        />

        <input type="submit" value="Log In" className="submit" />

        </form>
        
        {status && <div>{status}</div>}
    </> 
    );
};

export default SignInForm;