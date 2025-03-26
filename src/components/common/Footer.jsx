import React from 'react'

const Footer = () => {
  return (
<footer>
        <div className='container py-5'>
          <div className='row'>
            <div className='col-md-3'>
              <h2 className='mb-2'>Company</h2>
              <div className='pe-5'>
              <p>Our company is dedicated to providing top-notch construction services to clients across the globe.We specialize in designing, building, and maintaining structures that stand the test of time.</p>
              </div>  
            </div>



            <div className='col-md-3'>
              <h3>Our Services </h3>
              <ul>
                <li><a href="#home">Specialty Construction</a></li>
                <li><a href="#about">Civil Construction</a></li>
                <li><a href="#projects">Residential Construction</a></li>
                <li><a href="#blogs">Corporate Construction</a></li>
                <li><a href="#contact">Building Construction</a></li>
              </ul>
            </div>

            <div className='col-md-3'>
              <h3 className='mb-2'>Quick Links</h3>
              <ul>
                <li><a href="/about">About Us</a></li>
                <li><a href="/service">Services</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#blogs">Blogs</a></li>
                <li><a href="#contact">Contact us</a></li>
                </ul>
            </div>

            <div className='col-md-3'>
              <h3 className='mb-2'>Contact Us</h3>
              <ul>
              <p>123, XYZ Street, ABC City, DEF Country</p>
              <p>Email: shilpadevaconstructions@gmail.com</p>
              </ul>

            </div>
            <hr />
            <div className='text-center pt-4'>
                &copy; 2025 Shilpaveda Constructions. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer
