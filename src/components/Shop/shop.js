import React, { useState, useEffect } from 'react';
import Header from "../Header/header";
import Footer from "../Footer/footer";
import './shop.css';
import { Shopservice } from '../../apiservice/shop';
import axios from 'axios';
import { useCart } from "react-use-cart"; /* Import useCart */

function Shop() {
  const [shopData, shop2Data] = useState([]);
  const [products, setProducts] = useState([]);
  const { addItem } = useCart(); /* Initialize useCart hook */

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Shopservice();
        shop2Data(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
    getDatas();
  }, []);

  function getDatas() {
    axios.get('http://localhost/reactcrud/shop.php')
      .then(function (response) {
        setProducts(response.data.data);
      });
  }

  return (
    <div>
      <main id="main">
        <div className="untree_co-section product-section before-footer-section">
          <Header />
          <div className="container">
            <div className='btn btn-success'><a href="./cart">My Cart</a></div><br/><br/><br/>
            <div className="row">
              {/* <!-- Start Column 1 --> */}
              {products && products.map((shop, man) => (
                <div className="col-12 col-md-4 col-lg-3 mb-5" key={man}>
                  <a className="product-item" href="#">
                    <img src={shop.image} className="img-fluid product-thumbnail" alt={shop.title} />
                    <h3 className="product-title">{shop.title}</h3>
                    <strong className="product-price">{shop.price}৳</strong>
                    <a href="javascript:void(0)" onClick={() => addItem(shop)}>
                      <br/>
                      <span className="">Add to cart</span>
                    </a>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Shop;
