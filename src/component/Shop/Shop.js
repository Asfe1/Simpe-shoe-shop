
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';


const Shop = () => {
    const [products, SetProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => SetProducts(data))
    }, [])


    const handelAddtocart = (products) => {
        console.log(products);
        const newCart = [...cart, products]
        setCart(newCart);
    }
    return (
        <div className='row g-2 mt-3 mx-2 '  >
            <div className='col-7 col-lg-10 col-md-10 col-sm-8 ' >
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4  row-cols-sm-1 g-4" >
                    {
                        products.map(product => <Product key={product.id} product={product}
                            handelAddtocart={handelAddtocart}></Product>)
                    }
                </div>

            </div>
            <div className='col-5 col-lg-2'>
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;