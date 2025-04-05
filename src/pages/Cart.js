import React, {useContext} from 'react';
import {CartContext} from "../context/CartContext";
import "../styles/Cart.css";
import {Link} from "react-router-dom";
import ProductDetails from "../components/ProductDetails";
import { useState } from "react";


function Cart(props) {
    const { cart, addToCart, deleteCart, removeFromCart, totalItems, totalPriceTTC } = useContext(CartContext) ;
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setSelectedProduct(null);
            setIsClosing(false);
        }, 300);
    };

    /*let totalPanier = 0;
    cart.map((item) => (totalPanier = totalPanier + item.Prix_ttc_produit * item.qtt));
    // console.log(totalPanier)*/

    return (
        <section className={"cart"}>
                <h1 className={"cart-title"}>Votre Panier</h1>
                <p className={"cart-subtitle"}>Un petit clic de plus, un grand moment de bonheur.</p>
                {cart.length === 0 ? (
                    <div className={"cart-empty"}>
                        <div className={"cart-empty-banner"}>
                            <h2>Votre panier est vide...</h2>
                            <p>Mais l’aventure aromatique ne fait que commencer !</p>
                            <div className={"cart-empty-links"}>
                                <Link to={"/produits/cafes"}>Explorer les cafés</Link>
                                <Link to={"/produits/thes"}>Découvrir les thés</Link>
                                <Link to={"/produits/accessoires"}>Voir les accessoires</Link>
                            </div>
                        </div>

                    </div>
                ) : (
                    <div className={"cart-full"}>
                        <div className={"cart-list"}>
                            {cart.map((item) => (
                                <div className={"cart-product"} key={item.Identifiant_produit}>
                                    <div className={"cart-product-image"}>
                                    <img src={item.url_img_produit} alt={item.Designation_produit}/>
                                        <Link to={"#"}
                                              onClick={(e) => {
                                                  e.preventDefault();
                                                  setSelectedProduct(item);
                                              }}
                                              className={"cart-details-btn"}>
                                            Voir détails
                                        </Link>
                                        <ProductDetails
                                            produit={selectedProduct}
                                            onClose={handleClose}
                                            isClosing={isClosing}
                                        />
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
                                                    <strong>Total TTC :
                                                    {(item.Prix_ttc_produit * item.qtt).toFixed(2)}€</strong>
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