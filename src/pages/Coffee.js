import React, {useEffect, useState} from 'react';
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import ProductCard from "../components/ProductCard";
import "../styles/Coffee.css"

function Coffee(props) {
    const [coffee, setCoffee] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCoffee = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/produits/cafes`);
                setCoffee(response.data);
            } catch (error) {
                console.error("Erreur de chargement des cafés", error);
            } finally {
                setIsLoading(false); /* on arrête d'afficher les éléments de chargement (squelette)*/
            }
        };

        void fetchCoffee();
    }, []);

    /*console.log(produits);*/
    if (isLoading) {
        return (
            <section>
                <div className={"product-list"}>
                    {Array.from({length : coffee.length}).map((_,i) => (
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
            </section>
        );
    }

    return (
        <section>
            <h3>Liste des Cafés</h3>
            <div className={"product-list"}>
                {coffee.map((produit) => (
                    <div className={"product"}>
                        <ProductCard key={produit.Identifiant_produit} produit={produit}/>
                    </div>)
                )}
            </div>
        </section>
    );
}

export default Coffee;