import React from 'react';
import styles from "./Ipad.module.css";
import ipadCard from "../../data/ipadCard";
import ProductCard from "../../components/productCard/ProductCard";

const Ipad = () => {
    let ipadItems;
    if (ipadCard.length > 0){
        ipadItems = ipadCard.map((item, index)=>{
            return(
                <ProductCard
                    key={index}
                    img_url={item.img_ipad}
                    name_card={item.name_ipad}
                    pryce={item.pryce}
                    pryce_usd={item.pryce_usd}
                />
            )
        })
    }

    return (
        <>
            <h1>Айпады</h1>
            <div className={styles.ipad_container}>
                {ipadItems}
            </div>
        </>
    );
};

export default Ipad;