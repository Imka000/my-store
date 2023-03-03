import React, {useEffect, useState} from 'react';
import styles from './ProductsPage.module.css';
import {useParams} from 'react-router-dom'
import ProductCard from "../../components/productCard/ProductCard";
import {urls} from "../../data/constants";

const ProductsPage = () => {
    const params = useParams();
    const [products, setProducts] = useState([]);

    const getProduct = () => {
        let url;

        if (params.product === 'iphone'){
            url = 'http://localhost:3001/iphones';
        } else if(params.product === 'ipad'){
            url = 'http://localhost:3001/ipads';
        } else if (params.product === 'watch'){
            url = 'http://localhost:3001/watchs';
        }

        fetch(url)
            .then(response => response.json())
            .then(data => setProducts(data))
    }
    
    useEffect(getProduct, [])

    return (
        <div className='container'>
            <div className={styles.products_container}>
                <h1>{params.product}</h1>
            {
                products.map(item =>{
                    return(
                        <ProductCard
                            key={item.id}
                            category={params.product}
                            data={item}
                        />
                    )
                })
            }
            </div>
        </div>
    );
};

export default ProductsPage;