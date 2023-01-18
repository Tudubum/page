import React, { useState } from 'react';

    
const SignInForm = (props) => {
    const[username, setUsername] = useState('')
    const [password, setPassword] = useState('');
    


const [status, setStatus] = useState('');


const handleInput = (e) => {
    switch (e.target.name) {
        case 'username':
            setUsername(e.target.value);
            break;
        case 'password':
            setPassword(e.target.value);
            break;
        default:
            console.log('Invalid input name');
    }
}

const handleSubmit = async (e) => {
    e.preventDefault();
    const signInData = await fetch('http://localhost:3000/users')
    .then(response => response.json());
    const users = signInData.find(user => user.name === username && user.password === password);
  if (users) {
      props.prijungti("Labas, " + username );
  } else {
    setStatus("Neteisingas prisijungimo vardas arba slaptažodis");
  }
}
   
    return (
    <>   
        <form className="SignInForm" onSubmit={handleSubmit}>

        <input 
        type="text"
        name="username"
        placeholder="Username" 
        value={username} 
        onChange={handleInput} 
        />

        <input 
        type="password" 
        name="password"
        placeholder="Password" 
        value={password} 
        onChange={handleInput} 
        />

        <input type="submit" value="Log In" className="submit" />

        </form>
        {status && <div>{status}</div>}
    </> 
    );
};

export default SignInForm;