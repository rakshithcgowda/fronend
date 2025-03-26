import React from 'react';


function Pricing({ onInquire }) {
  return (
    <section className="section-6 py-5">
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-4">
          <h2 className="fw-bold">Home Construction Packages In Bengaluru</h2>
          <p className="lead mb-2">Find the best home construction packages.</p>
        </div>

        {/* Packages Row */}
        <div className="row">
          {/* Basic Package */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h4 className="card-title text-orange fw-bold mb-2">
                  Basic Package ~ ₹1,840/sqft <small className="text-muted">(incl. GST)</small>
                </h4>
                <hr />
                {/* Collapsible List */}
                <ul className="list-unstyled mb-4">
                  <li className="mb-2">
                    <button
                      className="collapse-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#basicDesigns"
                      aria-expanded="false"
                      aria-controls="basicDesigns"
                    >
                      Designs &amp; Drawings <span className="collapse-icon">+</span>
                    </button>
                    <div className="collapse" id="basicDesigns">
                      <ul className="collapse-content">
                        <li>Architectural Layout | 2D</li>
                        <li>Basic Elevation</li>
                        <li>Structural Design</li>
                        <li>3D Elevation</li>
                        <li>Electrical Drawings</li>
                        <li>Plumbing Drawings</li>
                      </ul>
                    </div>
                  </li>
                  {/* Other collapsible sections omitted for brevity */}
                </ul>
                <p className="small text-secondary">Inquire now to get in touch with us!</p>
                <div className="d-flex justify-content-between">
                  <button 
                    className="btn btn-outline-primary"
                    onClick={onInquire}
                  >
                    Inquire Now
                  </button>
                  <button className="btn btn-primary">Let’s Build</button>
                </div>
              </div>
            </div>
          </div>

          {/* Classic Package */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h4 className="card-title text-orange fw-bold mb-2">
                  Classic Package ~ ₹1,970/sqft <small className="text-muted">(incl. GST)</small>
                </h4>
                <hr />
                <ul className="list-unstyled mb-4">
                  <li className="mb-2">
                    <button
                      className="collapse-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#classicDesigns"
                      aria-expanded="false"
                      aria-controls="classicDesigns"
                    >
                      Designs &amp; Drawings <span className="collapse-icon">+</span>
                    </button>
                    <div className="collapse" id="classicDesigns">
                      <ul className="collapse-content">
                        <li>Architectural Layout | 2D</li>
                        <li>Basic Elevation</li>
                        <li>Structural Design</li>
                        <li>3D Elevation</li>
                        <li>Electrical Drawings</li>
                        <li>Plumbing Drawings</li>
                      </ul>
                    </div>
                  </li>
                  <li className="mb-2">
                    <button
                      className="collapse-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#classicStructure"
                      aria-expanded="false"
                      aria-controls="classicStructure"
                    >
                      Structure <span className="collapse-icon">+</span>
                    </button>
                    <div className="collapse" id="classicStructure">
                      <ul className="collapse-content">
                        <li>Foundation</li>
                        <li>Columns</li>
                        <li>Beams</li>
                        <li>Slabs</li>
                      </ul>
                    </div>
                  </li>
                  <li className="mb-2">
                    <button
                      className="collapse-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#classicKitchen"
                      aria-expanded="false"
                      aria-controls="classicKitchen"
                    >
                      Kitchen <span className="collapse-icon">+</span>
                    </button>
                    <div className="collapse" id="classicKitchen">
                      <ul className="collapse-content">
                        <li>Modular Layout</li>
                        <li>Countertops &amp; Cabinets</li>
                        <li>Sink &amp; Fixtures</li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <p className="small text-secondary">Inquire now to get in touch with us!</p>
                <div className="d-flex justify-content-between">
                  <button 
                    className="btn btn-outline-primary"
                    onClick={onInquire}
                  >
                    Inquire Now
                  </button>
                  <button className="btn btn-primary">Let’s Build</button>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Package */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h4 className="card-title text-orange fw-bold mb-2">
                  Premium Package ~ ₹2,280/sqft <small className="text-muted">(incl. GST)</small>
                </h4>
                <hr />
                <ul className="list-unstyled mb-4">
                  <li className="mb-2">
                    <button
                      className="collapse-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#premiumDesigns"
                      aria-expanded="false"
                      aria-controls="premiumDesigns"
                    >
                      Designs &amp; Drawings <span className="collapse-icon">+</span>
                    </button>
                    <div className="collapse" id="premiumDesigns">
                      <ul className="collapse-content">
                        <li>Architectural Layout | 2D</li>
                        <li>Basic Elevation</li>
                        <li>Structural Design</li>
                        <li>3D Elevation</li>
                        <li>Electrical Drawings</li>
                        <li>Plumbing Drawings</li>
                      </ul>
                    </div>
                  </li>
                  <li className="mb-2">
                    <button
                      className="collapse-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#premiumStructure"
                      aria-expanded="false"
                      aria-controls="premiumStructure"
                    >
                      Structure <span className="collapse-icon">+</span>
                    </button>
                    <div className="collapse" id="premiumStructure">
                      <ul className="collapse-content">
                        <li>Foundation</li>
                        <li>Columns</li>
                        <li>Beams</li>
                        <li>Slabs</li>
                      </ul>
                    </div>
                  </li>
                  <li className="mb-2">
                    <button
                      className="collapse-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#premiumKitchen"
                      aria-expanded="false"
                      aria-controls="premiumKitchen"
                    >
                      Kitchen <span className="collapse-icon">+</span>
                    </button>
                    <div className="collapse" id="premiumKitchen">
                      <ul className="collapse-content">
                        <li>Modular Layout</li>
                        <li>Countertops &amp; Cabinets</li>
                        <li>Sink &amp; Fixtures</li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <p className="small text-secondary">Inquire now to get in touch with us!</p>
                <div className="d-flex justify-content-between">
                  <button 
                    className="btn btn-outline-primary"
                    onClick={onInquire}
                  >
                    Inquire Now
                  </button>
                  <button className="btn btn-primary">Let’s Build</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* T&C */}
        <div className="text-end mt-3">
          <small className="text-muted">* T&amp;C Apply</small>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
