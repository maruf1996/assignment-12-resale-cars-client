import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const useUser = email => {
    const [isUser, setIsUser] = useState('');
    const {user}=useContext(AuthContext);

    useEffect(() => {
        fetch(`https://resale-cars-server.vercel.app/users/${user?.email}`)
        .then(res => res.json())
        .then(data => {
        setIsUser(data)
        })
    }, [user?.email])
    
    return [isUser]
}

export default useUser;