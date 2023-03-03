import React from 'react';
import styles from "./ProductCard.module.css";

const ProductCard = ({data, category}) => {

    const getGoods = () => {
        const json = localStorage.getItem('cart');
        let goods_object = {};
        if (json){
            goods_object = JSON.parse(json);
        }

        return goods_object;
    }

    const addCart = () => {
        const object_in_localStorage = getGoods();
        const goods = {
            ...object_in_localStorage,
            [category]:{
                ...object_in_localStorage[category],
                [data.id]:data
            }
        }

        localStorage.setItem('cart', JSON.stringify(goods));
    }

    return (
        <div className={styles.productCard}>
            {/*<h6 className={styles.sale}>АКЦИЯ</h6>*/}
            <img id='img' src={data.img}/>
            <div className={styles.cardName}>
                <h5 id='name'>{data.name}</h5>
                <p className={styles.priceSale} id='price'>{data.price}</p>
                {/*<p>{props.price_usd}</p>*/}
                <button className={styles.btn} onClick={addCart}>Выбрать</button>
            </div>
        </div>
    );
};

export default ProductCard;