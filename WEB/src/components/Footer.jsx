// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-light footer pt-5 mt-5">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <h4 className="text-white mb-3">Quick Links</h4>
            <p><a className="text-light" href="/about">About Us</a></p>
            <p><a className="text-light" href="/contact">Contact Us</a></p>
            <p><a className="text-light" href="home">Privacy Policy</a></p>
            <p><a className="text-light" href="contact">Terms & Conditions</a></p>
            <p><a className="text-light" href="contact">FAQs & Help</a></p>
          </div>

          <div className="col-lg-4 col-md-6">
            <h4 className="text-white mb-3">Contact</h4>
            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Kanpur, Uttar Pradesh</p>
            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+91 8115907105</p>
            <p className="mb-2"><i className="fa fa-envelope me-3"></i><a href="mailto:anujsahu.as01@gmail.com" className="text-light">anujsahu.as01@gmail.com</a></p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href="https://twitter.com"><i className="fab fa-twitter"></i></a>
              <a className="btn btn-outline-light btn-social" href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-outline-light btn-social" href="https://www.youtube.com"><i className="fab fa-youtube"></i></a>
              <a className="btn btn-outline-light btn-social" href="https://www.linkedin.com/in/anuj-sahu-abba1a257"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <h4 className="text-white mb-3">Subscribe to our Newsletter</h4>
            <p>Subscribe now and join our growing community of learners committed to lifelong education!</p>
            <div className="position-relative mx-auto" style={{ maxWidth: "400px" }}>
              <form action="#">
                <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="email" placeholder="Your email" required />
                <button type="submit" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a className="border-bottom" href="/home">Anuj Sahu</a>, All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
