import { useState} from "react";
import LoginCont from "../Pages/Contratante/Login/LoginCont";
import Login from "../Pages/Dev/Login/Login";

const RequireAuth = ({children}) => {
    const [token] = useState(localStorage.getItem('authToken'))
    
    if(!token)
    return <Login/>;

    return children;
}

const RequireAuthCont = ({children}) => {
    const [token] = useState(localStorage.getItem('authTokenCont'))
    
    if(!token)
    return <LoginCont/>;

    return children;
}

export {RequireAuth, RequireAuthCont};