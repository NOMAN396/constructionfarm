import React from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";


function About() {
  return (
    <div>
<Header/>
       <main id="main">
       

{/* <!-- ======= Breadcrumbs ======= --> */}
<div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: 'url(assets/img/breadcrumbs-bg.jpg)'}}>
  <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">

    <h2>About</h2>
    <ol>
      <li><a href="./">Home</a></li>
      <li>About</li>
    </ol> 

  </div>
</div>
{/* <!-- End Breadcrumbs --> */}

{/* <!-- ======= About Section ======= --> */}
<section id="about" className="about">
  <div className="container" data-aos="fade-up">

    <div className="row position-relative">

      <div className="col-lg-7 about-img" style={{backgroundImage: 'url(assets/img/about.jpg)' }}></div>

      <div className="col-lg-7">
        <h2>Consequatur eius et magnam</h2>
        <div className="our-story">
          <h4>Est 1988</h4>
          <h3>Our Story</h3>
          <p>Inventore aliquam beatae at et id alias. Ipsa dolores amet consequuntur minima quia maxime autem.
            Quidem id sed ratione. Tenetur provident autem in reiciendis rerum at dolor. Aliquam consectetur
            laudantium temporibus dicta minus dolor.</p>
          <ul>
            <li><i className="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commo</span></li>
            <li><i className="bi bi-check-circle"></i> <span>Duis aute irure dolor in reprehenderit in</span></li>
            <li><i className="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea</span></li>
          </ul>
          <p>Vitae autem velit excepturi fugit. Animi ad non. Eligendi et non nesciunt suscipit repellendus porro in
            quo eveniet. Molestias in maxime doloremque.</p>

          <div className="watch-video d-flex align-items-center position-relative">
            <i className="bi bi-play-circle"></i>
            <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox stretched-link">Watch Video</a>
          </div>
        </div>
      </div>

    </div>

  </div>
</section>
{/* <!-- End About Section --> */}
{/* 
<!-- ======= Stats Counter Section ======= --> */}
<section id="stats-counter" className="stats-counter section-bg">
  <div className="container">

    <div className="row gy-4">

      <div className="col-lg-3 col-md-6">
        <div className="stats-item d-flex align-items-center w-100 h-100">
          <i className="bi bi-emoji-smile color-blue flex-shrink-0"></i>
          <div>
            <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1"
              className="purecounter"></span>
            <p>Happy Clients</p>
          </div>
        </div>
      </div>
      {/* <!-- End Stats Item --> */}

      <div className="col-lg-3 col-md-6">
        <div className="stats-item d-flex align-items-center w-100 h-100">
          <i className="bi bi-journal-richtext color-orange flex-shrink-0"></i>
          <div>
            <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1"
              className="purecounter"></span>
            <p>Projects</p>
          </div>
        </div>
      </div>
      {/* <!-- End Stats Item --> */}

      <div className="col-lg-3 col-md-6">
        <div className="stats-item d-flex align-items-center w-100 h-100">
          <i className="bi bi-headset color-green flex-shrink-0"></i>
          <div>
            <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1"
              className="purecounter"></span>
            <p>Hours Of Support</p>
          </div>
        </div>
      </div>
      {/* <!-- End Stats Item --> */}

      <div className="col-lg-3 col-md-6">
        <div className="stats-item d-flex align-items-center w-100 h-100">
          <i className="bi bi-people color-pink flex-shrink-0"></i>
          <div>
            <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1"
              className="purecounter"></span>
            <p>Hard Workers</p>
          </div>
        </div>
      </div>
      {/* <!-- End Stats Item --> */}

    </div>

  </div>
</section>
{/* <!-- End Stats Counter Section --> */}

{/* <!-- ======= Alt Services Section ======= --> */}
<section id="alt-services" className="alt-services">
  <div className="container" data-aos="fade-up">

    <div className="row justify-content-around gy-4">
      <div className="col-lg-6 img-bg" style = {{backgroundImage:'url(assets/img/alt-services.jpg)'}} data-aos="zoom-in"
        data-aos-delay="100"></div>

      <div className="col-lg-5 d-flex flex-column justify-content-center">
        <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
        <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus
          laudantium. Soluta voluptate sed facere corporis dolores excepturi</p>

        <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="100">
          <i className="bi bi-easel flex-shrink-0"></i>
          <div>
            <h4><a href="" className="stretched-link">Lorem Ipsum</a></h4>
            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate
              non provident</p>
          </div>
        </div>
        {/* <!-- End Icon Box --> */}

        <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="200">
          <i className="bi bi-patch-check flex-shrink-0"></i>
          <div>
            <h4><a href="" className="stretched-link">Nemo Enim</a></h4>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
              deleniti atque</p>
          </div>
        </div>
        {/* <!-- End Icon Box --> */}

        <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="300">
          <i className="bi bi-brightness-high flex-shrink-0"></i>
          <div>
            <h4><a href="" className="stretched-link">Dine Pad</a></h4>
            <p>Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus
              aut eligendi omnis</p>
          </div>
        </div>
        {/* <!-- End Icon Box --> */}

        <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="400">
          <i className="bi bi-brightness-high flex-shrink-0"></i>
          <div>
            <h4><a href="" className="stretched-link">Tride clov</a></h4>
            <p>Est voluptatem labore deleniti quis a delectus et. Saepe dolorem libero sit non aspernatur odit amet.
              Et eligendi</p>
          </div>
        </div>
        {/* <!-- End Icon Box --> */}

      </div>
    </div>

  </div>
</section>
{/* <!-- End Alt Services Section --> */}

