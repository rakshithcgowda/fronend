import React from 'react'
import { FaBuilding, FaUsers, FaUserFriends, FaClock } from "react-icons/fa";

import Header from '../common/Header';
import Footer from '../common/footer';
import ServiceImg from '../../assets/images/construction1.jpg';
import constructionImg from '../../assets/images/construction2.jpg';
import Icon1 from '../../assets/images/icon-1.svg';
import Icon2 from '../../assets/images/icon-2.svg';
import Icon3 from '../../assets/images/icon-3.svg';
import PopupModal from './PopupModal';
import Hero from './Hero';
import SocialSidebar from './SocialSidebar';
import About from './About';
import Aboutc from '../common/Aboutc';
import PricingWithPopup from './PricingWithPopup';


const Home = () => {
  return (
    <>

    {/* socialsidebar Section */}
    <SocialSidebar/>
    

    {/* popmodule Section */}

    <PopupModal/>
        {/* Header Section */}
      <Header/>
      <main>
        {/* Hero section */}
        <Hero/>
        {/* About section */}
        <Aboutc/>
        {/* Services section */}
        <section className='section-3 bg-light'>
          <div className='container-fluid py-3'>
            <div className='section-header text-center'>
              <span>Our Services</span>
              <h2>What we offer</h2>
              <p>We offer a diverse array of construction services, spanning residential, commercial, and industrial projects.</p>
            </div>
            <div className='row pt-4'>
              <div className='col-md-3 col-lg-3'>
                <div className='item'>
                  <div className='service-image'>
                    <img src={ServiceImg} className='w-100' />
                  </div>
                  <div className='service-body'>
                    <div className='Service-title'>
                      <h3>Specialty Construction</h3>
                    </div>
                    <div className='service-content' > 
                      <p>
                      Civil construction is a core sector within the construction industry that focuses on the design, development, and maintenance of infrastructure that supports modern society.
                      </p>
                    </div>
                    <a href="#" className='btn btn-primary' >Read more</a>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-lg-3'>
                <div className='item'>
                  <div className='service-image'>
                    <img src={ServiceImg} className='w-100' />
                  </div>
                  <div className='service-body'>
                    <div className='Service-title'>
                      <h3>Specialty Construction</h3>
                    </div>
                    <div className='service-content' > 
                      <p>
                      Civil construction is a core sector within the construction industry that focuses on the design, development, and maintenance of infrastructure that supports modern society.
                      </p>
                    </div>
                    <a href="#" className='btn btn-primary' >Read more</a>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-lg-3'>
                <div className='item'>
                  <div className='service-image'>
                    <img src={ServiceImg} className='w-100' />
                  </div>
                  <div className='service-body'>
                    <div className='Service-title'>
                      <h3>Specialty Construction</h3>
                    </div>
                    <div className='service-content' > 
                      <p>
                      Civil construction is a core sector within the construction industry that focuses on the design, development, and maintenance of infrastructure that supports modern society.
                      </p>
                    </div>
                    <a href="#" className='btn btn-primary' >Read more</a>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-lg-3'>
                <div className='item'>
                  <div className='service-image'>
                    <img src={ServiceImg} className='w-100' />
                  </div>
                  <div className='service-body'>
                    <div className='Service-title'>
                      <h3>Specialty Construction</h3>
                    </div>
                    <div className='service-content' > 
                      <p>
                      Civil construction is a core sector within the construction industry that focuses on the design, development, and maintenance of infrastructure that supports modern society.
                      </p>
                    </div>
                    <a href="#" className='btn btn-primary' >Read more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


      {/* why choose us */}

      <section className='section-4 py-5'>
        <div className='container py-5'>
          <div className='section-header text-center' >
          <span>Why Choose Us</span>
              <h2>Discover our wide variety of projects.</h2>
              <p>Created in close partnership with our clients and collaborators, this approach merges industry expertise,<br />
              decades of experience, innovation, and flexibility to consistently deliver excellence.</p>
          </div>
          <div className='row pt-4'>
            <div className= 'col-md-4'>
              <div className='card shadow border-0 p-4'> 
                <div className='card-icon'>
                  <img src={Icon1} alt="" />
                </div>
                <div className='card-title me-3'>
                  <h3>Cutting Edge Tech</h3>
                </div>
                <p>
                Small actions create big impacts. It all begins and ends with each employee committing to safer work practices daily, ensuring they return home safely.
                </p>
              </div>
            </div>
            <div className= 'col-md-4'>
              <div className='card shadow border-0 p-4'> 
                <div className='card-icon'>
                  <img src={Icon2} alt="" />
                </div>
                <div className='card-title me-3'>
                  <h3>Cutting Edge Tech</h3>
                </div>
                <p>
                Small actions create big impacts. It all begins and ends with each employee committing to safer work practices daily, ensuring they return home safely.
                </p>
              </div>
            </div>
            <div className= 'col-md-4'>
              <div className='card shadow border-0 p-4'> 
                <div className='card-icon'>
                  <img src={Icon3} alt="" />
                </div>
                <div className='card-title me-3'>
                  <h3>Cutting Edge Tech</h3>
                </div>
                <p>
                Small actions create big impacts. It all begins and ends with each employee committing to safer work practices daily, ensuring they return home safely.
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </section>
      


        {/* Projects section */}
        <section className='section-3 bg-light'>
          <div className='container-fluid py-3'>
            <div className='section-header text-center'>
              <span>our projects</span>
              <h2>Discover our diverse range of projects</h2>
              <p>We offer a diverse array of construction services, spanning residential, commercial, and industrial projects.</p>
            </div>
            <div className='row pt-4'>
              <div className='col-md-3 col-lg-3'>
                <div className='item'>
                  <div className='service-image'>
                    <img src={constructionImg} className='w-100' />
                  </div>
                  <div className='service-body'>
                    <div className='Service-title'>
                      <h3>Kanpur Project 2025</h3>
                    </div>
                    <div className='service-content' > 
                      <p>
                      Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques. Unlike general construction.
                      </p>
                    </div>
                    <a href="#" className='btn btn-primary' >Read more</a>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-lg-3'>
                <div className='item'>
                  <div className='service-image'>
                    <img src={constructionImg} className='w-100' />
                  </div>
                  <div className='service-body'>
                    <div className='Service-title'>
                      <h3>Delhi Project 2025</h3>
                    </div>
                    <div className='service-content' > 
                      <p>
                      Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.
                      </p>
                    </div>
                    <a href="#" className='btn btn-primary' >Read more</a>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-lg-3'>
                <div className='item'>
                  <div className='service-image'>
                    <img src={constructionImg} className='w-100' />
                  </div>
                  <div className='service-body'>
                    <div className='Service-title'>
                      <h3>
                      Goa Project 2025</h3>
                    </div>
                    <div className='service-content' > 
                      <p>
                      Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.
                      </p>
                    </div>
                    <a href="#" className='btn btn-primary' >Read more</a>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-lg-3'>
                <div className='item'>
                  <div className='service-image'>
                    <img src={constructionImg} className='w-100' />
                  </div>
                  <div className='service-body'>
                    <div className='Service-title'>
                      <h3>
                      Lucknow Project 2025</h3>
                    </div>
                    <div className='service-content' > 
                      <p>
                      Specialty construction is crucial for projects that require more than just standard building practices. Whether it's restoring a historic landmark, designing a cutting-edge research facility, or creating a custom home with unique architectural features.
                      </p>
                    </div>
                    <a href="#" className='btn btn-primary' >Read more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


      {/* pricing */}

      {/* <Pricing/> */}
      <PricingWithPopup/>

        {/* Testimonials Section */}
        <section className="section-5  mb-4">
              <div className="container">
                {/* Vision, Mission, and Core Values */}
                <div className="row text-center mb-5">
                  <div className="col-md-4 mb-4 mb-md-0">
                    <h3 className="mb-3">Our Vision</h3>
                    <p className="mb-0">
                      The premier provider of construction solutions, known for our commitment
                      to excellence, innovation, and sustainability.
                    </p>
                  </div>
                  <div className="col-md-4 mb-4 mb-md-0">
                    <h3 className="mb-3">Our Mission</h3>
                    <p className="mb-0">
                      We dedicate ourselves to building enduring relationships with our
                      clients, partners, and communities, guided by a commitment to integrity.
                    </p>
                  </div>
                  <div className="col-md-4">
                    <h3 className="mb-3">Core Values</h3>
                    <p className="mb-0">
                      Our values of excellence, integrity, collaboration, innovation &amp; sustainability
                      serve as the guiding principles that drive our business forward.
                    </p>
                  </div>
                </div>

                {/* Stats: Client Satisfaction, Years of Experience, etc. */}
                <div className="row text-center">
                  <div className="col-md-3 mb-4 mb-md-0">
                    <h1 className="display-4 fw-bold">100%</h1>
                    <p className="mb-0">Client Satisfaction</p>
                  </div>
                  <div className="col-md-3 mb-4 mb-md-0">
                    <h1 className="display-4 fw-bold">21</h1>
                    <p className="mb-0">Years of Experience</p>
                  </div>
                  <div className="col-md-3 mb-4 mb-md-0">
                    <h1 className="display-4 fw-bold">165+</h1>
                    <p className="mb-0">Completed Projects</p>
                  </div>
                  <div className="col-md-3">
                    <h1 className="display-4 fw-bold">75+</h1>
                    <p className="mb-0">Government Projects</p>
                  </div>
                </div>
              </div>
            </section>

      </main>

      {/* Footer Section */}
      <Footer/>

    </>
  )
}

export default Home;
