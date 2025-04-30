import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const NotFound = () => {
  useEffect(() => {
    document.title = "404 - Page Not Found";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-vh-100 d-flex flex-column justify-content-center align-items-center p-3 text-center bg-light"
    >
      {/* Animated 404 Text */}
      <motion.h1 
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="display-1 fw-bold text-dark mb-4"
      >
        404
      </motion.h1>

      {/* Floating Emoji */}
      <motion.div
        animate={{ 
          y: [-10, 10, -10],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 3,
          ease: "easeInOut" 
        }}
        className="fs-1 mb-4"
      >
        <i className="bi bi-emoji-frown"></i>
      </motion.div>

      <h2 className="h1 fw-semibold text-dark mb-3">
        Oops! Page Not Found
      </h2>
      
      <p className="fs-5 text-secondary mb-4">
        The page you're looking for doesn't exist or has been moved.
      </p>

      {/* Home Button with Icon */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          to="/"
          className="btn btn-primary btn-lg shadow-sm px-4 py-2"
        >
          <i className="bi bi-house-door me-2"></i>
          Go to Homepage
        </Link>
      </motion.div>

      {/* Decorative Elements */}
      <div className="position-absolute w-100 h-100 overflow-hidden top-0 start-0" style={{ zIndex: -1 }}>
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              opacity: 0
            }}
            animate={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              opacity: [0, 0.2, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
            className="position-absolute rounded-circle bg-primary"
            style={{
              width: "8px",
              height: "8px",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default NotFound;