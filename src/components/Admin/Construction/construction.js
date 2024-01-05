import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../Layout/footer";
import Sidebar from "../Layout/sidebar";
import './construction.css';

export default function Construction() {
  const [products, setProducts] = useState([]);
  const [inputs, setInputs] = useState({});

  useEffect(() => {
    getDatas();
  }, []);

  function getDatas() {
    axios.get('http://localhost/reactcrud/Construction/construction_list.php')
      .then(function (response) {
        setProducts(response.data.data);
      });
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  }

  const onFileChange = (e) => {
    let files = e.target.files;
    let fileReader = new FileReader();
    fileReader.readAsDataURL(files[0]);

    fileReader.onload = (event) => {
      const name = "cimage";
      const value = event.target.result
      setInputs(values => ({ ...values, [name]: value }));
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost/reactcrud/Construction/construction_create.php', inputs)
      .then(function (response) {
        console.log(response.data)
        getDatas();
        document.getElementById('modelbutton').click();
      });
  }

  /* for update */
  function getConstructionEdit(id) {
    document.getElementById('modelbutton').click();
    axios.get(`http://localhost/reactcrud/Construction/construction_edit.php?id=${id}`)
      .then(function (response) {
        setInputs(response.data);
        setInputs(values => ({ ...values, "cimage": "" }))
      });
  }

  const deleteUser = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this project?"
    );
    if (confirmDelete) {
      axios
        .delete(`http://localhost/reactcrud/Construction/construction_delete.php?id=${id}`)
        .then(function (response) {
          getDatas();
        });
    }
  };

  const clearData = () => {
    setInputs({
      "id": "",
      "cimage": "",
      "title": "",
      "description": "",
    });
  }

  return (
    <div className="container7">
      <div className="row">
        <Sidebar />
        <div className="col-9 mt-2">
          <h1 className="text-center bg-success rounded" width="400" height="300">
            <small className="text-white">Pending Constructions</small>
          </h1>
          <button
            onClick={clearData}
            id="modelbutton"
            type="button"
            className="btn btn-info btn-sm float-end"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
          >
            Add Project
          </button>

          <table className="table">
            <thead>
              <tr>
                <th>SL</th>
                <th>Image</th>
                <th>Title</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products && products.map((d, key) => (
                <tr key={key}>
                  <td>{d.id}</td>
                  <td><img src={d.image} alt="Product Image" width={50} /></td>
                  <td>{d.title}</td>
                  <td>{d.description}</td>
                  <td>
                    <a
                      href="javascript:void(0)"
                      className="edit"
                      data-bs-toggle="modal"
                      data-bs-target="#myModal"
                      onClick={() => getConstructionEdit(d.id)}
                    >
                      <span className="edit">Edit</span>
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="delete"
                      onClick={() => deleteUser(d.id)}
                    >
                      <span className="delete">Delete</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="modal fade" id="myModal">
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Construction</h4>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                  ></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="mb-3">
                          <label className="form-label">Description</label>
                          <input
                            value={inputs.description}
                            type="text"
                            className="form-control"
                            name="description"
                            onChange={handleChange}
                          />
                          <input value={inputs.id} type="hidden" name="id" />
                        </div>
                      </div>

                      <div className="col-sm-4">
                        <div className="mb-3">
                          <label className="form-label">Title</label>
                          <input
                            type="text"
                            className="form-control"
                            name="title"
                            value={inputs.title}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="col-sm-4">
                        <div className="mb-3">
                          <label className="form-label">Image</label>
                          <input
                            type="file"
                            className="form-control"
                            name="cimage"
                            onChange={onFileChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-3 offset-sm-3">
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                      <div className="col-sm-3">
                        <button
                          type="button"
                          className="btn btn-danger"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
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
  );
}
