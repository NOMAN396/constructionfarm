import React from "react";
import Header from '../Header/header';
import Footer from '../Footer/footer';

function Project(){
  return(
    <div>
      <Header/>
 <main id="main">

{/* <!-- ======= Breadcrumbs ======= --> */}
<div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: 'url(assets/img/breadcrumbs-bg.jpg)'}}>
  <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">

    <h2>Project Details</h2>
    <ol>
      <li><a href="./">Home</a></li>
      <li>Project Details</li>
    </ol>

  </div>
</div>

<section id="projects" className="projects">
      <div className="container" data-aos="fade-up">

        <div className="section-header">
          <h2>Our Projects</h2>
          <p>Consequatur libero assumenda est voluptatem est quidem illum et officia imilique qui vel architecto
            accusamus fugit aut qui distinctio</p>
        </div>
        
        <div className="portfolio-isotope" data-portfolio-filter="*" data-portfolio-layout="masonry"
          data-portfolio-sort="original-order">

          <ul className="portfolio-flters" data-aos="fade-up" data-aos-delay="100">
            <li data-filter="*" className="filter-active">All</li>
            <li data-filter=".filter-remodeling">Remodeling</li>
            <li data-filter=".filter-construction">Construction</li>
            <li data-filter=".filter-repairs">Repairs</li>
            <li data-filter=".filter-design">Design</li>
          </ul>
          <div className="row gy-4 portfolio-container">
          <div className="col-lg-4 col-md-6 portfolio-item filter-construction">
              <div className="portfolio-content h-100">
                <img src="assets/img/projects/construction-1.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4>Construction 1</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="assets/img/projects/construction-1.jpg" title="Construction 1"
                    data-gallery="portfolio-gallery-construction" className="glightbox preview-link"><i
                      className="bi bi-zoom-in"></i></a>
                  <a href="./projectdetails" title="More Details" className="details-link"><i
                      className="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div>
            {/* <!-- End Projects Item --> */}

             <div className="col-lg-4 col-md-6 portfolio-item filter-repairs">
              <div className="portfolio-content h-100">
                <img src="assets/img/projects/repairs-1.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4>Repairs 1</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="assets/img/projects/repairs-1.jpg" title="Repairs 1" data-gallery="portfolio-gallery-repairs"
                    className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="./project" title="More Details" className="details-link"><i
                      className="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div> 
            {/* <!-- End Projects Item --> */}

             <div className="col-lg-4 col-md-6 portfolio-item filter-design">
              <div className="portfolio-content h-100">
                <img src="assets/img/projects/design-1.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4>Design 1</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="assets/img/projects/design-1.jpg" title="Repairs 1" data-gallery="portfolio-gallery-book"
                    className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="./project" title="More Details" className="details-link"><i
                      className="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div> 
            {/* <!-- End Projects Item --> */}

             <div className="col-lg-4 col-md-6 portfolio-item filter-remodeling">
              <div className="portfolio-content h-100">
                <img src="assets/img/projects/remodeling-2.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4>Remodeling 2</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="assets/img/projects/remodeling-2.jpg" title="Remodeling 2"
                    data-gallery="portfolio-gallery-remodeling" className="glightbox preview-link"><i
                      className="bi bi-zoom-in"></i></a>
                  <a href="./project" title="More Details" className="details-link"><i
                      className="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div>
            {/* <!-- End Projects Item --> */}

             <div className="col-lg-4 col-md-6 portfolio-item filter-construction">
              <div className="portfolio-content h-100">
                <img src="assets/img/projects/construction-2.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4>Construction 2</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="assets/img/projects/construction-2.jpg" title="Construction 2"
                    data-gallery="portfolio-gallery-construction" className="glightbox preview-link"><i
                      className="bi bi-zoom-in"></i></a>
                  <a href="./project" title="More Details" className="details-link"><i
                      className="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div> 
            {/* <!-- End Projects Item --> */}

             <div className="col-lg-4 col-md-6 portfolio-item filter-repairs">
              <div className="portfolio-content h-100">
                <img src="assets/img/projects/repairs-2.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4>Repairs 2</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="assets/img/projects/repairs-2.jpg" title="Repairs 2" data-gallery="portfolio-gallery-repairs"
                    className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="./project" title="More Details" className="details-link"><i
                      className="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div> 
            {/* <!-- End Projects Item --> */}

             <div className="col-lg-4 col-md-6 portfolio-item filter-design">
              <div className="portfolio-content h-100">
                <img src="assets/img/projects/design-2.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4>Design 2</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="assets/img/projects/design-2.jpg" title="Repairs 2" data-gallery="portfolio-gallery-book"
                    className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="./project" title="More Details" className="details-link"><i
                      className="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div>
            {/* <!-- End Projects Item --> */}

             <div className="col-lg-4 col-md-6 portfolio-item filter-remodeling">
              <div className="portfolio-content h-100">
                <img src="assets/img/projects/remodeling-3.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4>Remodeling 3</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="assets/img/projects/remodeling-3.jpg" title="Remodeling 3"
                    data-gallery="portfolio-gallery-remodeling" className="glightbox preview-link"><i
                      className="bi bi-zoom-in"></i></a>
                  <a href="./project" title="More Details" className="details-link"><i
                      className="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div> 
            {/* <!-- End Projects Item --> */}

            <div className="col-lg-4 col-md-6 portfolio-item filter-construction">
              <div className="portfolio-content h-100">
                <img src="assets/img/projects/construction-3.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4>Construction 3</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="assets/img/projects/construction-3.jpg" title="Construction 3"
                    data-gallery="portfolio-gallery-construction" className="glightbox preview-link"><i
                      className="bi bi-zoom-in"></i></a>
                  <a href="./project" title="More Details" className="details-link"><i
                      className="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div> 
            {/* <!-- End Projects Item --> */}

            <div className="col-lg-4 col-md-6 portfolio-item filter-repairs">
              <div className="portfolio-content h-100">
                <img src="assets/img/projects/repairs-3.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4>Repairs 3</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="assets/img/projects/repairs-3.jpg" title="Repairs 2" data-gallery="portfolio-gallery-repairs"
                    className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="./project" title="More Details" className="details-link"><i
                      className="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div> 
            {/* !-- End Projects Item --> */}

             <div className="col-lg-4 col-md-6 portfolio-item filter-design">
              <div className="portfolio-content h-100">
                <img src="assets/img/projects/design-3.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4>Design 3</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="assets/img/projects/design-3.jpg" title="Repairs 3" data-gallery="portfolio-gallery-book"
                    className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="./project" title="More Details" className="details-link"><i
                      className="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div>
             <div className="col-lg-4 col-md-6 portfolio-item filter-design">
              <div className="portfolio-content h-100">
                <img src="assets/img/projects/design-3.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4>Design 3</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="assets/img/projects/design-3.jpg" title="Repairs 3" data-gallery="portfolio-gallery-book"
                    className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="./project" title="More Details" className="details-link"><i
                      className="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div>
            </div>
            </div>
            </div>
            </section>


