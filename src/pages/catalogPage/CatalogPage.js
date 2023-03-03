import React, {useEffect, useState} from 'react';
import styles from './CatalogPage.module.css'
import CatalogCard from "../../components/catalog_card/CatalogCard";
import catalogCard from "../../data/catalogCard";
import UsersPage from "../usersPage/UsersPage";
import data from "bootstrap/js/src/dom/data";

const CatalogPage = () => {
    // let cardItems;
    //       if (catalogCard.length > 0) {
    //         cardItems = catalogCard.map((item, index) => {
    //             return (
    //                 <CatalogCard
    //                     key={index}
    //                     img_url={item.img}
    //                     name={item.name}
    //                     link={item.link}
    //                 />
    //             )
    //         })
    // }
    const [catalog, setCatalog] = useState([]);

    const getCatalog = () => {
            const url = "http://localhost:3001/catalog";

            fetch(url)
                .then(response => response.json())
                .then(data => setCatalog(data))
    }

    useEffect(getCatalog, []);

    return (
        <>
            <div className={styles.catalog_container}>
                {
                    catalog.map(item =>{
                        return(
                            <CatalogCard
                                key={item.id}
                                img_url={item.img_url}
                                name={item.name}
                                link={item.name}
                            />
                        )
                    })
                }
            </div>
            {/*    {cardItems[0]}*/}
            {/*    {cardItems[1]}*/}
            {/*    {cardItems[2]}*/}
            {/*</div>*/}
            {/*<div className={styles.catalog_container2}>*/}
            {/*    {cardItems[3]}*/}
            {/*</div>*/}
        </>
    );
};

export default CatalogPage;