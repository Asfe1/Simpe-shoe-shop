import React from 'react';
import '../Header/Header.css'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light header">
                <div className="container-fluid ">
                    <a className="navbar-brand fw-bold fs-2 ps-4 " style={{ color: "white" }} href="/eShop">Footwears</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" style={{ backgroundColor: "white" }}>
                        <span className="navbar-toggler-icon" style={{ backgroundColor: "white" }}></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav pe-4" id='menu'>
                            <a className="nav-link active" aria-current="page" href="/shop">shop</a>
                            <a className="nav-link" href="/orders">orders</a>
                            <a className="nav-link" href="inventory">inventory</a>
                            <a className="nav-link" href="/abount">about</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>


    );
};

export default Header;

