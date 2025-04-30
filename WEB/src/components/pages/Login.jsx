import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
    Container,
    Form,
    Button,
    Row,
    Col,
    Card,
    InputGroup
} from "react-bootstrap";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";

const Login = () => {
    const [formData, setFormData] = useState({ email: "", pwd: "" });
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [confirmLogin, setConfirmLogin] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!confirmLogin) {
            toast.warning("⚡ Please confirm to proceed with login.", {
                position: "top-center",
                autoClose: 2500,
            });
            setLoading(false);
            return;
        }

        try {
            const config = {
                method: "post",
                url: "http://localhost:3003/api/auth/login",
                headers: { "Content-Type": "application/json" },
                data: formData,
            };
            const res = await axios(config);

            if (res.data.token) {
                localStorage.setItem("token", res.data.token);
                toast.success("🎉 Login Successful!", {
                    position: "top-center",
                    autoClose: 2000,
                });
                setTimeout(() => {
                    navigate("/");
                }, 2500);
            } else {
                toast.error("❌ Login failed! No token received.", {
                    position: "top-center",
                    autoClose: 3000,
                });
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "❌ Login failed! Try again later.", {
                position: "top-center",
                autoClose: 3000,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100 bg-light animate__animated animate__fadeIn">
            <Row className="w-100">
                <Col xs={12} md={6} lg={4} className="mx-auto">
                    <Card className="p-4 shadow-lg border-0 rounded-4 animate__animated animate__zoomIn" style={{ background: "#fff", boxShadow: "0 0 25px rgba(0,0,0,0.1)" }}>
                        <h3 className="text-center mb-4 text-primary fw-bold animate__animated animate__fadeInDown">Welcome Back 👋</h3>

                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="email" className="mb-3">
                                <Form.Floating>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email"
                                        required
                                    />
                                    <label>Email</label>
                                </Form.Floating>
                            </Form.Group>

                            <Form.Group controlId="pwd" className="mb-3">
                                <InputGroup>
                                    <Form.Floating className="flex-grow-1">
                                        <Form.Control
                                            type={showPassword ? "text" : "password"}
                                            name="pwd"
                                            value={formData.pwd}
                                            onChange={handleChange}
                                            placeholder="Password"
                                            required
                                        />
                                        <label>Password</label>
                                    </Form.Floating>
                                    <Button
                                        variant="outline-secondary"
                                        onClick={() => setShowPassword(!showPassword)}
                                        style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                                    >
                                        {showPassword ? <BsEyeSlash /> : <BsEye />}
                                    </Button>
                                </InputGroup>
                            </Form.Group>

                            <Form.Group controlId="confirmLogin" className="mb-3">
                                <Form.Check
                                    type="checkbox"
                                    label="I confirm to login"
                                    checked={confirmLogin}
                                    onChange={(e) => setConfirmLogin(e.target.checked)}
                                />
                            </Form.Group>

                            <Button
                                type="submit"
                                className="w-100 py-2 fw-semibold rounded-pill btn-primary animate__animated animate__fadeInUp"
                                disabled={loading}
                            >
                                {loading ? "Logging in..." : "Login"}
                            </Button>
                        </Form>
                    </Card>
                </Col>
            </Row>
            <ToastContainer />
        </Container>
    );
};

export default Login;
