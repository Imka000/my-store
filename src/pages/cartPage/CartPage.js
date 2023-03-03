import React, {useEffect, useState} from 'react';

const CartPage = () => {
    const [goods, setGoods] = useState([]);

    const getGoods = () => {
        const object_from_localStorage = JSON.parse(localStorage.getItem('cart'));
        let arr = []

        if (object_from_localStorage) {
            const arr_localStorage = Object.values(object_from_localStorage);

            arr_localStorage.forEach((item) => {
                let new_arr = Object.values(item);
                if (new_arr.length > 0) {
                    new_arr.forEach(elem => arr.push(elem));
                }
            })

            setGoods(arr);
        }
    }

    useEffect(getGoods, [])
    return (
        <>
            <h1>Корзина</h1>
            {
                goods.map(item => {
                    return <p>{item.name}</p>
                })
            }
        </>
    );
};

export default CartPage;