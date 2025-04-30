import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AddressForm = () => {
  const [address, setAddress] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  });

  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
      setMessage("Error: User not authenticated!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3003/api/users/order",
        address,
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        }
      );

      setMessage(response.data.message);
      setAddress({ name: "", street: "", city: "", state: "", zip: "" });

      // ✅ Toast success message
      toast.success('🎉 Thank you for shopping!', {
        position: "top-right",
        autoClose: 2000, 
      });

   
      setTimeout(() => {
        navigate('/');
      }, 2500);

    } catch (error) {
      console.error("Error:", error);
      toast.error("❌ Error saving address.", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", textAlign: "center" }}>
      <h2 className="mb-4">Enter Your Address</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" value={address.name} onChange={handleChange} required style={styles.input} />
        <input type="text" name="street" placeholder="Street Address" value={address.street} onChange={handleChange} required style={styles.input} />
        <input type="text" name="city" placeholder="City" value={address.city} onChange={handleChange} required style={styles.input} />
        <input type="text" name="state" placeholder="State" value={address.state} onChange={handleChange} required style={styles.input} />
        <input type="text" name="zip" placeholder="ZIP Code" value={address.zip} onChange={handleChange} required style={styles.input} />
        <button type="submit" style={styles.button}>Submit</button>
      </form>

      {message && <p style={{ color: "green" }}>{message}</p>}

      <ToastContainer />
    </div>
  );
};

// CSS Styling
const styles = {
  input: {
    width: "100%",
    padding: "10px",
    margin: "8px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    marginTop: "10px",
    cursor: "pointer",
  },
};

export default AddressForm;
