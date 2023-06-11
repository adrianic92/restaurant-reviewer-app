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
            <li key={error} style={{color: "red"}}>{error}</li>
        )
    })
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input autoComplete="name" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                <label>Username:</label>
                <input autoComplete="username" type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <label>New Password:</label>
                <input autoComplete="new-password" type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <label>Confirm Password:</label>
                <input autoComplete="confirm-password" type="text" name="passwordConfirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/>
                {errorMessages}
                <button type="submit">Submit</button>
            </form>
            <p>Already a member? Click the button below to log in!</p>
            <button onClick={() => setLogon(true)}>Log In!</button>
        </div>
    )
}

export default SignupForm;