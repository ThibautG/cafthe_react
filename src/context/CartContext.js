import React, {createContext, useState, useEffect} from 'react';

/* Exportation du contexte pour y avoir accès */
export const CartContext = createContext(null);

/* Création du provider pour le panier */
export function CartProvider({ children }) {
    // déclaration du state pour mettre panier à jour (panier vide si rien dans local storage)
    const [cart, setCart] = useState([])

    // Stockage dans le LocalStorage pour la persistence des données
    useEffect(() => {
        const storedCart = localStorage.getItem("cartCafThe");
        console.log(storedCart)

        if (storedCart) {
            setCart(JSON.parse(storedCart)); // transforme le storedUser en objet JS
        }
    }, [])//



    // mise à jour du panier dans localstorage à chaque modification dans panier
    useEffect(() => {
        if (cart.length > 0) {
            localStorage.setItem('cartCafThe', JSON.stringify(cart))
            console.log(localStorage.cartCafThe)
        }
    }, [cart]);

    // création fonction ajouter au panier
    const addToCart = (produit) => {
        // console.log(produit)
        // console.log(cart)
        const produitSelectionne = cart.find((cafthe) => cafthe.Designation_produit === produit.Designation_produit)
        // console.log(produitSelectionne)
        if (produitSelectionne) {
            const cartFiltreProduitSelectionne = cart.filter(
                (cafthe) => cafthe.Designation_produit !== produit.Designation_produit
            )
            setCart([
                ...cartFiltreProduitSelectionne,
                { ...produit, qtt: produitSelectionne.qtt + 1 }
            ])
        } else {
            setCart([...cart, { ...produit, qtt: 1 }])
        }
    }

    // fonction retirer du panier
    /*const removeFromCart = () => {

    };*/

    // 🔹 Observer les changements du panier (debug)
    useEffect(() => {
        console.log("Cart mis à jour :", cart);
    }, [cart]);

    const value = {
        cart,
        addToCart,

    }


    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}