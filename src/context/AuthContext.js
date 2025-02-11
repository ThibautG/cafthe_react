import React, {createContext, useState, useEffect} from 'react';

/* Exportation du contexte pour y avoir accès */
export const AuthContext = createContext(null);

/* Création du provider pour la connexion/déconnexion */
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null); // client
    const [token, setToken] = useState(null); // token JWT

    // Stockage dans le LocalStorage pour la persistence des données
    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        const storedUser = localStorage.getItem("user");

        if (storedToken && storedUser) {
            setToken(storedToken);
            setUser(JSON.parse(storedUser)); // transforme le storedUser en objet JS
        }
    }, [])//

    // Si le token ou l'user changent, on met à jour le LocalStorage
    useEffect(() => {
        if (token && user) {
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user)); // transforme le user en JSON car on peut stocker que du JSON en localStorage
        } else {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
        }
    }, [token, user]); // si token ou user change on relance le useEffect

    // Connexion (on reçoit les données envoyées par l'API : le token + les infos client)
    const login = (jwt, userData) => {
        setToken(jwt);
        setUser(userData);
    }

    // Déconnexion
    const logout = () => {
        setToken(null);
        setUser(null);
    };

    const value = {
        token,
        user,
        login,
        logout,
        isAuthenticated : !!token, // soit vrai soit faux et dépend de token, si token est là c'est vrai sinon non
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}