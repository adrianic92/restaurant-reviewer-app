import React, {useState} from "react";

function SignupForm({setUser, setLogon}) {
    
    const [err, setErr] = useState([])
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [name, setName] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                username,
                password,
                passwordConfirmation
            }),
        })
        .then( resp => {
            if (resp.ok) {
                resp.json()
                .then( user => setUser(user) )
            } else {
                resp.json()
                .then( error => setErr((error.errors)))
            }
        })
    }

    const errorMessages = err.map( error => {
        return (
            <li key={error} className="errorMessage">{error}</li>
        )
    })
    
    return (
        <div className="center">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className="field">    
                    <input autoComplete="name" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                    <span></span>
                    <label>Name:</label>                    
                </div>
                <div className="field">
                    <input autoComplete="username" type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <span></span>
                    <label>Username:</label>                                       
                </div>
                <div className="field">
                    <input autoComplete="new-password" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <span></span>
                    <label>New Password:</label>
                </div>
                <div className="field">
                    <input autoComplete="confirm-password" type="password" name="passwordConfirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/>
                    <span></span>
                    <label>Confirm Password:</label>
                </div>
                {errorMessages}
                <button className="loginButton" type="submit">Submit</button>
            </form>
            <div className="signup_link">Already a member?<br/>Click the button below to log in!<br/>
            <a onClick={() => setLogon(true)}>Log In!</a>
            </div>
        </div>
    )
}

export default SignupForm;