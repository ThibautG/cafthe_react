import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";

function ProductDetails(props) {
    const {id} = useParams();

    const [produit, setProduit] = useState([]);

    useEffect(() => {
        const fetchProduits = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/produit/${id}`);
                setProduit(response.data);
            } catch (error) {
                console.error("Erreur de chargement du produit", error);
            }
        };

        void fetchProduits();
    }, [id]);

    /*console.log(produit);*/

    return (
        <div className={"product-details"}>
            <img src={produit.url_img_produit} alt={"produit"}/>
            <h3>Désignation : {produit.Designation_produit}</h3>
            <p>Description : {produit.Description_produit}</p>
            <p>Conditionnement : {produit.Type_conditionnement}</p>
            <p>Prix TTC : {produit.Prix_ttc_produit}€</p>
            <Link to={`/`} className={"details-btn"}>
                Retour à l'accueil
            </Link>
        </div>
    );
}

export default ProductDetails;