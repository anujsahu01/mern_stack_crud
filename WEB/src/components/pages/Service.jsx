import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
// import 'aos/dist/aos.css';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import '../css_files/service.css'; // Custom CSS file

// Importing icons
import { FaShippingFast, FaHeadset, FaShieldAlt } from 'react-icons/fa';

AOS.init();

const images = [
  './images/team1.jpg',
  './images/team2.jpg',
  './images/team3.jpg',
  'https://randomuser.me/api/portraits/women/41.jpg'
];

const names = ['Anuj Sahu', 'Aman Chaurasiya', 'Ankita kushwaha', 'Abhilasa sahu'];
const roles = ['Full Stack Developer', 'Frontend Developer', 'Backend Developer', 'UI/UX Designer'];
const emails = ['anujsahu.as01@gmail.com', 'amanchaurasiyar567@gmail.com', 'ankita776@gmail.com', 'abhilasa11@gmail.com'];

const services = [
  {
    icon: <FaShippingFast size={50} className="text-primary" />,
    title: "Fast Delivery",
    description: "We ensure quick delivery within 2-3 business days across the country."
  },
  {
    icon: <FaHeadset size={50} className="text-success" />,
    title: "24/7 Support",
    description: "Our support team is available 24/7 to assist you with any queries."
  },
  {
    icon: <FaShieldAlt size={50} className="text-danger" />,
    title: "Secure Payment",
    description: "We provide secure and reliable payment options for safe transactions."
  }
];

const Service = () => {
  const form = useRef();

  const handlesubmit = (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.target);
    const Message = formData.get('message');
    const user_Email = formData.get('user_email');
  
    // Send manually with the send() method instead of sendForm
    emailjs.send(
      'service_29efbou',
      'template_59zgk8n',
      {
        user_email: user_Email,
        message: Message
      },
      'aalDSOv43GUcHrcZi'
    )
    .then(
      () => {
        toast.success('Message sent successfully!');
        console.log("Message details:", user_Email, Message); 
        e.target.reset();
      },
      () => {
        toast.error('Failed to send message.');
      }
    );
  };

  return (
    <>
    <div className="container py-5">
      <ToastContainer position="top-right" />
      <h2 className="text-center text-muted  mb-4">Our Team</h2>
      
      <div className="row justify-content-center">
        {names.map((name, index) => (
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
            key={index}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="card custom-card h-100 text-center">
              <div className="card-body">
                <img
                  src={images[index]}
                  alt={name}
                  className="rounded-circle mb-3 profile-img"
                />
                <h5 className="card-title fw-bold">{name}</h5>
                <p className="card-subtitle text-muted mb-1">{roles[index]}</p>
                <p className="text-secondary mb-3" style={{ fontSize: '0.85rem' }} >
                  {emails[index]}
                </p>
                <form ref={form} onSubmit={handlesubmit}>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    className="form-control form-control-sm mb-2"
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    className="form-control form-control-sm mb-3"
                    rows="2"
                    required
                  ></textarea>
                  <button type="submit" className="btn btn-primary btn-sm w-100 fw-bold">
                    Send Me
                  </button>
                </form>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* <h1> Always open </h1> */}
    <div className="row justify-content-center">
        {services.map((service, index) => (
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
            key={index}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="card custom-card h-100 text-center">
              <div className="card-body">
                {service.icon}
                <h5 className="card-title fw-bold">{service.title}</h5>
                <p className="card-subtitle text-muted mb-1">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Service;
