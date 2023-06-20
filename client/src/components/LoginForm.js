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

    const errorMessage = err.map( message => <p key={message} style={{color: "red"}}>{message}</p>)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input autoComplete="username" type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <label>Password:</label>
                <input autoComplete="current-password" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                {errorMessage}
                <button type="submit">Submit</button>
            </form>
            <p>Not a member? Click the button below to sign up now!</p>
            <button onClick={() => setLogon(false)}>Sign up!</button>
        </div>
    )
}

export default LoginForm;