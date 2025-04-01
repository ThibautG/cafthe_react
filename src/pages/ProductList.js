import React, {useEffect, useState} from 'react';
/* npm install axios */ /* librairie qui facilite échanges avec API */
import axios from "axios";
import ProductCard from "../components/ProductCard";
import "../styles/ProductList.css";
/* npm install react-loading-skeleton */
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ProductList({routeAPI}) {
    const [produits, setProduits] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProduits = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}${routeAPI}`);
                setProduits(response.data);
            } catch (error) {
                console.error("Erreur de chargement des produits", error);
            } finally {
                setIsLoading(false); /* on arrête d'afficher les éléments de chargement (squelette)*/
            }
        };

        void fetchProduits();
    }, [routeAPI]);

    /*console.log(produits);*/
    if (isLoading) {
        return (
            <div className={"product-list"}>
                {Array.from({length : produits.length}).map((_,i) => (
                    <div key={i} className={"product-skeleton"}>
                        {/* image */}
                        <Skeleton height={200} width={300}/>

                        <div style={{marginTop: "10px"}}>
                            <Skeleton height={20} width={"70%"} />
                        </div>

                        <div style={{marginTop: "10px"}}>
                            <Skeleton height={20} width={"40%"} />
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div>
            {/*<h3>Liste des produits</h3>*/}
            <div className={"product-list"}>
                {produits.map((produit) => (
                    <div className={"product"}>
                    <ProductCard key={produit.Identifiant_produit} produit={produit} />
                    </div>)
                )}
            </div>
        </div>
    );
}

export default ProductList;