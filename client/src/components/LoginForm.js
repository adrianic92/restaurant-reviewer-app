import React, {useState} from "react";

function LoginForm({setUser, setLogon}) { 
    
    const [err, setErr] = useState([])
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    
    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password
            }),
        })
        .then( resp => {
            if (resp.ok) {
                resp.json()
                .then( user => setUser(user) )
            } else {
                resp.json()
                .then( error => setErr(error.errors))
            }
        })
    }

    const errorMessage = err.map( message => <p key={message} className="errorMessage">{message}</p>)
    return (
        <div className="center">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <input autoComplete="username" type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <span></span>
                    <label>Username:</label>
                </div>
                <div className="field">
                    <input autoComplete="current-password" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <span></span>
                    <label>Password:</label>
                </div>
                {errorMessage}
                <button type="submit">Login</button>
            </form>
            
            <div className="signup_link">Not a member?<br/>Click the button below to sign up now!<br/>
            <a onClick={() => setLogon(false)}>Sign up!</a></div>
        </div>
    )
}

export default LoginForm;