{/* <!-- ======= Alt Services Section 2 ======= --> */}
<section id="alt-services-2" className="alt-services section-bg">
  <div className="container" data-aos="fade-up">

    <div className="row justify-content-around gy-4">
      <div className="col-lg-5 d-flex flex-column justify-content-center">
        <h3>Non quasi officia eum nobis et rerum epudiandae rem voluptatem</h3>
        <p>Maxime quia dolorum alias perspiciatis. Earum voluptatem sint at non. Ducimus maxime minima iste magni
          sit praesentium assumenda minus. Amet rerum saepe tempora vero.</p>

        <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="100">
          <i className="bi bi-easel flex-shrink-0"></i>
          <div>
            <h4><a href="" className="stretched-link">Lorem Ipsum</a></h4>
            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate
              non provident</p>
          </div>
        </div>
        {/* <!-- End Icon Box --> */}

        <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="200">
          <i className="bi bi-patch-check flex-shrink-0"></i>
          <div>
            <h4><a href="" className="stretched-link">Nemo Enim</a></h4>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
              deleniti atque</p>
          </div>
        </div>
        {/* <!-- End Icon Box --> */}

        <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="300">
          <i className="bi bi-brightness-high flex-shrink-0"></i>
          <div>
            <h4><a href="" className="stretched-link">Dine Pad</a></h4>
            <p>Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus
              aut eligendi omnis</p>
          </div>
        </div>
        {/* <!-- End Icon Box --> */}

        <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="400">
          <i className="bi bi-brightness-high flex-shrink-0"></i>
          <div>
            <h4><a href="" className="stretched-link">Tride clov</a></h4>
            <p>Est voluptatem labore deleniti quis a delectus et. Saepe dolorem libero sit non aspernatur odit amet.
              Et eligendi</p>
          </div>
        </div>
        {/* <!-- End Icon Box --> */}
      </div>

      <div className="col-lg-6 img-bg" style= {{ backgroundImage:'url(assets/img/alt-services-2.jpg)'}} data-aos="zoom-in"
        data-aos-delay="100"></div>
    </div>

  </div>
</section>
{/* <!-- End Alt Services Section 2 --> */}

{/* <!-- ======= Our Team Section ======= --> */}
<section id="team" className="team">
  <div className="container" data-aos="fade-up">

    <div className="section-header">
      <h2>Our Team</h2>
      <p>Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis
        omnis tiledo stran delop</p>
    </div>

    <div className="row gy-5">

      <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="100">
        <div className="member-img">
          <img src="assets/img/team/team-1.jpg" className="img-fluid" alt=""/>
          <div className="social">
            <a href="#"><i className="bi bi-twitter"></i></a>
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
        <div className="member-info text-center">
          <h4>Walter White</h4>
          <span>Chief Executive Officer</span>
          <p>Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow
          </p>
        </div>
      </div>
      {/* <!-- End Team Member --> */}

      <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="200">
        <div className="member-img">
          <img src="assets/img/team/team-2.jpg" className="img-fluid" alt=""/>
          <div className="social">
            <a href="#"><i className="bi bi-twitter"></i></a>
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
        <div className="member-info text-center">
          <h4>Sarah Jhonson</h4>
          <span>Product Manager</span>
          <p>Labore ipsam sit consequatur exercitationem rerum laboriosam laudantium aut quod dolores exercitationem
            ut</p>
        </div>
      </div>
      {/* <!-- End Team Member --> */}

      <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="300">
        <div className="member-img">
          <img src="assets/img/team/team-3.jpg" className="img-fluid" alt=""/>
          <div className="social">
            <a href="#"><i className="bi bi-twitter"></i></a>
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
        <div className="member-info text-center">
          <h4>William Anderson</h4>
          <span>CTO</span>
          <p>Illum minima ea autem doloremque ipsum quidem quas aspernatur modi ut praesentium vel tque sed facilis
            at qui</p>
        </div>
      </div>
      {/* <!-- End Team Member --> */}

      <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="400">
        <div className="member-img">
          <img src="assets/img/team/team-4.jpg" className="img-fluid" alt=""/>
          <div className="social">
            <a href="#"><i className="bi bi-twitter"></i></a>
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
        <div className="member-info text-center">
          <h4>Amanda Jepson</h4>
          <span>Accountant</span>
          <p>Magni voluptatem accusamus assumenda cum nisi aut qui dolorem voluptate sed et veniam quasi quam
            consectetur</p>
        </div>
      </div>
      {/* <!-- End Team Member --> */}

      <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="500">
        <div className="member-img">
          <img src="assets/img/team/team-5.jpg" className="img-fluid" alt=""/>
          <div className="social">
            <a href="#"><i className="bi bi-twitter"></i></a>
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
        <div className="member-info text-center">
          <h4>Brian Doe</h4>
          <span>Marketing</span>
          <p>Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit
            laborum velit</p>
        </div>
      </div>
      {/* <!-- End Team Member --> */}

      <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="600">
        <div className="member-img">
          <img src="assets/img/team/team-6.jpg" className="img-fluid" alt=""/>
          <div className="social">
            <a href="#"><i className="bi bi-twitter"></i></a>
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
        <div className="member-info text-center">
          <h4>Josepha Palas</h4>
          <span>Operation</span>
          <p>Sint sint eveniet explicabo amet consequatur nesciunt error enim rerum earum et omnis fugit eligendi
            cupiditate vel</p>
        </div>
      </div>
      {/* <!-- End Team Member --> */}

    </div>

  </div>
</section>
{/* <!-- End Our Team Section --> */}


 </main>
<Footer/>
    </div>
   
  );
}

export default About;
