import React from 'react'
import {useState} from 'react'
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';


function Login({setUser}) {
    const [logon, setLogon] = useState(true);
    return (
        <div>
            <h1>Restaurant Reviewer</h1>
            {logon ? 
            <LoginForm setUser={setUser} setLogon={setLogon}/> : 
            <SignupForm setUser={setUser} setLogon={setLogon}/>}
        </div>
    )
}
 
export default Login;