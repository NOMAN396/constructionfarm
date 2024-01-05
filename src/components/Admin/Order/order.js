import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../Layout/footer";
import Sidebar from "../Layout/sidebar";

function Order() {
  const [orders, setOrders] = useState([]);
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    status: '',
  });

  useEffect(() => {
    getOrders();
  }, []);

  function getOrders() {
    axios.get(`${global.config.apiUrl}order`).then(function (response) {
      setOrders(response.data.data);
    });
  }

  const deleteOrder = (id) => {
    axios.delete(`${global.config.apiUrl}order/delete/${id}`).then(function () {
      getOrders();
    });
  }

  const clearData = () => {
    setInputs(values => ({ ...values, "id": "", "firstName": "", "lastName": "", "email": "","phone": "", "address": "", "status": "", }))
  }

  // function getOrder(d) {
  //   setInputs(d);
  //   setInputs(values => ({ ...values, }))
  // }

  function getOrder(d) {
    const { id,firstName, lastName, email, address, status } = d;
    setInputs({ firstName, lastName, email, address, status,id });
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${global.config.apiUrl}order/create`, inputs).then(function (response) {
      console.log(response.data);
      getOrders();
      
    });
  }

  return (
    <div className="container7">
      <div className="row">
        <Sidebar />
        <div className="col-9 mt-2">
        <h1 className="text-center bg-success rounded" width="400" height="300">
            <small className="text-white">Orders</small>
          </h1>
          
              <table className="menu">
                <thead className="">
                  <tr className="">
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Menu Items</th>
                    <th>Total Price</th>
                    <th>Order Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orders ? (
                    orders.map((order, key) => (
                      <tr key={key}>
                        <td>{order.id}</td>
                        <td>{order.firstName}</td>
                        <td>{order.lastName}</td>
                        <td>{order.phone}</td>
                        <td>{order.email}</td>
                        <td>{order.address}</td>
                        <td>
                          {Array.isArray(order.items) ? (
                            <ul>
                              {order.items.map((item, index) => (
                                <li key={index}>{item.name} - {item.price}</li>
                              ))}
                            </ul>
                          ) : (
                            "No items available"
                          )}
                        </td>
                        <td>{order.sub_total}</td>
                        <td>{order.status}</td>

                        <td>
                          <button className="btn btn-primary me-2  ms-2 mt-1" data-bs-toggle="modal" data-bs-target="#myModal" onClick={() => getOrder(order)}>Edit</button>
                          <button className="btn btn-danger bg-danger w-60 me-2  ms-2 mt-1" onClick={() => deleteOrder(order.order_id)}>Delete</button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5">No orders available.</td>
                    </tr>
                  )}
                </tbody>
              </table>

              <div className="modal" id="myModal">
        <div className="modal-dialog modal-lg">
          <div className="modal-content bg-dark">
            <div className="modal-header">
              <h4 className="modal-title text-white">Order Data</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={clearData}></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="row">
                  <div className="col-sm-6 w-50">
                    <div className="mb-3">
                      <label className="form-label text-white" htmlFor="firstName">First Name</label>
                      <input value={inputs.firstName} type="text" className="form-control border-secondary" name="firstName" onChange={handleChange} placeholder="First Name" />
                      <input value={inputs.id} type="hidden" name="id" />
                    </div>
                  </div>
                  <div className="col-sm-5">
                    <div className="mb-3">
                      <label className="form-label text-white" htmlFor="lastName">Last Name</label>
                      <input value={inputs.lastName} type="text" className="form-control border-secondary" name="lastName" onChange={handleChange} placeholder="Last Name" />
                    </div>
                  </div>
                  <div className="col-sm-5">
                    <div className="mb-3">
                      <label className="form-label text-white" htmlFor="email">Email</label>
                      <input value={inputs.email} type="text" className="form-control border-secondary" name="email" onChange={handleChange} placeholder="Email" />
                    </div>
                  </div>
                  <div className="col-sm-5">
                    <div className="mb-3">
                      <label className="form-label text-white" htmlFor="address">Address</label>
                      <input value={inputs.address} type="text" className="form-control border-secondary" name="address" onChange={handleChange} placeholder="Address" />
                    </div>
                  </div>
                  <div className="col-sm-5">
                    <div className="mb-3">
                      <label className="form-label text-white" htmlFor="status">Order Status</label>
                      <select name="status" className="form-control border-secondary" value={inputs.status} onChange={handleChange}>
                        <option value="Pending">Select Status</option>
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                      </select>
                    </div>
                  </div>

                </div>
                <div className="row">
                  <div className="col-sm-2">
                    <button type="submit" className="btn btn-primary" id="modelbutton">Submit</button>
                  </div>
                  <div className="col-sm-3">
                    <button type="button" className="btn btn-danger ms-2" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
      
      
      <Footer />
    </div>
  )
}

export default Order;