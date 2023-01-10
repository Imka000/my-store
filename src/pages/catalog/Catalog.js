import React from 'react';
import {Outlet} from 'react-router-dom';

const Catalog = () => {
    return (
        <>
            <h1>Каталог</h1>
            <Outlet/>
        </>
    );
};

export default Catalog;