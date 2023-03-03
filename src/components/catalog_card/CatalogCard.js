import React from 'react';
import styles from "./CatalogCard.module.css";
import {Link} from "react-router-dom";
import {NavLink} from "react-router-dom";

const CatalogCard = (props) => {
    return (
        <div className={styles.catalog_card}>
            <img src={props.img_url}/>
            <div className={styles.card_name}>
                <p>{props.name}</p>
                <Link to={props.link}>Перейти ></Link>
            </div>
        </div>
    );
};

export default CatalogCard;