import {createContext, useState, useContext, useEffect} from 'react';

const UserContext = createContext();


export const userToken = ({children}) => {
    const [token, setToken] = useState("")

    useEffect(() =>{
        fetch('http://localhost:8000/api/hello')
          .then((response) => {
            if (!response.ok) {
            throw new Error("network problem")
        }
        return response.json();
    })  
    .then((data) =>{
        setMessage(data.message);
    })
}, [])
}
export const useUserContext = () => useContext(UserContext);
