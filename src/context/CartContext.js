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
            //console.log(localStorage.cartCafThe)
        }
    }, [cart]);

    // création fonction ajouter au panier
    const addToCart = (produit) => {
        // console.log(produit)
        // console.log(cart)
        // copie du panier actuel
        const nouveauCart = [...cart];
        // on vérifie si le produit sur lequel on a cliqué est déjà présent dans le panier
        const produitSelectionne = nouveauCart.find((item) => item.Designation_produit === produit.Designation_produit)
        // console.log(produitSelectionne)
        if (produitSelectionne) {
            // Si le produit existe, on incrémente sa quantité
            produitSelectionne.qtt += 1;
        } else {
            // Sinon, on l'ajoute au panier avec une qtt de 1
            nouveauCart.push({ ...produit, qtt: 1 });
        }
        // Mise à jour du panier
        setCart(nouveauCart);
    }

    // fonction retirer du panier
    const removeFromCart = (produit) => {
        console.log(produit)
        // console.log(cart)
        // copie du panier actuel
        const nouveauCart = [...cart];
        // on stocke le produit depuis la copie du panier dans une nouvelle variable
        const produitSelectionne = nouveauCart.find((item) => item.Designation_produit === produit.Designation_produit)
        // console.log(produitSelectionne)
        // On considère que le produit sélectionné est d'office présent dans le panier
        if (produitSelectionne.qtt > 1) {
            produitSelectionne.qtt -= 1;
            // Mise à jour du panier
            setCart(nouveauCart);
        } else {
            const cartSansProduit = nouveauCart.filter((item) => item.Designation_produit !== produit.Designation_produit)
            setCart(cartSansProduit);
        }


    }

    // fonction vider panier
    const deleteCart = () => {
        localStorage.removeItem("cartCafThe");
        setCart([]);
    };

    // Observer les changements du panier
    /*useEffect(() => {
        console.log("Cart mis à jour :", cart);
    }, [cart]);*/

    const value = {
        cart,
        addToCart,
        deleteCart,
        removeFromCart,
    }


    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}