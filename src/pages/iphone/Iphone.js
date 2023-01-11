import React from 'react';
import styles from './Iphone.module.css'
import iphoneCard from "../../data/iphoneCard";
import IphoneCard from "../../components/iphone_card/IphoneCard";

const Iphone = () => {
    let iphoneItems;
    if (iphoneCard.length > 0){
        iphoneItems = iphoneCard.map((item,index)=>{
            return(
                <IphoneCard
                    key={index}
                    img_iphone = {item.img_iphone}
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