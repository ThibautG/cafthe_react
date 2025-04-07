import React, {useState, useContext} from 'react';
import "../styles/Login.css"
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import {Link, useNavigate} from 'react-router-dom';

function Login(props) {
    const { login } = useContext(AuthContext); // fonction login venant du contexte
    const navigate = useNavigate(); // la navigation

    const [email, setEmail] = useState("");
    const [mdp, setMdp] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const [isLoading, setIsLoading] = useState(false);


    const handleSubmit = async (e) => { // fonction asynchrone car on va aller chercher les données dans l'API
        e.preventDefault();
        setErrorMsg("");
        setIsLoading(true);

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/login`,
                    {
                        "Mail_client": email,
                        "Mdp_client": mdp,
                    },
            );

            const {token, client} = response.data;

            // On met à jour contexte d'authentification
            login(token, client);

            // redirection du client vers une page
            setTimeout(() => {
                setIsLoading(false);
                navigate("/profil");
            }, 1500);

        } catch (error) {
            console.error("Erreur lors de la connexion : ", error);
            if (error.response.data.message) {
                setErrorMsg(error.response.data.message);
            } else {
                setErrorMsg("Erreur");
            }

            setTimeout(() => setErrorMsg(""), 4000);
            setIsLoading(false)
        }
    };

    return (
        <section className={"section-login"}>
            <h1>Connexion</h1>
            <p className={"login-subtitle"}>Accédez à votre espace client en toute simplicité.</p>

            {isLoading && <p className="global-msg-success">Connexion en cours...</p>}

            {errorMsg && <p className={"global-msg-error login-msg-error"}>{errorMsg}</p>}

            <div className={"global-box"}>
                <form onSubmit={handleSubmit}>
                    <ul className={"login-list"}>
                        <li>
                            <label htmlFor={"login-email"} className={"global-label"}>E-mail : </label>
                            <input type={"email"}
                                   className={"global-input"}
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                                   id={"login-email"}
                                   required
                                   name={"mail"}/>
                        </li>
                        <li>
                            <label htmlFor={"login-password"} className={"global-label"}>Mot de passe : </label>
                            <input type={"password"}
                                   className={"global-input"}
                                   value={mdp}
                                   onChange={(e) => setMdp(e.target.value)}
                                   id={"login-password"}
                                   required
                                   name={"password"}/>
                        </li>

                        <li className={"login-actions"}>
                            <button type={"submit"} className={"global-btn-primary"}>Connexion</button>
                            <p className={"login-link"}>Première visite ?<Link to={`/register`} className={"global-link login-footer-link"}>Créez un compte</Link></p>
                        </li>
                    </ul>
                </form>
            </div>
        </section>
    );
}

export default Login;