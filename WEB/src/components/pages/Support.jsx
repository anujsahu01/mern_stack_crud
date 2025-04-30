import React, { useState } from "react";
import { Container, Row, Col, Accordion, Form, Button, Alert} from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import VideoComponent, { VideoComponent2 } from "./VideoComponents";

const Support = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(""); 
        setError("");

        try {
            const res = await axios.post("http://localhost:3001/api/users/support", formData);

 
            setMessage(res.data.message || "Message sent successfully!");
            setTimeout(() => navigate("/"), 2000); // Redirect after 2 seconds
        } catch (error) {
            setError(error.response?.data?.message || "An error occurred. Please try again.");
        }
    };

    return (
        <Container className="py-5">
            <Row>
                <Col md={8} className="mx-auto text-center">
                    <h2 className="fw-bold">Customer Support</h2>
                    <p className="text-muted">How can we help you?</p>
                </Col>
            </Row>
            
<VideoComponent />




            <Row className="mt-4">
                {/* FAQ Section */}
                <Col md={6}>
                    <h4>Frequently Asked Questions</h4>
                    {/* <Image src="/images/support01.jpg" fluid className="mb-3" /> */}
                    <Accordion defaultActiveKey="0" className="mt-3">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>How can I track my order?</Accordion.Header>
                            <Accordion.Body>Log in to your account, go to "My Orders," and check the tracking details.</Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>What is your return policy?</Accordion.Header>
                            <Accordion.Body>Returns are accepted within 30 days of purchase. Please ensure the item is unused.</Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>How do I contact customer support?</Accordion.Header>
                            <Accordion.Body>You can fill out the contact form below or use our live chat.</Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
                
                {/* Contact Form */}
                <Col md={6}>
                    <h4>Contact Us</h4>
                    {/* <Image src="/images/support03.jpg" fluid className="mb-3" /> */}
                     <VideoComponent2 />
                    {message && <Alert variant="success">{message}</Alert>}
                    {error && <Alert variant="danger">{error}</Alert>}

                    <Form onSubmit={handleSubmit} className="mt-3">
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                required 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                required 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Message</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows={4} 
                                name="message" 
                                value={formData.message} 
                                onChange={handleChange} 
                                required 
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100">Submit</Button>
                    </Form>
                </Col>
            </Row>
            
            {/* Live Chat Button */}
            <div className="fixed-bottom text-end p-3">
                <Button variant="success" className="shadow-lg rounded-pill px-4 py-2">
                    💬 Live Chat
                </Button>
            </div>
        </Container>
    );
};

export default Support;
