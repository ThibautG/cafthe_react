import React, {useContext, useEffect, useState} from 'react';
import "../styles/CommandDetail.css";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import { AuthContext } from "../context/AuthContext";


function CommandDetail({id}) {

    const [detail, setDetail] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { token } = useContext(AuthContext);

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                // route get détail d'une commande avec son id
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/commandes/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                    );
                setDetail(response.data);
            } catch (error) {
                console.error("Erreur de chargement de la commande", error);
            } finally {
                setIsLoading(false); /* on arrête d'afficher les éléments de chargement (squelette)*/
            }
        };

        void fetchDetail();
    }, [id]);


    console.log(detail)

    if (isLoading) {
        return (
            <div className={"product-list"}>
                {Array.from({length: detail.length}).map((_, i) => (
                    <div key={i} className={"product-skeleton"}>
                        {/* image */}
                        <Skeleton height={200} width={300}/>

                        <div style={{marginTop: "10px"}}>
                            <Skeleton height={20} width={"70%"}/>
                        </div>

                        <div style={{marginTop: "10px"}}>
                            <Skeleton height={20} width={"40%"}/>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    if (!detail || detail.length === 0) {
        return <p>La commande est vide ou inexistante.</p>;
    }


    return (
        <div className={"command-detail"}>
            <h2 className={"command-detail-title"}>Détails de la commande # {id}</h2>
            <div className={"command-detail-list"}>
                <div className={"command-detail-info"}>
                    <div className={"command-info-date"}>
                        <p><strong>Date :</strong> {(detail[0].Date_commande).split('T')[0]}</p>
                        {/*on utilise premier objet présent dans detail[] car la date et le total sont les mêmes partout*/}
                        <p><strong>Total :</strong> <span className={"command-total"}>{detail[0].Montant_ttc_commande} €</span></p>
                    </div>
                    <div className={"command-info-id"}>
                        <p><strong>Statut :</strong> {detail[0].Statut_commande}</p>
                        <p><strong>Type :</strong> {detail[0].Type_commande}</p>
                    </div>
                </div>

                {detail.map((item) => (
                        <div className={"command-detail-card"} key={item.Identifiant_produit}>
                            <div className={"command-detail-card-left"}>
                                <img src={item.url_img_produit} alt={item.Designation_produit}
                                     className={"command-product-img"}/>
                            </div>

                            <div className={"command-detail-card-center"}>
                                <p><strong>{item.Designation_produit}</strong></p>
                                <p>Qté : {item.Quantite_produit_ligne_commande}</p>
                                <p><em>{item.Type_conditionnement}</em></p>
                            </div>

                            <div className={"command-detail-card-price"}>
                                <p>Prix unitaire : {item.Prix_unitaire_ttc_produit_ligne_commande}€</p>
                                <p>Prix total
                                    : <strong>{(item.Prix_unitaire_ttc_produit_ligne_commande * item.Quantite_produit_ligne_commande).toFixed(2)} €</strong>
                                </p>
                            </div>
                        </div>
                    )
                )}

                {/*<Link to={`/commandes/clients/${user.id}`} className={"details-btn"}>
                    retour aux commandes
                </Link>*/}
            </div>
        </div>
    );
}

export default CommandDetail;