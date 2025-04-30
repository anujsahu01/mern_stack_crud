import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';
import ProductData from '../data/productData.json'; 
import '../css_files/Cart.css'; 

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      const storedCart = JSON.parse(localStorage.getItem('manageItems')) || [];
      const formattedCart = storedCart.map(id => ({
        id,
        quantity: 1
      }));
      setCartItems(formattedCart);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('manageItems', JSON.stringify(updatedCart.map(item => item.id)));
    toast.error('🗑️ Item Removed!', {
      position: "top-right",
      autoClose: 1000,
      transition: Slide,
    });
  };

  const increaseQuantity = (id) => {
    const updatedCart = cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cartItems.map(item => 
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedCart);
  };

  const handleBuy = () => {
    navigate('/address');
  };

  if (!isLoggedIn) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center animate__animated animate__fadeIn">
        <h2 className="text-danger mb-3 animate__animated animate__fadeInDown">Access Denied</h2>
        <p className="text-muted animate__animated animate__fadeInUp">Please login to view your cart.</p>
        <button className="btn btn-primary mt-3 animate__animated animate__fadeInUp" onClick={() => navigate('/login')}>
          Go to Login
        </button>
      </div>
    );
  }

  // Calculate Total Amount
  const totalAmount = cartItems.reduce((total, cartItem) => {
    const product = ProductData.find(p => p.id === cartItem.id);
    if (!product) return total;
    const price = parseFloat(product.price.replace('₹', '').replace(',', '')) || 0;
    return total + (price * cartItem.quantity);
  }, 0);

  return (
    <div className="container mt-5 animate__animated animate__fadeIn">
      <h2 className="text-center fw-bold mb-4 underline-heading">🛒 Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div className="text-center empty-cart animate__animated animate__fadeInUp">
          <img src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png" alt="Empty" className="empty-cart-img"/>
          <p className="text-muted mt-3">Oops! Your cart is empty.</p>
        </div>
      ) : (
        <div className="row">
          {cartItems.map((cartItem, index) => {
            const product = ProductData.find(p => p.id === cartItem.id);
            if (!product) return null;

            const price = parseFloat(product.price.replace('₹', '').replace(',', '')) || 0;
            const itemTotal = (price * cartItem.quantity).toFixed(2);

            return (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4 animate__animated animate__zoomIn">
                <div className="card cart-card shadow rounded-4 border-0 h-100">
                  <img src={product.image} className="card-img-top rounded-top-4" alt={product.title} style={{ height: '250px', objectFit: 'cover' }} />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-truncate">{product.title}</h5>
                    <p className="fw-bold text-success mb-2">₹ {itemTotal}</p>

                    <div className="d-flex align-items-center justify-content-between my-2">
                      <button className="btn btn-sm btn-outline-secondary" onClick={() => decreaseQuantity(cartItem.id)}>-</button>
                      <span className="mx-2 fw-bold">{cartItem.quantity}</span>
                      <button className="btn btn-sm btn-outline-secondary" onClick={() => increaseQuantity(cartItem.id)}>+</button>
                    </div>

                    <div className="d-flex justify-content-between mt-auto">
                      <button className="btn btn-outline-danger btn-sm" onClick={() => handleRemove(cartItem.id)}>Remove</button>
                      <button className="btn btn-primary btn-sm" onClick={handleBuy}>Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="cart-summary text-end mt-4 animate__animated animate__fadeInUp">
          <h4 className="fw-bold">Total: ₹ {totalAmount.toFixed(2)}</h4>
          <button className="btn btn-success mt-3" onClick={handleBuy}>Proceed to Checkout</button>
        </div>
      )}

      <ToastContainer />
    </div>
  );
}
