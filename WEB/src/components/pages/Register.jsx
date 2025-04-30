import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "animate.css";

const Register = () => {
    const [formData, setFormData] = useState({
        f_name: "",
        l_name: "",
        email: "",
        age: "",
        pwd: "",
        mobile: "",
        address: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
           await axios.post("http://localhost:3003/api/users", formData);
            toast.success("🎉 Registered Successfully!", {
                position: "top-right",
                autoClose: 2500,
            });
            setTimeout(() => {
                navigate("/");
            }, 3000);
        } catch (error) {
            toast.error("❌ Registration Failed!", {
                position: "top-right",
                autoClose: 2500,
            });
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100 bg-light animate__animated animate__fadeIn">
            <Row className="w-100">
                <Col xs={12} md={6} lg={5} className="mx-auto">
                    <Card className="p-4 shadow border-0 rounded-4 animate__animated animate__zoomIn" style={{ background: "#ffffff", boxShadow: "0 0 25px rgba(0,0,0,0.1)" }}>
                        <h3 className="text-center mb-4 text-primary fw-bold animate__animated animate__fadeInDown">Create an Account</h3>
                        <Form onSubmit={handleSubmit} className="small">
                            <Form.Group className="mb-3">
                                <Form.Floating>
                                    <Form.Control type="text" name="f_name" value={formData.f_name} onChange={handleChange} placeholder="First Name" required />
                                    <label>First Name</label>
                                </Form.Floating>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Floating>
                                    <Form.Control type="text" name="l_name" value={formData.l_name} onChange={handleChange} placeholder="Last Name" required />
                                    <label>Last Name</label>
                                </Form.Floating>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Floating>
                                    <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                                    <label>Email</label>
                                </Form.Floating>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Floating>
                                    <Form.Control type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" />
                                    <label>Age</label>
                                </Form.Floating>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Floating>
                                    <Form.Control type="password" name="pwd" value={formData.pwd} onChange={handleChange} placeholder="Password" required />
                                    <label>Password</label>
                                </Form.Floating>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Floating>
                                    <Form.Control type="text" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile" required />
                                    <label>Mobile</label>
                                </Form.Floating>
                            </Form.Group>

                            <Form.Group className="mb-4">
                                <Form.Floating>
                                    <Form.Control as="textarea" name="address" value={formData.address} onChange={handleChange} placeholder="Address" style={{ height: "80px" }} />
                                    <label>Address</label>
                                </Form.Floating>
                            </Form.Group>

                            <Button type="submit" className="w-100 py-2 fw-semibold rounded-pill btn-primary animate__animated animate__fadeInUp">
                                Register
                            </Button>
                        </Form>
                    </Card>
                </Col>
            </Row>
            <ToastContainer />
        </Container>
    );
};

export default Register;
