import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'; // User Icon

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('manageItems');
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm px-4">
      {/* Brand Logo */}
      <a className="navbar-brand fw-bold text-white" href="/" style={{ fontSize: '24px' }}>
        🛒 MyShop
      </a>

      {/* User Logout Button */}
      <div className="ms-auto d-flex align-items-center">
        <button
          className="btn btn-outline-light d-flex align-items-center"
          onClick={handleLogout}
          style={{ borderRadius: '30px', padding: '8px 16px' }}
        >
          <FaUserCircle size={20} className="me-2" />
          Logout
        </button>
      </div>
    </nav>
  );
}
