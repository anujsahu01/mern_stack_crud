import React, { useState, useEffect } from 'react';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import ProductData from '../data/productData.json';

export default function Cards({ index }) {
  const randomIndex = Math.floor(Math.random() * ProductData.length);
  const product = ProductData[randomIndex];

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(() => Math.floor(Math.random() * 100));
  const [cartItems, setCartItems] = useState(() => {
    const stored = JSON.parse(localStorage.getItem('manageItems')) || [];
    return stored;
  });

  useEffect(() => {
    localStorage.setItem('manageItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleLike = () => {
    setLiked(prev => !prev);
    setLikeCount(prev => liked ? prev - 1 : prev + 1);
  };

  const handleAddToCart = () => {
    setCartItems(prev => [...prev, product.id]);
    toast.success('🛒 Item added to cart!', {
      position: "top-right", // yaha kar diya bhai!
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      transition: Slide,
    });
  };

  if (!product) return <div>Product not found</div>;

  return (
    <>
      {/* Yeh ToastContainer card ke bahar hai ab */}
      <ToastContainer 
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        transition={Slide}
      />

      <div className="card card-wrapper shadow-sm border-0 h-100 animate__animated animate__fadeInUp hover-shadow position-relative overflow-hidden"
        style={{ transition: 'transform 0.3s', width: '100%', minWidth: '200px' }}
      >
        <div className="position-relative overflow-hidden" style={{ height: '250px' }}>
          <img
            src={product.image}
            className="card-img-top img-fluid h-100 w-100"
            alt={product.title}
            style={{
              objectFit: 'cover',
              transition: 'transform 0.5s ease'
            }}
          />
          <span className="badge bg-danger position-absolute top-0 end-0 m-2">{product.discount}</span>
        </div>

        <div className="card-body d-flex flex-column">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <div className="d-flex align-items-center gap-2">
              <i
                className={`fa-heart ${liked ? 'fa-solid text-danger animate__animated animate__bounce' : 'fa-regular'}`}
                style={{ fontSize: '24px', cursor: 'pointer' }}
                onClick={handleLike}
              ></i>
              <span>{likeCount}</span>
            </div>
            <span className="fw-bold">{product.title}</span>
          </div>

          <p className="text-muted small mb-2">Lorem ipsum dolor sit amet consectetur.</p>

          <div className="d-flex justify-content-between align-items-center mt-auto">
            <span className="fw-bold">{product.price}</span>
            <div>
              <i className="fa-solid fa-star text-warning"></i>
              <i className="fa-solid fa-star text-warning"></i>
              <i className="fa-solid fa-star text-warning"></i>
            </div>
            <span className="text-muted small">{product.views}</span>
          </div>

          <button className="btn btn-primary mt-3" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>

      {/* Hover pe image zoom */}
      <style>{`
        .card:hover img {
          transform: scale(1.1);
        }
      `}</style>
    </>
  );
}
