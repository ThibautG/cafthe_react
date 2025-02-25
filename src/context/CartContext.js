import React, {createContext, useState, useEffect} from 'react';

/* Exportation du contexte pour y avoir accès */
export const CartContext = createContext(null);

/* Création du provider pour le panier */
export function CartProvider({ children }) {
    // récupération du panier dans le local storage
    const savedCart = localStorage.getItem('cart');
    // déclaration du state pour mettre panier à jour (panier vide si rien dans local storage)
    const [cart, setCart] = useState(savedCart ? JSON.parse(savedCart) : [])

    // mise à jour du panier dans localstorage à chaque modification dans panier
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart]);

    // création fonction ajouter au panier
    const addToCart = (produit) => {
        const produitSelectionne = cart.find((cafthe) => cafthe.name === produit.name)
        if (produitSelectionne) {
            const cartFiltreProduitSelectionne = cart.filter(
                (cafthe) => cafthe.name !== produit.name
            )
            setCart([
                ...cartFiltreProduitSelectionne,
                { ...produit, qtt: produitSelectionne.qtt + 1 }
            ])
        } else {
            setCart([...cart, { ...produit, amount: 1 }])
        }
    }

    // fonction retirer du panier
    /*const removeFromCart = () => {

    };*/

    const value = {
        addToCart,

    }


    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}