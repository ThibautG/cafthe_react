import React, {useEffect, useState} from 'react';
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import ProductCard from "../components/ProductCard";

function Accessories(props) {
    const [accessory, setAccessory] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchAccessory = async () => {
            try {
                const response = await axios.get("http://localhost:3001/api/produits/accessoires");
                setAccessory(response.data);
            } catch (error) {
                console.error("Erreur de chargement des accessoires", error);
            } finally {
                setIsLoading(false); /* on arrête d'afficher les éléments de chargement (squelette)*/
            }
        };

        void fetchAccessory();
    }, []);

    /*console.log(produits);*/
    if (isLoading) {
        return (
            <section>
            <div className={"product-list"}>
                {Array.from({length : accessory.length}).map((_,i) => (
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
            <h3>Liste des Accessoires</h3>
            <div className={"product-list"}>
                {accessory.map((produit) => (
                    <div className={"product"}>
                        <ProductCard key={produit.Identifiant_produit} produit={produit}/>
                    </div>)
                )}
            </div>
        </section>
    );
}

export default Accessories;