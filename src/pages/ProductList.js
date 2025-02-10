import React, {useEffect, useState} from 'react';
/* npm install axios */ /* librairie qui facilite échanges avec API */
import axios from "axios";
import ProductCard from "../components/ProductCard";

function ProductList(props) {
    const [produits, setProduits] = useState([]);

    useEffect(() => {
        const fetchProduits = async () => {
            try {
                const response = await axios.get("http://localhost:3001/api/produits");
                setProduits(response.data);
            } catch (error) {
                console.error("Erreur de chargement des produits", error);
            }
        };

        void fetchProduits();
    }, []);

    /*console.log(produits);*/

    return (
        <div>
            <h3>Liste des produits</h3>
            <div className={"product-list"}>
                {produits.map((produit) => (
                    <ProductCard key={produit.Identifiant_produit} produit={produit} />)
                )}
            </div>
        </div>
    );
}

export default ProductList;