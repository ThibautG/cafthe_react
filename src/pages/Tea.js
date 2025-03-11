import React, {useEffect, useState} from 'react';
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import ProductCard from "../components/ProductCard";

function Tea(props) {
    const [tea, setTea] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchTea = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/produits/thes`);
                setTea(response.data);
            } catch (error) {
                console.error("Erreur de chargement des thés", error);
            } finally {
                setIsLoading(false); /* on arrête d'afficher les éléments de chargement (squelette)*/
            }
        };

        void fetchTea();
    }, []);

    /*console.log(produits);*/
    if (isLoading) {
        return (
            <section>
            <div className={"product-list"}>
                {Array.from({length : tea.length}).map((_,i) => (
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
            <h3>Liste des Thés</h3>
            <div className={"product-list"}>
                {tea.map((produit) => (
                    <div className={"product"}>
                        <ProductCard key={produit.Identifiant_produit} produit={produit}/>
                    </div>)
                )}
            </div>
        </section>
    );
}

export default Tea;