import React, {useContext} from 'react';
import {CartContext} from "../context/CartContext";
import "../styles/Cart.css";
import {Link} from "react-router-dom";

function Cart(props) {
    const { cart, addToCart, deleteCart, removeFromCart, totalItems, totalPriceTTC } = useContext(CartContext) ;
    /*let totalPanier = 0;
    cart.map((item) => (totalPanier = totalPanier + item.Prix_ttc_produit * item.qtt));
    // console.log(totalPanier)*/

    return (
        <section className={"cart"}>
                <h1>Votre Panier</h1>
                {cart.length === 0 ? (
                    <div className={"cart-empty"}>
                        <p>Votre panier est vide pour le moment.</p>
                        <Link to="/produits/cafes" className={"cart-back-btn"}>
                            Découvrir nos cafés
                        </Link>
                    </div>
                ) : (
                    <div className={"cart-full"}>
                        <div className={"cart-list"}>
                            {cart.map((item) => (
                                <div className={"cart-product"} key={item.Identifiant_produit}>
                                    <div className={"cart-product-image"}>
                                        <img src={item.url_img_produit} alt={item.Designation_produit}/>
                                        <Link to={`/produit/${item.Identifiant_produit}`}
                                              className={"cart-details-btn"}>
                                            Voir détails
                                        </Link>
                                    </div>
                                    <div className={"cart-product-info"}>
                                        <h2>{item.Designation_produit}</h2>
                                        <div className={"cart-product-details"}>
                                            <ul className={"cart-product-meta"}>
                                                <li className={"cart-product-qtt"}>
                                                    <p><strong>Qté :</strong> {item.qtt}</p>
                                                    <div className={"cart-product-qtt-btn"}>
                                                        <button onClick={() => addToCart(item)}>+</button>
                                                        <button onClick={() => removeFromCart(item)}>-</button>
                                                    </div>
                                                </li>
                                                <li><em>{item.Type_conditionnement}</em></li>
                                            </ul>
                                            <ul className={"cart-product-price"}>
                                                <li>Prix unitaire : {item.Prix_ttc_produit}€</li>
                                                <li>
                                                    <strong>Total TTC :</strong>
                                                    {(item.Prix_ttc_produit * item.qtt).toFixed(2)}€
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>)
                            )}
                            <div className={"cart-list-footer"}>
                                <button onClick={deleteCart}>Vider le panier</button>
                            </div>
                        </div>

                        <aside className={"cart-summary"}>
                            <h2>Récapitulatif</h2>
                            <p>Voici le total de votre panier, toutes taxes comprises.</p>
                            <p>Besoin de modifier quelque chose ? C’est encore possible.</p>
                            <p>Total : {totalPriceTTC} €</p>
                            <div className={"cart-summary-actions"}>
                                <button>Valider la commande</button>
                            </div>
                        </aside>
                    </div>
                )}
        </section>
    );
}

export default Cart;