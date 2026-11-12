import { useEffect, useState } from "react";

function Test(){
    const[message, setMessage] = useState('loading...')

    const [serverResponse, setServerResponse] = useState(null);
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();
    

    try {
        const response = await fetch("http://localhost:8000/items", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body : JSON.stringify({
                value: parseInt(inputValue, 10),
            }),
        });

        if (!response.ok){
            throw new Error("failure");
        }

        const data = await response.json();
        setServerResponse(data);
    } catch (error) {
        console.error("error", error);
        setServerResponse({error: "failure"});
    }}


    return (
        <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
            <label>
                Enter 1 (True) or 0 (False):{" "}
                <input 
                    type="number" 
                    min="0" 
                    max="1" 
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)} 
                />
            </label>
            <button type="submit" style={{ marginLeft: '10px' }}>Submit</button>

            <div style={{ marginTop: '10px' }}>
                <p>Response: {JSON.stringify(serverResponse)}</p>
            </div>
        </form>
    )
}

export default Test;