import React from 'react';
import styles from './CatalogList.module.css'

const CatalogList = () => {
    return (
        <>
            <a className={styles.cardIphone} href="http://localhost:3000/catalog/iphone">
                <div>
                    <img
                        src="https://istore.kg/media/category/iphone-14-pro-finish-unselect-gallery-1-202209_GEO_US.webp"/>
                    <p>iPhone</p>
                    <a href="http://localhost:3000/catalog/iphone">Перейти</a>
                </div>
            </a>
            <a className={styles.cardIpad} href="http://localhost:3000/catalog/iPad">
                <div>
                    <img src="https://istore.kg/media/category/ipad-pro-model-select-gallery-2-202212.webp"/>
                    <p>iPad</p>
                    <a href="http://localhost:3000/catalog/iPad">Перейти</a>
                </div>
            </a>
            <a className={styles.cardWatch} href="http://localhost:3000/catalog/apple-watch">
                <div>
                    <img src="https://istore.kg/media/category/watch-card-50-compare-202209_GEO_US.webp"/>
                    <p>Watch</p>
                    <a href="http://localhost:3000/catalog/apple-watch">Перейти</a>
                </div>
            </a>
        </>
    );
};

export default CatalogList;