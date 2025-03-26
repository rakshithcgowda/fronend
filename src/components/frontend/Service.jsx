import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Servicejpg from '../../assets/images/construction3.jpg'

// Fix the image assignment here: pass the imported variable directly
const services = [
  {
    id: 1,
    title: 'Civil Construction',
    image: Servicejpg,
    description: 'Civil construction is a core sector within the construction industry that focuses on the design, development, and maintenance of infrastructure that supports modern society.',
  },
  {
    id: 2,
    title: 'Specialty Construction',
    image: Servicejpg,
    description: 'Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.',
  },
  {
    id: 3,
    title: 'Industrial Construction',
    image: Servicejpg,
    description: 'Factories, power plants, and large-scale industrial facilities.',
  },
  {
    id: 4,
    title: 'Building Construction',
    image: Servicejpg,
    description: 'Industrial construction is a specialized sector within the construction industry that focuses on the design, development, and construction of facilities for industrial use.',
  },
  {
    id: 5,
    title: 'Residential Construction',
    image: Servicejpg,
    description: 'From single-family homes to multi-unit complexes, we build with care.',
  },
  {
    id: 6,
    title: 'Corporate Construction',
    image: Servicejpg,
    description: 'Office buildings and corporate headquarters with an emphasis on design.',
  },
]

function Service() {
  return (
    <>
      <Header />

      {/* Hero section */}
      <section className="section-7">
        <div className="hero d-flex align-items-center">
          <div className="container">
            <div className="text-left">
              <span>Quality. Integrity. Value.</span>
              <h1>Services</h1>
              <p>
                We excel at transforming visions into reality <br />
                through outstanding craftsmanship and precise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Flip Boxes */}
      <section className="section-services py-5">
        <div className="container text-center">
          <span className="d-block text-uppercase text-secondary mb-2">
            Our Services
          </span>
          <h2 className="mb-3">Our construction services</h2>
          <p className="mb-5">
            We offer a diverse array of construction services, spanning residential, 
            commercial, and industrial projects.
          </p>

          <div className="row g-4">
            {services.map((service) => (
              <div className="col-md-4" key={service.id}>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    {/* Front Side */}
                    <div
                      className="flip-card-front d-flex align-items-end"
                      style={{ backgroundImage: `url(${service.image})` }}
                    >
                      <h3 className="flip-card-title w-100 text-white p-3 m-0">
                        {service.title}
                      </h3>
                    </div>

                    {/* Back Side */}
                    <div className="flip-card-back d-flex flex-column justify-content-center align-items-center p-3">
                      <h4>{service.title}</h4>
                      <p>{service.description}</p>
                      <button 
                        className="btn btn-primary mt-3"
                        onClick={() => {
                          // Add your "Get Quote" logic here, 
                          // e.g., navigate to a contact form or open a modal
                          alert('Redirecting to quote form...');
                        }}
                      >
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Service
