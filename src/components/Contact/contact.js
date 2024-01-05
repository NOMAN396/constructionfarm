import React from 'react';
import Header from '../Header/header';
import Footer from "../Footer/footer";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Contact() {
  const navigate = useNavigate();
    const [inputs, setInputs] = useState([]);
    const [smessage, setSmessage] = useState([]);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost/reactapi/create_user.php', inputs).then(function(response){
            console.log(response.data);
            setSmessage("Data Saved Successfully");
            event.target.reset();
            navigate('/contact');
        });
    }
  return (
    <div>
      <Header/>
       <main id="main">
{/* 
<!-- ======= Breadcrumbs ======= --> */}
<div className="breadcrumbs d-flex align-items-center" style={{ backgroundImage:'url(assets/img/breadcrumbs-bg.jpg)'}}>
  <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">

    <h2>Contact</h2>
    <ol>
      <li><a href="./">Home</a></li>
      <li>Contact</li>
    </ol>

  </div>
</div>
{/* <!-- End Breadcrumbs --> */}

{/* <!-- ======= Contact Section ======= --> */}
<section id="contact" className="contact">
  <div className="container" data-aos="fade-up" data-aos-delay="100">

    <div className="row gy-4">
      <div className="col-lg-6">
        <div className="info-item  d-flex flex-column justify-content-center align-items-center">
          <i className="bi bi-map"></i>
          <h3>Our Address</h3>
          <p>A108 Adam Street, New York, NY 535022</p>
        </div>
      </div>
      {/* <!-- End Info Item --> */}

      <div className="col-lg-3 col-md-6">
        <div className="info-item d-flex flex-column justify-content-center align-items-center">
          <i className="bi bi-envelope"></i>
          <h3>Email Us</h3>
          <p>contact@example.com</p>
        </div>
      </div>
      {/* <!-- End Info Item --> */}

      <div className="col-lg-3 col-md-6">
        <div className="info-item  d-flex flex-column justify-content-center align-items-center">
          <i className="bi bi-telephone"></i>
          <h3>Call Us</h3>
          <p>+1 5589 55488 55</p>
        </div>
      </div>
      {/* <!-- End Info Item --> */}

    </div>

    <div className="row gy-4 mt-1">

      <div className="col-lg-6 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
          frameborder="0" style= {{border:"0", width: "100%", height: "384px"}} allowfullscreen></iframe>
      </div> 
      {/* <!-- End Google Maps --> */}

      <div className="col-lg-6">
        <form onSubmit={handleSubmit} method="post" role="form" className="php-email-form">
          <div className="row gy-4">
            <div className="col-lg-6 form-group">
              <input type="text" onChange={handleChange} name="name" className="form-control" id="name" placeholder="Your Name" required/>
            </div>
            <div className="col-lg-6 form-group">
              <input type="email" onChange={handleChange} className="form-control" name="email" id="email" placeholder="Your Email" required/>
            </div>
          </div>
          <div className="form-group">
            <input type="text" onChange={handleChange} className="form-control" name="subject" id="subject" placeholder="Subject" required/>
          </div>
          <div className="form-group">
            <textarea className="form-control" onChange={handleChange} name="message" rows="5" placeholder="Message" required></textarea>
          </div>
          <div className="my-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your message has been sent. Thank you!</div>
          </div>
          <div className="text-center"><button type="submit">Send Message</button></div>
        </form>
        {smessage && (
          <div className='alert text-success'>
            {smessage}
          </div>
        )}
      </div>
      {/* <!-- End Contact Form --> */}

    </div>

  </div>
</section>
{/* <!-- End Contact Section --> */}

</main>
<Footer/>
    </div>
  );
}

export default Contact;