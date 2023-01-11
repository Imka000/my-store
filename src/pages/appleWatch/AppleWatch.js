import React from 'react';
import styles from "./AppleWatch.module.css";
import watchCard from "../../data/watchCard";
import WatchCard from "../../components/watch_card/WatchCard";

const AppleWatch = () => {
    let watchItems;
    if (watchCard.length > 0){
        watchItems = watchCard.map((item,index)=>{
            return(
                <WatchCard
                    key={index}
                    img_url={item.watch_img}
                    name={item.name_watch}
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