{/* <!-- ======= Projet Details Section ======= --> */}
<section id="project-details" className="project-details">
  <div className="container" data-aos="fade-up" data-aos-delay="100">

    <div className="position-relative h-100">
      <div className="slides-1 portfolio-details-slider swiper">
        <div className="swiper-wrapper align-items-center">

          {/* <div class="swiper-slide">
            <img src="assets/img/projects/remodeling-1.jpg" alt=""/>
          </div> */}

          {/* <div class="swiper-slide">
            <img src="assets/img/projects/construction-1.jpg" alt=""/>
          </div> */}

          {/* <div class="swiper-slide">
            <img src="assets/img/projects/design-1.jpg" alt=""/>
          </div> */}
{/* 
          <div class="swiper-slide">
            <img src="assets/img/projects/repairs-1.jpg" alt=""/>
          </div> */}

        </div>
        {/* <div class="swiper-pagination"></div> */}
      </div>
      {/* <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div> */}

    </div>

    {/* <div class="row justify-content-between gy-4 mt-4">

      <div class="col-lg-8">
        <div class="portfolio-description">
          <h2>This is an example of portfolio detail</h2>
          <p>
            Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia.
            Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia
            accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt
            eius.
          </p>
          <p>
            Amet consequatur qui dolore veniam voluptatem voluptatem sit. Non aspernatur atque natus ut cum nam et.
            Praesentium error dolores rerum minus sequi quia veritatis eum. Eos et doloribus doloremque nesciunt
            molestiae laboriosam.
          </p>

          <div class="testimonial-item">
            <p>
              <i class="bi bi-quote quote-icon-left"></i>
              Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis
              quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
              <i class="bi bi-quote quote-icon-right"></i>
            </p>
            <div>
              <img src="assets/img/testimonials/testimonials-2.jpg" class="testimonial-img" alt=""/>
              <h3>Sara Wilsson</h3>
              <h4>Designer</h4>
            </div>
          </div>

          <p>
            Impedit ipsum quae et aliquid doloribus et voluptatem quasi. Perspiciatis occaecati earum et magnam
            animi. Quibusdam non qui ea vitae suscipit vitae sunt. Repudiandae incidunt cumque minus deserunt
            assumenda tempore. Delectus voluptas necessitatibus est.</p>

          <p>
            Sunt voluptatum sapiente facilis quo odio aut ipsum repellat debitis. Molestiae et autem libero.
            Explicabo et quod necessitatibus similique quis dolor eum. Numquam eaque praesentium rem et qui
            nesciunt.
          </p>

        </div>
      </div>

      <div class="col-lg-3">
        <div class="portfolio-info">
          <h3>Project information</h3>
          <ul>
            <li><strong>Category</strong> <span>Web design</span></li>
            <li><strong>Client</strong> <span>ASU Company</span></li>
            <li><strong>Project date</strong> <span>01 March, 2020</span></li>
            <li><strong>Project URL</strong> <a href="#">www.example.com</a></li>
            <li><a href="#" class="btn-visit align-self-start">Visit Website</a></li>
          </ul>
        </div>
      </div>

    </div> */}

  </div>
</section>
{/* <!-- End Projet Details Section --> */}
</main>
<Footer/>
    </div>
  )
}
export default Project