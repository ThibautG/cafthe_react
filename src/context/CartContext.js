import React, {createContext, useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";

/* Exportation du contexte pour y avoir accès */
export const CartContext = createContext(null);

/* Création du provider pour le panier */
export function CartProvider({ children }) {
    // déclaration du state pour mettre panier à jour (panier vide si rien dans local storage)
    const [cart, setCart] = useState([]);

    // Stockage dans le LocalStorage pour la persistence des données
    useEffect(() => {
        const storedCart = localStorage.getItem("cartCafThe");

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
        // on vérifie si le produit sur lequel on a cliqué est déjà présent dans le panier
        const produitSelectionne = cart.find((item) => item.Designation_produit === produit.Designation_produit)
        // console.log(produitSelectionne)
        if (produitSelectionne) {
            // si le produit on crée une copie du panier en ne mettant que les produits sur lesquels on n'a pas clique
            const cartFiltreProduitSelectionne = cart.filter(
                (item) => item.Designation_produit !== produit.Designation_produit
            )
            /*ensuite on modifie le panier en y ajoutant ce panier filter +
            une ligne avec le produit sélectionné auquel on vient ajouter son ancienne qtt + 1*/
            setCart([
                ...cartFiltreProduitSelectionne,
                { ...produit, qtt: produitSelectionne.qtt + 1 }
            ])
        } else {
            // sinon on ajoute au panier le produit sélectionné auquel on ajoute une qtt de 1
            setCart([...cart, { ...produit, qtt: 1 }])
        }
    }

    // fonction retirer du panier
    /*const removeFromCart = () => {

    };*/

    // fonction vider panier
    const deleteCart = () => {
        localStorage.removeItem("cartCafThe");
        setCart([]);
    };

    // Observer les changements du panier (debug)
    useEffect(() => {
        console.log("Cart mis à jour :", cart);
    }, [cart]);

    const value = {
        cart,
        addToCart,
        deleteCart,
    }


    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}