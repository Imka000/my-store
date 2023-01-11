import React from 'react';
import styles from "./CatalogCard.module.css";

const CatalogCard = (props) => {
    return (
        <div className={styles.catalog_card}>
            <img src={props.img_url}/>
            <div className={styles.card_name}>
                <p>{props.name}</p>
                <a href={props.link}>Перейти ></a>
            </div>
        </div>
    );
};

export default CatalogCard;