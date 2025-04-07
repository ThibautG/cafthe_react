import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import '../styles/Registration.css';

function Registration(props) {
    const navigate = useNavigate();// la navigation

    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [adresse, setAdresse] = useState("");
    const [mdp, setMdp] = useState("");
    const [mdpConfirm, setMdpConfirm] = useState("");

    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    // Récupérer la date du jour de l'inscription
    const today = new Date();
    const todayString = today.toISOString();
    const currentDate = todayString.split('T')[0];

    //fonction pour vérifier les données entrées dans le form
    const validateForm = () => {
        const emailVerification = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailVerification.test(email)) {
            setErrorMsg("Veuillez entrer une adresse email valide.");
            return false;
        }

        if (mdp !== mdpConfirm) {
            setErrorMsg("Les mots de passe saisis ne sont pas identiques.");
            return false;
        }

        if (mdp.length < 6) {
            setErrorMsg("Le mot de passe doit contenir au moins 6 caractères.");
            return false;
        }

        const phoneVerification = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/;
        if (!phoneVerification.test(tel)) {
            setErrorMsg("Veuillez entrer un numéro de téléphone valide.");
            return false;
        }

        return true;
    };



    const handleSubmit = async (e) => { // fonction asynchrone car on va aller chercher les données dans l'API
        e.preventDefault();
        setErrorMsg("");
        setSuccessMsg("");

        //si le formulaire n'est pas valide, on s'arrête ici
        if (!validateForm()) {
            // on scroll la vue utilisateur sur le message d'erreur
            const errorBlock = document.querySelector(".register-message");
            if (errorBlock) errorBlock.scrollIntoView({ behavior: "smooth" });
            return;
        }

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/register`,
                {
                    "Nom_client" : nom,
                    "Prenom_client" : prenom,
                    "Date_inscription_client": currentDate,
                    "Mail_client" : email,
                    "Telephone_client": tel,
                    "Adresse_client": adresse,
                    "Mdp_client" : mdp,
                },
            );
            // redirection du client vers page login
            setSuccessMsg("Bienvenue chez CafThé ! Votre compte a bien été créé.")

            // on reset tous nos states
            setNom("");
            setPrenom("");
            setEmail("");
            setTel("");
            setAdresse("");
            setMdp("");
            setMdpConfirm("");
        } catch (error) {
            console.error("Erreur lors de l'inscription : ", error);
            if (error.response && error.response.data && error.response.data.message) {
                setErrorMsg(error.response.data.message);
            } else {
                setErrorMsg("Une erreur est survenue. Veuillez réessayer.");
            }
        }
    };

    // on scroll la vue vers le message de succès
    useEffect(() => {
        if (successMsg) {
            const successBlock = document.querySelector(".register-success");
            if (successBlock) successBlock.scrollIntoView({ behavior: "smooth" });
        }
    }, [successMsg]);

    // on scroll la vue vers le message d'erreur
    useEffect(() => {
        if (errorMsg) {
            const errorBlock = document.querySelector(".register-error");
            if (errorBlock) errorBlock.scrollIntoView({ behavior: "smooth" });
        }
    }, [errorMsg]);

    return (
        <section className={"global-section section-register"}>
            <h1 className={"global-section-title"}>Créer un compte</h1>
            <p className={"global-section-subtitle"}>
                Rejoignez la communauté CafThé et savourez une expérience sur-mesure.
            </p>

            {successMsg && (
                <div className={"register-message"}>
                    <p className={"global-msg-success register-success"}>
                        {successMsg} <Link to="/login" className="global-link register-login-link">Connectez-vous !</Link>
                    </p>
                </div>
            )}

            {errorMsg && (
                <div  className={"register-message"}>
                    <p className={"global-msg-error register-error"}>{errorMsg}</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className={"global-box"}>
                <ul className={"register-list"}>
                    <li>
                        <label htmlFor={"nom"} className={"global-label"}>Nom<span className={"required"}>*</span> : </label>
                        <input type={"text"}
                               className={"global-input"}
                               value={nom}
                               onChange={(e) => setNom(e.target.value)}
                               id={"nom"}
                               required
                               name={"nom"}/>
                    </li>
                    <li>
                        <label htmlFor={"prenom"} className={"global-label"}>Prénom<span className="required">*</span> : </label>
                        <input type={"text"}
                               className={"global-input"}
                               value={prenom}
                               onChange={(e) => setPrenom(e.target.value)}
                               id={"prenom"}
                               required
                               name={"prenom"}/>
                    </li>
                    <li>
                        <label htmlFor={"email"} className={"global-label"}>E-mail<span className="required">*</span> : </label>
                        <input type={"email"}
                               className={"global-input"}
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                               id={"email"}
                               required
                               name={"mail"}/>
                    </li>
                    <li>
                        <label htmlFor={"tel"} className={"global-label"}>Téléphone<span className="required">*</span> : </label>
                        <input type={"tel"}
                               className={"global-input"}
                               value={tel}
                               onChange={(e) => setTel(e.target.value)}
                               id={"tel"}
                               required
                               name={"tel"}/>
                    </li>
                    <li>
                        <label htmlFor={"adresse"} className={"global-label"}>Adresse<span className="required">*</span> : </label>
                        <input type={"text"}
                               className={"global-input"}
                               value={adresse}
                               onChange={(e) => setAdresse(e.target.value)}
                               id={"adresse"}
                               required
                               name={"adresse"}/>
                    </li>
                    <li>
                        <label htmlFor={"password"} className={"global-label"}>Mot de passe<span className="required">*</span> : </label>
                        <input type={"password"}
                               className={"global-input"}
                               value={mdp}
                               onChange={(e) => setMdp(e.target.value)}
                               id={"password"}
                               required
                               name={"password"}/>
                    </li>
                    <li>
                        <label htmlFor={"passwordConfirm"} className={"global-label"}>Confirmez votre mot de passe<span
                            className="required">*</span> : </label>
                        <input type={"password"}
                               className={"global-input"}
                               value={mdpConfirm}
                               onChange={(e) => setMdpConfirm(e.target.value)}
                               id={"passwordConfirm"}
                               required
                               name={"passwordConfirm"}/>
                    </li>
                    <li className="register-legend">
                        <p className="register-required-legend">
                            <span className="required">*</span> Champs obligatoires
                        </p>
                    </li>

                    <div className={"register-button"}>
                        <button type={"submit"} className={"global-btn-primary"}>Créer mon compte</button>
                        <p className={"register-link"}>
                            Vous avez déjà un compte ? <Link to={"/login"} className={"global-link footer-login-link"}>Connectez-vous
                            ici !</Link>
                        </p>
                    </div>

                </ul>
            </form>
        </section>
    );
}

export default Registration;