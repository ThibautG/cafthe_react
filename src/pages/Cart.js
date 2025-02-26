import React, {useContext} from 'react';
import {CartContext} from "../context/CartContext";
import "../styles/Cart.css";

function Cart(props) {
    const { cart, addToCart, deleteCart, removeFromCart } = useContext(CartContext) ;
    let totalPanier = 0;
    cart.map((item) => (totalPanier = totalPanier + item.Prix_ttc_produit * item.qtt));
    // console.log(totalPanier)

    return (
        <div className={"panier"}>
            <div>
                <h3>Votre Panier</h3>
                <div className={"cart-list"}>
                    {cart.map((item) => (
                        <div className={"command"}>
                            <p>Designation : {item.Designation_produit}</p>
                            <p>Quantité : {item.qtt}</p>
                            <p>Conditionnement : {item.Type_conditionnement}</p>
                            <p>Prix unitaire TTC : {item.Prix_ttc_produit}€</p>
                            <p>Prix total TTC
                                : {(item.Prix_ttc_produit * item.qtt).toFixed(2)}€</p>
                            <button onClick={() => addToCart(item)}>+</button>
                            <button onClick={() => removeFromCart(item)}>-</button>
                        </div>)
                    )}
                    <div className={"command"}>
                        <p>Montant total panier : {totalPanier.toFixed(2)} €</p>
                        <button onClick={deleteCart}>Vider le panier</button>
                    </div>

                    {/*<Link to={`/commandes/clients/${user.id}`} className={"details-btn"}>
                    retour aux commandes
                </Link>*/}
                </div>
            </div>
        </div>
    );
}

export default Cart;