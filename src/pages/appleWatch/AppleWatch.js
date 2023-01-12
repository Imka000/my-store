import React from 'react';
import styles from "./AppleWatch.module.css";
import watchCard from "../../data/watchCard";
import ProductCard from "../../components/productCard/ProductCard";

const AppleWatch = () => {
    let watchItems;
    if (watchCard.length > 0){
        watchItems = watchCard.map((item,index)=>{
            return(
                <ProductCard
                    key={index}
                    img_url={item.watch_img}
                    name_card={item.name_watch}
                    pryce={item.pryce}
                    pryce_usd={item.pryce_usd}
                />
            )
        })
    }

    return (
        <>
            <h1>Apple Watch</h1>
            <div className={styles.watch_container}>
                {watchItems}
            </div>
        </>
    );
};

export default AppleWatch;