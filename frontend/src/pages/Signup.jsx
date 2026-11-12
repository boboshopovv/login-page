import {useState} from 'react'

function Signup()
{
    const[token, setToken] = useState(null)
    const[serverResponse, setServerResponse] = useState(null)
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')
    const[repeatedPassword, setRepeatedPassword] = useState('')

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const response = await fetch("http://localhost:8000/signup", {
                method: "POST",
                headers: {
                    "content-type": "submition/json",
                },
                body : JSON.stringify({
                    username: username,
                    password: password,
                    repeatedPassword: repeatedPassword,
                })
                });
                if (!response.ok){
                    throw new Error("Send data invalid")
                } 
        }
        catch (error) {
            console.log(error)
        }
    }

    return(
        <div>
            <h1>Signup</h1>
            <div className="inputBox">
                <form>
                    <input
                        type = "text" 
                        id = "username" 
                        placeholder = "Username" 
                        value = {username} 
                        onChange={(e) => setUsername(e.target.value)}
                    ></input>
                    <input 
                        type = "text" 
                        id = "password" 
                        placeholder = "Password"
                        value = {password}
                        onChange = {(e) => setPassword(e.target.value)}>
                        </input>
                    <input 
                    type = "text" 
                    id = "repeatedPassword" 
                    placeholder = "Repeat password"
                    value = {repeatedPassword}
                    onChange = {(e) => setRepeatedPassword(e.target.value)}></input>
                    <button type = "submit" id = "submit-btn">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Signup;