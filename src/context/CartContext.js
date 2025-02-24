import React, {createContext, useState, useEffect} from 'react';

/* Exportation du contexte pour y avoir accès */
export const CartContext = createContext(null);

/* Création du provider pour la connexion/déconnexion */
export function CartProvider({ children }) {
    const storedCart = localStorage.getItem("cart");
    const [cart, setCart] = useState(storedCart);

    // Connexion (on reçoit les données envoyées par l'API : le token + les infos client)
    const addToCart = (idProduit) => {
        storeCart()
    }

    // Déconnexion
    const removeFromCart = () => {
        l);
    };

    const value = {
        addToCart,
        removeFromCart,
    }


    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}