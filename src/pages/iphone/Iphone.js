import React from 'react';
import styles from './Iphone.module.css'
import iphoneCard from "../../data/iphoneCard";
import ProductCard from "../../components/productCard/ProductCard";

const Iphone = () => {
    let iphoneItems;
    if (iphoneCard.length > 0){
        iphoneItems = iphoneCard.map((item,index)=>{
            return(
                <ProductCard
                    key={index}
                    img_url = {item.img_iphone}
                    name_card = {item.name_card}
                    pryce = {item.pryce}
                    pryce_usd = {item.pryce_usd}
                />
            )
        })
    }
    return (
        <>
            <h1>Айфоны</h1>
            <div className={styles.iphoneContainer}>
                {iphoneItems}
            </div>
        </>
    );
};

export default Iphone;