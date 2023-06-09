import React, {useState} from "react";

function LoginForm({setUser}) { 
    
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
                .then( error => setErr(console.log(error.errors)))
            }
        })
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <label>Password:</label>
            <input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            {err.map( error => <p key={error} style={{color: "red"}}>{err}</p>)}
            <button type="submit">Submit</button>
        </form>
    )
}

export default LoginForm;