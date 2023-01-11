import React from 'react';
import styles from './CatalogList.module.css'
import CatalogCard from "../../components/catalog_card/CatalogCard";
import catalogCard from "../../data/catalogCard";

const CatalogList = () => {
    let cardItems;
    if (catalogCard.length > 0){
        cardItems = catalogCard.map((item,index)=>{
          return(
                  <CatalogCard
                      key = {index}
                      img_url = {item.img}
                      name = {item.name}
                      link = {item.link}
                  />
          )
        })
    }
    return (
        <>
            <div className={styles.catalog_container}>
                {cardItems}
            </div>
        </>
    );
};

export default CatalogList;