import React, {useContext, useEffect, useState} from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import "../styles/ConfirmOrder.css";

function ConfirmOrder() {
    const { cart, totalPriceTTC } = useContext(CartContext);
    const { user } = useContext(AuthContext);

    const [errorMsg, setErrorMsg] = useState("");

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

        setErrorMsg(""); // Reset du message à chaque soumission

        if (!adresseLivraison.trim()) {
            setErrorMsg("Veuillez renseigner une adresse de livraison.");
        }
        // C'est là qu'on passera l'appel API si on valide la commande
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
                    <li>
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
