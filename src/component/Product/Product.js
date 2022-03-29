import React from 'react';
import './Product.css'


const Product = (props) => {
    const { name, img, seller, price, ratings } = props.product;
    console.log(props.product)

    return (


        <div className="col " >
            <div className="card" >
                <img src={img} height="300px" width="300" className=" mx-auto img-fluid" alt="..." />
                <div className="card-body">
                    <h6 className="">{name}</h6>
                    <h6>Price: ${price}</h6>
                    <h6>Manufacturer: {seller}</h6>
                    <h6>Rating: {ratings} star(s)</h6>
                </div>
                <button id="button" onClick={() => props.handelAddtocart(props.product)}>Add to cart</button>
            </div>
        </div>


    );
};

export default Product;