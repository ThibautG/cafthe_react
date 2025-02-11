import React, {useState, useEffect} from 'react';
import "../styles/Login.css"
import axios from "axios";

function Login(props) {
    const [email, setEmail] = useState("");
    const [mdp, setMdp] = useState("");
    const [erroMsg, setErrorMsg] = useState("");

    const handleSubmit = async (e) => { // fonction asynchrone car on va aller chercher les données dans l'api
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3001/api/login",
                    {
                        email, mdp,
                    },
            );

            const {token, client} = response.data;
        } catch (error) {}
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <ul className={"login-list"}>
                    <li>
                        <label htmlFor="email">E-mail : </label>
                        <input type="email"
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                               id="email"
                               required
                               name="user_mail"/>
                    </li>
                    <li>
                        <label htmlFor="password">Mot de passe : </label>
                        <input type="password"
                               value={mdp}
                               onChange={(e) => setMdp(e.target.value)}
                               id="password"
                               required
                               name="user_password"/>
                    </li>
                    <li className="button">
                        <button type="submit">Connexion</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}

export default Login;