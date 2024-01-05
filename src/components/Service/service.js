import React from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";

function Service() {
  return (
    <div>
      <Header/>
       <main id="main">
       

{/* <!-- ======= Breadcrumbs ======= --> */}
<div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: 'url(assets/img/breadcrumbs-bg.jpg)'}}>
  <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">

    <h2>Service Details</h2>
    <ol>
      <li><a href="./">Home</a></li>
      <li>Service Details</li>
    </ol>

  </div>
</div>
{/* <!-- End Breadcrumbs --> */}

{/* <!-- ======= Service Details Section ======= --> */}
<section id="service-details" className="service-details">
  <div className="container" data-aos="fade-up" data-aos-delay="100">

    <div className="row gy-4">

      <div className="col-lg-4">
        <div className="services-list">
          <a href="#" className="active">Remodeling</a>
          <a href="#">Construction</a>
          <a href="#">Product Management</a>
          <a href="#">Repairs</a>
          <a href="#">Design</a>
        </div>

        <h4>Enim qui eos rerum in delectus</h4>
        <p>Nam voluptatem quasi numquam quas fugiat ex temporibus quo est. Quia aut quam quod facere ut non
          occaecati ut aut. Nesciunt mollitia illum tempore corrupti sed eum reiciendis. Maxime modi rerum.</p>
      </div>

      <div className="col-lg-8">
        <img src="assets/img/services.jpg" alt="" className="img-fluid services-img"/>
        <h3>Temporibus et in vero dicta aut eius lidero plastis trand lined voluptas dolorem ut voluptas</h3>
        <p>
          Blanditiis voluptate odit ex error ea sed officiis deserunt. Cupiditate non consequatur et doloremque
          consequuntur. Accusantium labore reprehenderit error temporibus saepe perferendis fuga doloribus vero. Qui
          omnis quo sit. Dolorem architecto eum et quos deleniti officia qui.
        </p>
        <ul>
          <li><i className="bi bi-check-circle"></i> <span>Aut eum totam accusantium voluptatem.</span></li>
          <li><i className="bi bi-check-circle"></i> <span>Assumenda et porro nisi nihil nesciunt voluptatibus.</span>
          </li>
          <li><i className="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea</span></li>
        </ul>
        <p>
          Est reprehenderit voluptatem necessitatibus asperiores neque sed ea illo. Deleniti quam sequi optio iste
          veniam repellat odit. Aut pariatur itaque nesciunt fuga.
        </p>
        <p>
          Sunt rem odit accusantium omnis perspiciatis officia. Laboriosam aut consequuntur recusandae mollitia
          doloremque est architecto cupiditate ullam. Quia est ut occaecati fuga. Distinctio ex repellendus eveniet
          velit sint quia sapiente cumque. Et ipsa perferendis ut nihil. Laboriosam vel voluptates tenetur nostrum.
          Eaque iusto cupiditate et totam et quia dolorum in. Sunt molestiae ipsum at consequatur vero. Architecto
          ut pariatur autem ad non cumque nesciunt qui maxime. Sunt eum quia impedit dolore alias explicabo ea.
        </p>
      </div>

    </div>

  </div>
</section>
{/* <!-- End Service Details Section --> */}

</main>
<Footer/>
    </div>
  );
}

export default Service;