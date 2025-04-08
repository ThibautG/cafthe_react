import React, {useContext, useEffect, useState} from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import "../styles/ConfirmOrder.css";
import { useNavigate } from "react-router-dom";

function ConfirmOrder() {
    const { cart, totalPriceTTC, deleteCart } = useContext(CartContext);
    const { user } = useContext(AuthContext);

    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const [prenom, setPrenom] = useState("");
    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [adresseLivraison, setAdresseLivraison] = useState("");

    useEffect(() => {
        if (user) {
            setPrenom(user.prenom || "");
            setNom(user.nom || "");
            setEmail(user.email || "");
            setTel(user.tel || "");
            setAdresseLivraison(user.adresse || "");
        }
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrorMsg("");
        setSuccessMsg("");

        if (!adresseLivraison.trim()) {
            setErrorMsg("Veuillez renseigner une adresse de livraison.");

            setTimeout(() => {
                const errorBlock = document.querySelector(".confirm-error-message");
                if (errorBlock) {
                    errorBlock.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
            return;
        }

        // C'est là qu'on passera l'appel API si on valide la commande
        setSuccessMsg("Merci ! Votre commande a bien été enregistrée.");

        // et on vide le panier
        deleteCart();

        setTimeout(() => {
            const successBlock = document.querySelector(".confirm-success-message");
            if (successBlock) {
                successBlock.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    };

    return (
        <section className={"global-section confirm-order-section"}>
            <h1 className={"global-section-title"}>Confirmer ma commande</h1>
            <p className={"global-section-subtitle"}>Vérifiez vos informations avant de valider.</p>

            {errorMsg && (
                <div className={"confirm-error-message"}>
                    <p className={"global-msg-error"}>{errorMsg}</p>
                </div>
            )}

            {successMsg && (
                <div className={"confirm-success-message"}>
                    <p className={"global-msg-success"}>{successMsg}</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className={"global-box confirm-order-form"}>
                <ul className={"register-list"}>
                    <li>
                        <label htmlFor={"order-name"} className={"global-label"}>Nom :</label>
                        <input id={"order-name"} type={"text"} className={"global-input"} value={nom} disabled />
                    </li>
                    <li>
                        <label htmlFor={"order-surname"} className={"global-label"}>Prénom :</label>
                        <input id={"order-surname"} type={"text"} className={"global-input"} value={prenom} disabled />
                    </li>
                    <li>
                        <label htmlFor={"order-email"} className={"global-label"}>E-mail :</label>
                        <input id={"order-email"} type={"email"} className={"global-input"} value={email} disabled />
                    </li>
                    <li>
                        <label htmlFor={"order-phone"} className={"global-label"}>Téléphone :</label>
                        <input id={"order-phone"} type={"tel"} className={"global-input"} value={tel} disabled />
                    </li>
                    <li>
                        <label htmlFor={"adresseLivraison"} className={"global-label"}>
                            Adresse de livraison :
                        </label>
                        <input
                            type={"text"}
                            id={"adresseLivraison"}
                            className={"global-input"}
                            value={adresseLivraison}
                            onChange={(e) => setAdresseLivraison(e.target.value)}
                            required
                        />
                    </li>
                    <li className={"order-total"}>
                        <p><strong>Total TTC : {totalPriceTTC} €</strong></p>
                    </li>
                    <li className={"register-button"}>
                        <button type={"submit"} className={"global-btn-primary"}>Valider la commande</button>
                    </li>
                </ul>
            </form>
        </section>
    );
}

export default ConfirmOrder;
