import React, { useEffect, useState } from 'react';
import axios from "axios";
import ProductCard from "../components/ProductCard";
import "../styles/ProductList.css";
import "../styles/SearchPage.css"

function SearchPage() {
    const [produits, setProduits] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProduits = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/produits`);
                setProduits(response.data);
            } catch (error) {
                console.error("Erreur de chargement des produits", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProduits();
    }, []);

    const filteredProduits = produits.filter((produit) =>
        produit.Designation_produit.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className={"global-section section-search-page"}>
            <h1 className={"global-section-title"}>Recherche</h1>
            <p className={"global-section-subtitle"}>Recherchez un produit par son nom ou type</p>

            <label htmlFor={"search"} className={"sr-only"}>Rechercher un produit</label>
            <input
                type={"text"}
                placeholder={"Rechercher un produit..."}
                className={"global-input"}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {isLoading ? (
                <p>Chargement...</p>
            ) : (
                <div className={"product-list"}>
                    {filteredProduits.length > 0 ? (
                        filteredProduits.map((produit) => (
                            <div className={"product"} key={produit.Identifiant_produit}>
                                <ProductCard produit={produit}/>
                            </div>
                        ))
                    ) : (
                        <p className={"no-product"}>Aucun produit trouvé.</p>
                    )}
                </div>
            )}
        </section>
    );
}

export default SearchPage;
