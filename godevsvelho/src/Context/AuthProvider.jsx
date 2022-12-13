import React, { useState } from 'react';
import LoginService from '../Services/LoginService';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()

    const signIn = async (email, senha) => {
        const services = new LoginService();
        await services.loginDev(email, senha);
        const data = services.state.res.data;
        if(services.state.res.status === 200){
            localStorage.setItem('id', data.id_contratado)
            localStorage.setItem('name', data.nome)
            localStorage.setItem('email', data.email)
            localStorage.setItem('telefone', data.telefone)
        }
        if(data){
            setUser(data)
            return true;
        }
        return false;
    }
    
    const signInCont = async (cnpj, senha) => {
        const services = new LoginService();
        await services.loginCont(cnpj, senha);
        const data = services.state.res.data;
        if(services.state.res.status === 200){
            localStorage.setItem('idCont', data.contratante_id)
            localStorage.setItem('nameCont', data.nome)
            localStorage.setItem('email', data.email)
        }
        if(data){
            setUser(data)
            return true;
        }
        return false;
    }

    const signOut = async () => {
        setUser(null);
        setToken();
    }

    const setToken = () => {
        localStorage.clear();
    }

    return (
        <AuthContext.Provider value={{user, signIn, signOut, signInCont}}>
            {children}
        </AuthContext.Provider>
    )
};
