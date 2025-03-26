import React, { useState } from 'react';
import axios from 'axios';

function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    phone: ''
  });
  
  const [message, setMessage] = useState(null);
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Adjust the URL as needed (e.g., include your API base URL)
      const response = await axios.post('https://a0a8-2400-4f20-11-c00-cdd6-5fa7-82f7-1b09.ngrok-free.app/api/contact-now', formData);

      if(response.data.status) {
        setMessage(response.data.message);
        setErrors({});
        setFormData({ name: '', email: '', location: '', phone: '' });
      }
    } catch (error) {
      if(error.response && error.response.status === 422) {
        // Validation errors from Laravel
        setErrors(error.response.data.errors);
      } else {
        setMessage('An error occurred. Please try again.');
      }
    }
  };

  return (
    <>
      {/* Hero section */}
      <section className="section-1">
        <div className="hero d-flex align-items-center" style={{ minHeight: '100vh' }}>
          <div className="container">
            <div className="row align-items-center">
              {/* Left Column: Text & Buttons */}
              <div className="col-md-7 mb-4 mb-md-0">
                <span className="d-block mb-2 text-warning" style={{ fontSize: '2rem' }}>
                  Welcome Amazing Constructions
                </span>
                <h2 className="fw-bold mb-3" style={{ fontSize: '2rem', lineHeight: '1.2' }}>
                  Crafting dreams with <br /> precision and excellence.
                </h2>
                <p style={{ fontSize: '1rem', lineHeight: '1.5' }}>
                  We excel at transforming visions into reality through outstanding craftsmanship and precise attention to detail. With years of experience and a dedication to quality.
                </p>
                <div className="mt-4">
                  <a href="#contact" className="btn btn-primary me-2">Download brochure</a>
                  <a href="#projects" className="btn btn-secondary">View Project</a>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="col-md-5">
                <div className="p-4 bg-white rounded shadow mx-auto" style={{ maxWidth: '400px' }}>
                  <h5 className="mb-4 text-center" style={{ color: '#333' }}>
                    Talk to our Expert
                  </h5>
                  {message && <div className="alert alert-success">{message}</div>}
                  <form onSubmit={handleSubmit}>
                    {/* Name */}
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      {errors.name && <small className="text-danger">{errors.name[0]}</small>}
                    </div>

                    {/* Mobile Number */}
                    <div className="mb-3">
                      <div className="input-group">
                        <span className="input-group-text">+91</span>
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="Enter your mobile number"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                        {errors.phone && <small className="text-danger">{errors.phone[0]}</small>}
                      </div>
                    </div>

                    {/* Email */}
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      {errors.email && <small className="text-danger">{errors.email[0]}</small>}
                    </div>

                    {/* Plot Location */}
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter plot location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                      />
                      {errors.location && <small className="text-danger">{errors.location[0]}</small>}
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-primary w-100">
                      BOOK FREE CONSULTATION
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
