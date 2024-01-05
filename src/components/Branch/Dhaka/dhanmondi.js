import React from "react";
import Header from "../../Header/header";
import Footer from "../../Footer/footer";

function dhanmondi() {

    return(
        <div>
            <Header/>
            <div class="breadcrumbs d-flex align-items-center" style={{backgroundImage: 'url(assets/img/breadcrumbs-bg.jpg)'}}>
  <div class="container position-relative d-flex flex-column align-items-center" data-aos="fade">

    <h2>Dhanmondi Branch</h2>
    <ol>
      <li><a href="./">Home</a></li>
      <li><a href ="#">Branch Details</a></li>
    </ol>

  </div>
</div>
            <Footer/>
        </div>
    )
}
export default dhanmondi;