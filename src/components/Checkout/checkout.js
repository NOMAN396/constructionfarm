        import React, { useState } from "react";
        import Footer from "../Footer/footer";
        import { useCart } from "react-use-cart";
        import { useNavigate } from 'react-router-dom';
      

        function Checkout() {
        const { items, cartTotal, emptyCart } = useCart();

        const discount = 0; // Define discount with an initial value of 0
        const discountedTotal = cartTotal - discount;

        const navigate = useNavigate();
        const [paymentMethods, setPaymentMethods] = useState({
        createAccount: false,
        chequePayment: false,
        paypal: false,
        });
        
      
        const placeOrder = async (e) => {

            try {
                const orderData = {
                    firstName: document.getElementById('firstName').value,
                    lastName: document.getElementById('lastName').value,
                    phone: document.getElementById('phone').value,
                    email: document.getElementById('email').value,
                    address: document.getElementById('address').value,
                    items: items,
                    sub_total: cartTotal.toFixed(2),
                    status: 'Pending',
                    id:"",
                  };
                const response = await fetch(`${global.config.apiUrl}order/create`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(orderData),
                });
                const data = await response.json();
                console.log(data);
                if (data.status === 1) {
                  alert('Order placed successfully!');
                  emptyCart();
                  //navigate('/ordersuccess');
                } else {
                  alert('Failed to place the order. Please try again.');
                }
              } catch (error) {
                // Handle errors here, e.g., network issues or server errors
                console.error(error);
              }
        };

        return (
        <div>
      

        {/* Breadcrumb Begin */}
                <div className="breadcrumb-option">
                <div className="container">
                <div className="row">
                <span className="pt-5 text-danger"><h3>Checkout Page</h3></span>
                <div className="col-lg-6 pt-5">
                        <div className="breadcrumb__links">
                        <a href="/" className="btn btn-primary"><i className="fa fa-home"></i> Home</a>
                        <a href="/shop" className="btn btn-success"><i className="fa fa-shopping-cart"></i> Shop</a>
                        <a href="/cart" className="btn btn-secondary"><i className="fa fa-shopping-cart"></i> My Cart</a>
                      
                        </div>
                </div>
                </div>
                </div>
                </div>
        {/* Breadcrumb End */}

        {/* Checkout Section Begin */}
<section className="checkout spad">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <h6 className="coupon__link"><span className="icon_tag_alt"></span> <a href="#">Have a coupon?</a> Click
                   </h6>
            </div>
            </div>
                
                    <div className="row">
                        <div className="col-lg-7">
                            <h5>Billing detail</h5>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="checkout__form__input">
                                        <p>First Name <span>*</span></p>
                                        <input type="text" name="firstName"  id="firstName" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="checkout__form__input">
                                        <p>Last Name <span>*</span></p>
                                        <input type="text" name="lastName"  id="lastName" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                   
                                    <div className="checkout__form__input">
                                        <p>Address <span>*</span></p>
                                        <input type="text" placeholder="Your  Address" name="address"  id="address" />
                                        
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="checkout__form__input">
                                        <p>Phone <span>*</span></p>
                                        <input type="text" name="phone"  id="phone" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="checkout__form__input">
                                        <p>Email <span>*</span></p>
                                        <input type="text" name="email"  id="email"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="checkout__order">
                                <h5>Your order</h5>
                                <div className="checkout__order__product">
                                    <table className="w-100 table">
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th className="text-center">Price</th>
                                                <th className="text-center">Quantity</th>
                                                <th className="text-right">Total</th>
                                            </tr>
                                        </thead>
        <tbody>
            {items.map((item, index) => (
                <tr key={index}>
                    <td>{item.title}</td>
                    <td className="text-center">
                        {typeof item.price === 'number' ? `${item.price.toFixed(2)}`+"৳" : `${item.price}` +"৳"}
                    </td >
                    <td className="text-center"> {item.quantity}</td>
                    <td className="text-right">
                        {typeof item.itemTotal === 'number' ? `${item.itemTotal.toFixed(2)}`+"৳" : `${item.itemTotal}`+"৳"}
                    </td>
                </tr>
            ))}
        </tbody>
                                    </table>
                                </div>
                                <div className="checkout__order__total">
                                    <ul>
                                        {/* <li>Subtotal <span>{"$" + cartTotal.toFixed(2)}</span></li> */}
                                        <li className=""><h5>Total</h5><span>{discountedTotal.toFixed(2)+ "৳"}</span></li>
                                    </ul>
                                </div>
                                
                                
                                    <button type="submit" className="btn btn-primary" onClick={placeOrder}>
                                        Place Order
                                    </button>
                                
                            </div>
                        </div>
                    </div>
               
            </div>
        </section>
        {/* Checkout Section End */}

        <Footer />
        </div>
        );
        }

        export default Checkout; 