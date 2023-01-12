import React from 'react';
import styles from "./ProductCard.module.css";

const ProductCard = (props) => {
    return (
        <div className={styles.productCard}>
            <img src={props.img_url}/>
            <div className={styles.cardName}>
                <h5>{props.name_card}</h5>
                <p>{props.pryce}</p>
                <p>{props.pryce_usd}</p>
                <button className={styles.btn}>Выбрать</button>
            </div>
        </div>
    );
};

export default ProductCard;