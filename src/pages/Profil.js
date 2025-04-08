import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";
import '../styles/Profil.css';
import Commands from "../components/Commands";
import CommandDetail from "../components/CommandDetail";
import {AuthContext} from "../context/AuthContext";


function Profil(props) {
    const navigate = useNavigate() ;

    const storedUser = localStorage.getItem('user');
    const user = storedUser ? JSON.parse(storedUser) : null;

    const { token } = useContext(AuthContext);

    const [infos, setInfos] = useState({}); // pour récupérer les infos du client afin d'afficher
    const [loading, setLoading] = useState(true); // Pour savoir si les données sont en cours de chargement
    const [error, setError] = useState(null);

    // on récupère les 3 champs input
    const [inputValueMail, setInputValueMail] = useState(infos.Mail_client || "");
    const [inputValueTelephone, setInputValueTelephone] = useState(infos.Telephone_client || "");
    const [inputValueAdresse, setInputValueAdresse] = useState(infos.Adresse_client || "");

    // On gère l'affichage des confirmations de changement infos
    const [successMessageInfo, setSuccessMessageInfo] = useState("");
    const [errorMessageInfo, setErrorMessageInfo] = useState("");

    // on récupère les champs input pour changer le mot de passe
    const [inputValueOldPassword, setInputValueOldPassword] = useState("");
    const [inputValueNewPassword, setInputValueNewPassword] = useState("");
    const [mdpConfirm, setMdpConfirm] = useState("");

    // On gère l'affichage des confirmations du MDP
    const [successMessagePassword, setSuccessMessagePassword] = useState("");
    const [errorMessagePassword, setErrorMessagePassword] = useState("");

    // un state pour montrer ou cacher le formulaire
    const [showForm, setShowForm] = useState(false);

    // un state pour afficher ou non l'input de modification du mdp
    const [showPassword, setShowPassword] = useState(false);

    // us state pour stocker l'ID de commande sélectionnée
    const [selectedCommandId, setSelectedCommandId] = useState(null);

    // fonction à appeler sur onChange du champ input pour stocker valeur
    const handleInputChangeMail = (e) => {
        setInputValueMail(e.target.value);
    };
    const handleInputChangeTelephone = (e) => {
        setInputValueTelephone(e.target.value);
    };
    const handleInputChangeAdresse = (e) => {
        setInputValueAdresse(e.target.value);
    };


    // fonction pour le onSubmit du bouton du formulaire
    const handleInfo = async (e) => {
        e.preventDefault();

        setSuccessMessageInfo("");
        setErrorMessageInfo("");

        try {
            await axios.put(
                `${process.env.REACT_APP_API_URL}/api/clients/${user.id}`,
                {
                    "Mail_client": inputValueMail,
                    "Telephone_client": inputValueTelephone,
                    "Adresse_client": inputValueAdresse,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                }
            );

            // On met à jour les infos avec les nouvelles données
            await fetchInfos();

            setSuccessMessageInfo("Informations mises à jour avec succès.");
            setTimeout(() => setSuccessMessageInfo(""), 4000);
            setShowForm(false);

        } catch (error) {
            setErrorMessageInfo("Impossible de modifier le profil pour le moment.");
            setTimeout(() => setErrorMessageInfo(""), 5000);
        }
    };

    // fonction pour le onSubmit de modification du password
    const handlePassword = async (e) => {
        e.preventDefault();

        setSuccessMessagePassword("");
        setErrorMessagePassword("");

        if (inputValueNewPassword !== mdpConfirm) {
            setErrorMessagePassword("Les mots de passe saisis ne sont pas identiques.");
            setTimeout(() => setErrorMessagePassword(""), 4000);
            return;
        }

        try {
            const response = await axios.put(
                `${process.env.REACT_APP_API_URL}/api/login/${user.id}`,
                {
                    "oldMdp": inputValueOldPassword,
                    "newMdp": inputValueNewPassword,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            /*window.location.reload();*/
            setSuccessMessagePassword("Mot de passe modifié avec succès.");
            setTimeout(() => setSuccessMessagePassword(""), 4000);

            setInputValueOldPassword("");
            setInputValueNewPassword("");
            setMdpConfirm("");
            setShowPassword(false);

        } catch (error) {
            console.error("Impossible de modifier le mot de passe pour le moment.", error);
            setErrorMessagePassword("Impossible de modifier le mot de passe pour le moment.");
            setTimeout(() => setErrorMessagePassword(""), 5000);
        }
    };

    const fetchInfos = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/clients/${user.id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

            /*console.log(`${process.env.REACT_APP_API_URL}/api/client/${user.id}`)*/
            setInfos(response.data);
            // on met à jour les inputs après avoir récupéré les infos
            setInputValueMail(response.data.Mail_client || "");
            setInputValueTelephone(response.data.Telephone_client || "");
            setInputValueAdresse(response.data.Adresse_client || "");
        } catch (error) {
            console.error("Erreur de chargement du profil", error);
        }
    };

    useEffect(() => {
        /*console.log(user)*/
        if (!user) {
            setError("Utilisateur non authentifié");
            setLoading(false);
            navigate("/login");
            return; // Si user est null, on arrête l'exécution
        }

        void fetchInfos();
    }, [user, navigate]);

    if (!user) return null;

    return (
        <section className={"global-section wrap-profil"}>
            <h1 className={"global-section-title"}>Mon profil</h1>
            <p className={"global-section-subtitle"}>
                Retrouvez et modifiez vos informations personnelles, votre mot de passe et l’historique de vos commandes.
            </p>

            {successMessageInfo && <p className="global-msg-success">{successMessageInfo}</p>}
            {errorMessageInfo && <p className="global-msg-error">{errorMessageInfo}</p>}


            {successMessagePassword && <p className={"global-msg-success"}>{successMessagePassword}</p>}
            {errorMessagePassword && <p className={"global-msg-error"}>{errorMessagePassword}</p>}

            <div className={"global-box section-profil"}>
                <div className={"profil-infos"}>
                    <h2>Bonjour {infos.Prenom_client} <span className={"global-uppercase"}>{infos.Nom_client}</span></h2>
                    <p>Client depuis le
                        : {infos.Date_inscription_client ? infos.Date_inscription_client.split('T')[0] : "Date inconnue"}</p>
                    <p><strong>E-mail :</strong> {infos.Mail_client}</p>
                    <p><strong>Téléphone :</strong> {infos.Telephone_client}</p>
                    <p><strong>Adresse :</strong> {infos.Adresse_client}</p>
                </div>

                <div className={"profil-change"}>
                    <div className={"profil-change-infos"}>
                        {!showForm && (
                            <button className={"global-btn-secondary"} onClick={() => {
                                setShowForm(true);
                                setShowPassword(false);
                            }}>
                                Modifier mes informations
                            </button>
                        )}

                        {showForm && (
                            <form onSubmit={handleInfo}>
                                <label className={"global-label"} htmlFor={"profil-email"}>Email</label>
                                <input className={"global-input"} id={"profil-email"} type="email"
                                       value={inputValueMail}
                                       onChange={(e) => setInputValueMail(e.target.value)}/>
                                <label className={"global-label"} htmlFor={"profil-tel"}>Téléphone</label>
                                <input className={"global-input"} id={"profil-tel"} type="text"
                                       value={inputValueTelephone}
                                       onChange={(e) => setInputValueTelephone(e.target.value)}/>
                                <label className={"global-label"} htmlFor={"profil-adresse"}>Adresse</label>
                                <input className={"global-input"} id={"profil-adresse"} type="text"
                                       value={inputValueAdresse}
                                       onChange={(e) => setInputValueAdresse(e.target.value)}/>
                                <button className={"global-btn-primary"} type={"submit"}>Valider</button>
                                <button
                                    className={"global-btn-secondary"}
                                    type={"button"} //pour ne pas submit le form
                                    onClick={() => setShowForm(false)}
                                >
                                    Annuler
                                </button>
                            </form>
                        )}
                    </div>

                    <div className={"profil-change-password"}>
                        {!showPassword && (
                            <button className={"global-btn-secondary"}
                                    onClick={() => {
                                        setShowPassword(true);
                                        setShowForm(false);
                                    }}>
                                Modifier mon mot de passe
                            </button>
                        )}

                        {showPassword && (
                            <form onSubmit={handlePassword}>
                                <label className={"global-label"} htmlFor={"profil-password-old"}>Mot de passe
                                    actuel</label>
                                <input className={"global-input"} id={"profil-password-old"} type="password"
                                       placeholder={""}
                                       onChange={(e) => setInputValueOldPassword(e.target.value)}/>

                                <label className={"global-label"} htmlFor={"profil-password-new"}>Nouveau mot de
                                    passe</label>
                                <input className={"global-input"} id={"profil-password-new"} type="password"
                                       placeholder={""}
                                       onChange={(e) => setInputValueNewPassword(e.target.value)}/>

                                <label className={"global-label"} htmlFor={"profil-password-new-confirm"}>Confirmer le
                                    nouveau mot de passe</label>
                                <input className={"global-input"} id={"profil-password-new-confirm"} type="password"
                                       placeholder={""}
                                       onChange={(e) => setMdpConfirm(e.target.value)}/>

                                <button className={"global-btn-primary"} type={"submit"}>Valider</button>
                                <button
                                    className={"global-btn-secondary"}
                                    type={"button"} //pour ne pas submit le form
                                    onClick={() => setShowPassword(false)}
                                >
                                    Annuler
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>

            <Commands id={user.id} onSelectCommand={setSelectedCommandId}/>

            {selectedCommandId && <CommandDetail id={selectedCommandId} />}

            <Link to={`/`} className={"global-btn-secondary"}>
                Retour à l'accueil
            </Link>

        </section>
    );
}

export default Profil;