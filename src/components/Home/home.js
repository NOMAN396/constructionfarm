import React, { useState, useEffect } from 'react';
import Header from '../Header/header'
import Footer from '../Footer/footer'
import { construction } from "../../apiservice/construction";
import {service} from "../../apiservice/service";
import{ Altservice} from "../../apiservice/altservice";
import {project} from "../../apiservice/project";



const Home = () => {
    const [constructionData, construction2Data] = useState([]);
   

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await construction();
                construction2Data(data);

            } catch (error) {
                console.error(error.message);
            }
        };

        fetchData();
    }, []);
   
   const[serviceData,service2Data] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await service();
                service2Data(data);

            } catch (error) {
                console.error(error.message);
            }
        };

        fetchData();
    }, []);
   const[AltserviceData,Altservice2Data] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Altservice();
                Altservice2Data(data);

            } catch (error) {
                console.error(error.message);
            }
        };

        fetchData();
    }, []);
   const[projectData,project2Data] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await project();
                project2Data(data);

            } catch (error) {
                console.error(error.message);
            }
        };

        fetchData();
    }, []);

    return (


<div>

<Header/>
  {/*<!-- ======= Hero Section ======= --> */}
   {/* <section id="hero" className="hero">

    <div className="info d-flex align-items-center bg-success">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <h2 data-aos="fade-down">Welcome to <span>UpConstruction</span></h2>
            <p data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.</p>
            <a data-aos="fade-up" data-aos-delay="200" href="#get-started" className="btn-get-started bg-warning">Get Started</a>
          </div>
        </div>
      </div>
    </div>

    <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
     
 
    <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
      <div className="carousel-inner">
        <div className="carousel-item active" style={{ backgroundImage: 'url(assets/img/hero-carousel/hero-carousel-1.jpg)' }}></div>
        <div className="carousel-item" style={{ backgroundImage: 'url(assets/img/hero-carousel/hero-carousel-2.jpg)' }}></div>
        <div className="carousel-item" style={{ backgroundImage: 'url(assets/img/hero-carousel/hero-carousel-3.jpg)' }}></div>
        <div className="carousel-item" style={{ backgroundImage: 'url(assets/img/hero-carousel/hero-carousel-4.jpg)' }}></div>
        <div className="carousel-item" style={{ backgroundImage: 'url(assets/img/hero-carousel/hero-carousel-5.jpg)' }}></div>
      </div>

      <a className="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
      </a>

      <a className="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
      </a>
    </div>

 

      <div className="carousel-item active" style= {{backgroundImage: 'url(assets/img/hero-carousel/hero-carousel-1.jpg)'}}>
      </div>
      <div className="carousel-item" style={{backgroundImage: 'url(assets/img/hero-carousel/hero-carousel-2.jpg)'}}></div>
      <div className="carousel-item" style= {{backgroundImage: 'url(assets/img/hero-carousel/hero-carousel-3.jpg)'}}></div>
      <div className="carousel-item" style= {{backgroundImage: 'url(assets/img/hero-carousel/hero-carousel-4.jpg)'}}></div>
      <div className="carousel-item" style= {{backgroundImage: 'url(assets/img/hero-carousel/hero-carousel-5.jpg)'}}></div>

      <a className="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
      </a>

      <a className="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
      </a>

    </div>

  </section>  */}
  <section id="hero" className="hero">
 
<div className="info d-flex align-items-center">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-6 text-center">
        <h2 data-aos="fade-down">Welcome to <span>UpConstruction</span></h2>
        <p data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.</p>
        <a data-aos="fade-up" data-aos-delay="200" href="#get-started" className="btn-get-started bg-warning">Get Started</a>
      </div>
    </div>
  </div>
</div> 

<div id="hero-carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
 

{/* <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel" data-bs-inter0">
  <div className="carousel-inner">val="100
    <div className="carousel-item active" style={{ backgroundImage: 'url(assets/img/hero-carousel/hero-carousel-1.jpg)' }}></div>
    <div className="carousel-item" style={{ backgroundImage: 'url(assets/img/hero-carousel/hero-carousel-2.jpg)' }}></div>
    <div className="carousel-item" style={{ backgroundImage: 'url(assets/img/hero-carousel/hero-carousel-3.jpg)' }}></div>
    <div className="carousel-item" style={{ backgroundImage: 'url(assets/img/hero-carousel/hero-carousel-4.jpg)' }}></div>
    <div className="carousel-item" style={{ backgroundImage: 'url(assets/img/hero-carousel/hero-carousel-5.jpg)' }}></div>
  </div>

  <a className="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
    <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
  </a>

  <a className="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
    <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
  </a>
</div>  */}



  <div className="carousel-item active" style= {{backgroundImage: 'url(assets/img/hero-carousel/hero-carousel-5.jpg)'}}>
  </div>
  <div className="carousel-item" style={{backgroundImage: 'url(assets/img/hero-carousel/hero-carousel-2.jpg)'}}></div>
  <div className="carousel-item" style= {{backgroundImage: 'url(assets/img/hero-carousel/hero-carousel-3.jpg)'}}></div>
  <div className="carousel-item" style= {{backgroundImage: 'url(assets/img/hero-carousel/hero-carousel-4.jpg)'}}></div>
  <div className="carousel-item" style= {{backgroundImage: 'url(assets/img/hero-carousel/hero-carousel-5.jpg)'}}></div>

   <a className="carousel-control" href="#hero-carousel" role="button" data-bs-slide="prev">

  </a> 

    <a className="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
   
  </a> 

</div>

</section>


  <main id="main">

    {/*<!-- ======= Get Started Section ======= --> */}
    <section id="get-started" className="get-started section-bg">
      <div className="container">

        <div className="row justify-content-between gy-4">

          <div className="col-lg-6 d-flex align-items-center" data-aos="fade-up">
            <div className="content">
              <h3 className=''>Minus hic non reiciendis ea possimus at quia.</h3>
              <p>Rem id rerum. Debitis deserunt quidem delectus expedita ducimus dolor. Aut iusto ipsa. Eos ipsum nobis</p>
                ipsa soluta itaque perspiciatis fuga ipsum perspiciatis. Eum amet fugiat totam nisi possimus ut delectus
                dicta.
              <p>Aliquam velit deserunt autem. Inventore et saepe. Tenetur suscipit eligendi labore culpa eos. Deserunt porro magni qui necessitatibus dolorem at animi cupiditate.</p>
            </div>
          </div>

          {/* <div className="col-lg-5" data-aos="fade">
            <form action="forms/quote.php" method="post" className="php-email-form">
              <h3>Get a quote</h3>
              <p>Vel nobis odio laboriosam et hic voluptatem. Inventore vitae totam. Rerum repellendus enim linead spark flows.</p>
              <div className="row gy-3">

                <div className="col-md-12">
                  <input type="text" name="name" className="form-control" placeholder="Name" required />
                </div>

                <div className="col-md-12 ">
                  <input type="email" className="form-control" name="email" placeholder="Email" required />
                </div>

                <div className="col-md-12">
                  <input type="text" className="form-control" name="phone" placeholder="Phone" required />
                </div>

                <div className="col-md-12">
                  <textarea className="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                </div>

                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your quote request has been sent successfully. Thank you!</div>

                  <button type="submit">Get a quote</button>
                </div>

              </div>
            </form>
          </div> */}
          {/* <!-- End Quote Form --> */}
        </div>
      </div>
  </section>
    {/* <!-- End Get Started Section --> */ }

    {/* <!-- ======= Constructions Section ======= --> */}
    <section id="constructions" className="constructions">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Constructions</h2>
          <p>Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione ea sunt quis dolorem
            dolore earum</p>
        </div>

        <div className="row gy-4">
        {constructionData.map((construction, index) => (
       <div className="col-sm-6" data-aos="fade-up" data-aos-delay="100">
       <div className="card-item">
         
           <div className="row" key={index}>
             <div className="col-xl-5">
               <div className="card-bg" style={{ backgroundImage: `url(${construction.image})` }}></div>
             </div>
             <div className="col-xl-7 d-flex align-items-center">
               <div className="card-body">
                 <h4 className="card-title">{construction.title}</h4>
                 <p>{construction.description}</p>
               </div>
             </div>
           </div>
         
       </div>
     </div>
      ) )}
          {/* <!-- End Card Item --> */}
{/* 
           <div className="col-sm-6" data-aos="fade-up" data-aos-delay="200">
            <div className="card-item">
               <div className="row">
                <div className="col-xl-5">
                  <div className="card-bg" style={{backgroundImage: 'url(assets/img/constructions-2.jpg)'}}></div>
                </div>
                <div className="col-xl-7 d-flex align-items-center">
                  <div className="card-body">
                    <h4 className="card-title">Possimus ut sed velit assumenda</h4>
                    <p>Sunt deserunt maiores voluptatem autem est rerum perferendis rerum blanditiis. Est laboriosam qui
                      iste numquam laboriosam voluptatem architecto. Est laudantium sunt at quas aut hic. Eum
                      dignissimos.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>  */}
          {/* <!-- End Card Item --> */}
{/* 
           <div className="col-sm-6" data-aos="fade-up" data-aos-delay="300">
            <div className="card-item">
              <div className="row">
                <div className="col-xl-5">
                  <div className="card-bg" style={{backgroundImage: 'url(assets/img/constructions-3.jpg)'}}></div>
                </div>
                <div className="col-xl-7 d-flex align-items-center">
                  <div className="card-body">
                     <h4 className="card-title">Error beatae dolor inventore aut</h4>
                    <p>Dicta porro nobis. Velit cum in. Nesciunt dignissimos enim molestiae facilis numquam quae quaerat
                      ipsam omnis. Neque debitis ipsum at architecto officia laboriosam odit. Ut sunt temporibus nulla
                      culpa.</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <!-- End Card Item --> */}

          {/* <div className="col-sm-6" data-aos="fade-up" data-aos-delay="400">
            <div className="card-item">
              <div className="row">
                 <div className="col-xl-5">
                  <div className="card-bg" style={{backgroundImage: 'url(assets/img/constructions-4.jpg)' }}></div>
                </div>
                <div className="col-xl-7 d-flex align-items-center">
                  <div className="card-body">
                     <h4 className="card-title">Expedita voluptas ut ut nesciunt</h4>
                    <p>Aut est quidem doloremque voluptatem magnam quis excepturi vero quia. Eum eos doloremque
                      architecto illo at beatae dolore. Fugiat suscipit et sint ratione dolores. Aut aliquid ea dolores
                      libero nobis.</p>
                  </div>
                </div>
              </div>
            </div> */}
          {/* </div>  */}
          {/* <!-- End Card Item --> */}
        </div>
      </div>
      
    </section>
    {/* <!-- End Constructions Section --> */}

    {/* <!-- ======= Services Section ======= --> */}
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-header">
          <h2>Services</h2>
          <p>Voluptatem quibusdam ut ullam perferendis repellat non ut consequuntur est eveniet deleniti fignissimos eos
            quam</p>
        </div>

        <div className="row gy-4">
        {serviceData.map((service, index) => (
          <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="service-item  position-relative" key={index}>
              <div className="icon">
                <i className="fa-solid fa-mountain-city"></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="service-details.html" className="readmore stretched-link">{service.anchor} <i
                  className="bi bi-arrow-right"></i></a>
            </div>
          </div>
            ) )}

        </div>

      </div>
    </section>
    {/* <!-- End Services Section --> */}

    {/* <!-- ======= Alt Services Section ======= --> */}
    <section id="alt-services" className="alt-services">
    {AltserviceData.map((altservice, index) => (
      <div className="container" data-aos="fade-up">
     
        <div className="row justify-content-around gy-4" key={index}>
            <div className="col-lg-6 img-bg" style={{ backgroundImage: `url(${altservice.image})` }}  data-aos="zoom-in"
            data-aos-delay="100"></div>
            

          <div className="col-lg-5 d-flex flex-column justify-content-center">
            <h3>{altservice.title}</h3>
            <p>{altservice.description}</p>

            <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="100">
              <i className="bi bi-easel flex-shrink-0"></i>
              <div>
                <h4><a href="" className="stretched-link">{altservice.title1}</a></h4>
                <p>{altservice.description1}</p>
              </div>
            </div>
            {/* <!-- End Icon Box --> */}

            <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="200">
              <i className="bi bi-patch-check flex-shrink-0"></i>
              <div>
                <h4><a href="" className="stretched-link">{altservice.title2}</a></h4>
                <p>{altservice.description2}</p>
              </div>
            </div>
            {/* <!-- End Icon Box --> */}

            <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-brightness-high flex-shrink-0"></i>
              <div>
                <h4><a href="" className="stretched-link">{altservice.title3}</a></h4>
                <p>{altservice.description3}</p>
              </div>
            </div>
            {/* <!-- End Icon Box --> */}

            <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-brightness-high flex-shrink-0"></i>
              <div>
                <h4><a href="" className="stretched-link">{altservice.title4}</a></h4>
                <p>{altservice.description4}</p>
              </div>
            </div>
            {/* <!-- End Icon Box --> */}

          </div>
         
        </div>
 
      </div>
      ) )}
    </section>
    {/* <!-- End Alt Services Section --> */}

    {/* <!-- ======= Features Section ======= --> */}
    <section id="features" className="features section-bg">
      <div className="container" data-aos="fade-up">

        <ul className="nav nav-tabs row  g-2 d-flex">

          <li className="nav-item col-3">
            <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#tab-1">
              <h4>Modisit</h4>
            </a>
          </li>
          {/* <!-- End tab nav item --> */}

          <li className="nav-item col-3">
            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2">
              <h4>Praesenti</h4>
              </a>
              </li>
            {/* </a><!-- End tab nav item --> */}

          <li className="nav-item col-3">
            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-3">
              <h4>Explica</h4>
            </a>
        
          </li>
          {/* <!-- End tab nav item --> */}

          <li className="nav-item col-3">
            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-4">
              <h4>Nostrum</h4>
            </a>
          </li>
          {/* <!-- End tab nav item --> */}
        </ul>
        <div className="tab-content">
          <div className="tab-pane active show" id="tab-1">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center"
                data-aos="fade-up" data-aos-delay="100">
                <h3>Voluptatem dignissimos provident</h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore
                  magna aliqua.
                </p>
                <ul>
                  <li><i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  <li><i className="bi bi-check2-all"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                  <li><i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla
                    pariatur.</li>
                </ul>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center" data-aos="fade-up" data-aos-delay="200">
                <img src="assets/img/features-1.jpg" alt="" className="img-fluid"/>
              </div>
            </div>
          </div>
          {/* <!-- End tab content item --> */}

          <div className="tab-pane" id="tab-2">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                <h3>Neque exercitationem debitis</h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore
                  magna aliqua.
                </p>
                <ul>
                  <li><i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  <li><i className="bi bi-check2-all"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                  <li><i className="bi bi-check2-all"></i> Provident mollitia neque rerum asperiores dolores quos qui a.
                    Ipsum neque dolor voluptate nisi sed.</li>
                  <li><i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla
                    pariatur.</li>
                </ul>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src="assets/img/features-2.jpg" alt="" className="img-fluid"/>
              </div>
            </div>
          </div>
          {/* <!-- End tab content item --> */}
          <div className="tab-pane" id="tab-3">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                <h3>Voluptatibus commodi accusamu</h3>
                <ul>
                  <li><i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  <li><i className="bi bi-check2-all"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                  <li><i className="bi bi-check2-all"></i> Provident mollitia neque rerum asperiores dolores quos qui a.
                    Ipsum neque dolor voluptate nisi sed.</li>
                </ul>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore
                  magna aliqua.
                </p>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src="assets/img/features-3.jpg" alt="" className="img-fluid"/>
              </div>
            </div>
          </div>
          {/* <!-- End tab content item --> */}
          <div className="tab-pane" id="tab-4">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                <h3>Omnis fugiat ea explicabo sunt</h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore
                  magna aliqua.
                </p>
                <ul>
                  <li><i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  <li><i className="bi bi-check2-all"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                  <li><i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla
                    pariatur.</li>
                </ul>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src="assets/img/features-4.jpg" alt="" className="img-fluid"/>
              </div>
            </div>
          </div>
          {/* <!-- End tab content item --> */}
        </div>
      </div>
    </section>
    {/* <!-- End Features Section --> */}

    {/* <!-- ======= Our Projects Section ======= --> */}
    <section id="projects" className="projects">
      <div className="container" data-aos="fade-up">

        <div className="section-header">
          <h2>Our Projects</h2>
          <p>Consequatur libero assumenda est voluptatem est quidem illum et officia imilique qui vel architecto
            accusamus fugit aut qui distinctio</p>
        </div>
        
        <div className="portfolio" data-portfolio-filter="*" data-portfolio-layout="masonry"
          data-portfolio-sort="original-order">

          <ul className="portfolio-flters" data-aos="fade-up" data-aos-delay="100">
            <li data-filter="*" className="filter-active">All</li>
            <li data-filter=".filter-remodeling">Remodeling</li>
            <li data-filter=".filter-construction">Construction</li>
            <li data-filter=".filter-repairs">Repairs</li>
            <li data-filter=".filter-design">Design</li>
          </ul>
          {/* <!-- End Projects Filters --> */}
        
          <div className="row gy-4 portfolio-container">
            {projectData.map((project, index) =>( 
            <div className="col-lg-4 col-md-6 portfolio-item filter-remodeling" key={index}>
              <div className="portfolio-content h-100">
                <img src={project.image} className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4> {project.title}</h4>
                  <p> {project.description}</p>
                  <a href={project.img} title="Remodeling 1"
                    data-gallery="portfolio-gallery-remodeling" className="glightbox preview-link"><i
                      className="bi bi-zoom-in"></i></a>
                  <a href="./project" title="More Details" className="details-link"><i
                      className="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div>
                   ) )}                
          </div>     
        </div>
      </div>   
    </section>
    {/* <!-- End Our Projects Section --> */}

    {/* <!-- ======= Testimonials Section ======= --> */}
    <section id="testimonials" className="testimonials section-bg">

        <div id="" className="testimonial-wrap" data-bs-ride="carousel">
        <div className="testimonial-item">
        <div className="carousel-item card active" data-bs-interval="2000">
      <img src="assets/img/testimonials/testimonials-1.jpg"  className="testimonial-img" alt="..."/>
      <h3>Saul Goodman</h3>
              <h4>Ceo &amp; Founder</h4>
              <div className="stars">
              <i className="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
              className="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
              </div>
              <p>
              <i className="bi bi-quote quote-icon-left"></i>
              Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.
              <i className="bi bi-quote quote-icon-right"></i>
              </p>
    </div>
    <div className="carousel-item card" data-bs-interval="1500">
      <img src="assets/img/testimonials/testimonials-2.jpg"   className="testimonial-img" alt="..."/>
      <h3>Sara Wilsson</h3>
          <h4>Designer</h4>
          <div className="stars">
          <i className="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
          className="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
          </div>
          <p>
          <i className="bi bi-quote quote-icon-left"></i>
          Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis
          quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
          <i className="bi bi-quote quote-icon-right"></i>
          </p>
    </div>
    <div className="carousel-item card"  data-bs-interval="2000">
      <img src="assets/img/testimonials/testimonials-3.jpg"  className="testimonial-img" alt="..."/>
      <h3>Jena Karlis</h3>
        <h4>Store Owner</h4>
        <div className="stars">
        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
        className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
        </div>
        <p>
        <i className="bi bi-quote quote-icon-left"></i>
        Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim
        tempor labore quem eram duis noster aute amet eram fore quis sint minim.
        <i className="bi bi-quote quote-icon-right"></i>
        </p>
    </div>
    <div className="carousel-item card"  data-bs-interval="2000">
      <img src="assets/img/testimonials/testimonials-4.jpg"  className="testimonial-img" alt="..."/>
      <h3>Jena Karlis</h3>
        <h4>Store Owner</h4>
        <div className="stars">
        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
        className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
        </div>
        <p>
        <i className="bi bi-quote quote-icon-left"></i>
        Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim
        tempor labore quem eram duis noster aute amet eram fore quis sint minim.
        <i className="bi bi-quote quote-icon-right"></i>
        </p>
    </div>
    <div className="carousel-item card"  data-bs-interval="2000">
      <img src="assets/img/testimonials/testimonials-5.jpg"  className="testimonial-img" alt="..."/>
      <h3>Jena Karlis</h3>
        <h4>Store Owner</h4>
        <div className="stars">
        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i
        className="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
        </div>
        <p>
        <i className="bi bi-quote quote-icon-left"></i>
        Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim
        tempor labore quem eram duis noster aute amet eram fore quis sint minim.
        <i className="bi bi-quote quote-icon-right"></i>
        </p>
    </div>
  </div>
  
 
</div>
    </section>
    {/* <!-- End Testimonials Section --> */}

    {/* <!-- ======= Recent Blog Posts Section ======= --> */}
    <section id="recent-blog-posts" className="recent-blog-posts">
      <div className="container" data-aos="fade-up">
  <div className=" section-header">
        <h2>Recent Blog Posts</h2>
        <p>In commodi voluptatem excepturi quaerat nihil error autem voluptate ut et officia consequuntu</p>
      </div>

      <div className="row gy-5">

        <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
          <div className="post-item position-relative h-100">

            <div className="post-img position-relative overflow-hidden">
              <img src="assets/img/blog/blog-1.jpg" className="img-fluid" alt=""/>
              <span className="post-date">December 12</span>
            </div>

            <div className="post-content d-flex flex-column">

              <h3 className="post-title">Eum ad dolor et. Autem aut fugiat debitis</h3>

              <div className="meta d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <i className="bi bi-person"></i> <span className="ps-2">Julia Parker</span>
                </div>
                <span className="px-3 text-black-50">/</span>
                <div className="d-flex align-items-center">
                  <i className="bi bi-folder2"></i> <span className="ps-2">Politics</span>
                </div>
              </div>

              <hr/>

              <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i
                  className="bi bi-arrow-right"></i></a>

            </div>

          </div>
        </div>
        {/* <!-- End post item --> */}

        <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
          <div className="post-item position-relative h-100">

            <div className="post-img position-relative overflow-hidden">
              <img src="assets/img/blog/blog-2.jpg" className="img-fluid" alt=""/>
              <span className="post-date">July 17</span>
            </div>

            <div className="post-content d-flex flex-column">

              <h3 className="post-title">Et repellendus molestiae qui est sed omnis</h3>

              <div className="meta d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <i className="bi bi-person"></i> <span className="ps-2">Mario Douglas</span>
                </div>
                <span className="px-3 text-black-50">/</span>
                <div className="d-flex align-items-center">
                  <i className="bi bi-folder2"></i> <span className="ps-2">Sports</span>
                </div>
              </div>

              <hr/>

              <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i
                  className="bi bi-arrow-right"></i></a>

            </div>

          </div>
        </div>
        {/* <!-- End post item --> */}

        <div className="col-xl-4 col-md-6">
          <div className="post-item position-relative h-100" data-aos="fade-up" data-aos-delay="300">

            <div className="post-img position-relative overflow-hidden">
              <img src="assets/img/blog/blog-3.jpg" className="img-fluid" alt=""/>
              <span className="post-date">September 05</span>
            </div>

            <div className="post-content d-flex flex-column">

              <h3 className="post-title">Quia assumenda est et veritati tirana ploder</h3>

              <div className="meta d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <i className="bi bi-person"></i> <span className="ps-2">Lisa Hunter</span>
                </div>
                <span className="px-3 text-black-50">/</span>
                <div className="d-flex align-items-center">
                  <i className="bi bi-folder2"></i> <span className="ps-2">Economics</span>
                </div>
              </div>

              <hr/>

              <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i
                  className="bi bi-arrow-right"></i></a>

            </div>

          </div>
        </div>
        {/* <!-- End post item --> */}

      </div>

      </div>
    </section>
   
    {/* <!-- End Recent Blog Posts Section --> */}
  </main>
  {/* <!-- End #main --> */}

  {/* <!-- ======= Footer ======= --> */}
  <Footer/>

  {/* <!-- End Footer --> */}

  {/* <a href="#" className="scroll-top d-flex align-items-center justify-content-center"><i
      className="bi bi-arrow-up-short"></i></a> */}
</div>
    );
};
export default Home;