import React, {useState} from "react";

function SignupForm({setUser, setLogon}) {
    
    const [err, setErr] = useState([])
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [name, setName] = useState("")

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
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input autocomplete="username" type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <label>Password:</label>
                <input autocomplete="current-password" type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                {err.map( error => <p key={error} style={{color: "red"}}>{err}</p>)}
                <button type="submit">Submit</button>
            </form>
            <p>Already a member? Click the button below to log in!</p>
            <button onClick={() => setLogon(true)}>Sign up!</button>
        </div>
    )
}

export default SignupForm;