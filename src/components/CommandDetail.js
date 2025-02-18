import React, {useEffect, useState} from 'react';
import "../styles/CommandDetail.css"
import {useParams} from "react-router-dom";
import axios from "axios";

function CommandDetail(props) {
    const {id} = useParams();

    const [detail, setDetail] = useState([]);

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/commandes/${id}`);
                setDetail(response.data);
            } catch (error) {
                console.error("Erreur de chargement de la commande", error);
            }
        };

        void fetchDetail();
    }, [id]);

    console.log(detail)

    return (
        <div>Coucou les détails</div>
    );
}

export default CommandDetail;