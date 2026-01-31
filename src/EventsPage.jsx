import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form, Badge } from "react-bootstrap";

const EventsPage = () => {
  // onClick
  const handleClick = () => {
    alert("Button clicked!");
  };

  // onChange
  const [input, setInput] = useState("");

  // onSubmit
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted Name: ${name}`);
  };

  // Passing Arguments
  const [argInput, setArgInput] = useState("");

  const handleGreet = (person) => {
    alert(`Hi ${person}`);
  };

  // Conditional Rendering
  const [show, setShow] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState("guest");

  let roleMessage;
  let roleVariant;

  if (role === "admin") {
    roleMessage = "Welcome, Admin — Full access granted.";
    roleVariant = "danger";
  } else if (role === "user") {
    roleMessage = "Welcome, User — Limited access granted.";
    roleVariant = "success";
  } else {
    roleMessage = "Welcome, Guest — Please login to continue.";
    roleVariant = "secondary";
  }

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4 fw-bold">
         Event Handlers
      </h1>

      <Row className="g-4">
        {/* 1️⃣ onClick Event */}
        <Col md={6}>
          <Card className="shadow event-card">
            <Card.Body>
              <Card.Title>1️⃣ onClick Event</Card.Title>
              <Button variant="primary" onClick={handleClick}>
                Click Me
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* 2️⃣ onChange Event */}
        <Col md={6}>
          <Card className="shadow event-card">
            <Card.Body>
              <Card.Title>2️⃣ onChange Event</Card.Title>
              <Form.Control
                type="text"
                placeholder="Type something..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <p className="mt-2">
                You typed: <b>{input}</b>
              </p>
            </Card.Body>
          </Card>
        </Col>

        {/* 3️⃣ onSubmit Event */}
        <Col md={6}>
          <Card className="shadow event-card">
            <Card.Body>
              <Card.Title>3️⃣ onSubmit Event</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mb-2"
                />
                <Button variant="success" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* 4️⃣ Passing Arguments */}
        <Col md={6}>
          <Card className="shadow event-card">
            <Card.Body>
              <Card.Title>4️⃣ Passing Arguments</Card.Title>

              <Form.Control
                type="text"
                placeholder="Enter name"
                value={argInput}
                onChange={(e) => setArgInput(e.target.value)}
                className="my-2"
              />

              <Button
                variant="info"
                onClick={() => handleGreet(argInput || "Guest")}
              >
                Click me
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* 5️⃣ Conditional Rendering */}
        <Col md={12}>
          <Card className="shadow event-card">
            <Card.Body>
              <Card.Title>5️⃣ Conditional Rendering</Card.Title>

              <Button
                variant="secondary"
                className="me-2"
                onClick={() => setShow(!show)}
              >
                {show ? "Hide Message" : "Show Message"}
              </Button>

              {show && (
                <p className="mt-2 text-success fw-bold">
                  Hello, welcome to React!
                </p>
              )}

              <hr />

              {isLoggedIn ? (
                <>
                  <Badge bg="success" className="me-2">
                    Logged In
                  </Badge>
                  <Button
                    variant="outline-danger"
                    onClick={() => setIsLoggedIn(false)}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Badge bg="danger" className="me-2">
                    Not Logged In
                  </Badge>
                  <Button
                    variant="outline-success"
                    onClick={() => setIsLoggedIn(true)}
                  >
                    Login
                  </Button>
                </>
              )}

              <hr />

              <div className="mb-2">
                <Button
                  variant="danger"
                  className="me-2"
                  onClick={() => setRole("admin")}
                >
                  Admin
                </Button>
                <Button
                  variant="success"
                  className="me-2"
                  onClick={() => setRole("user")}
                >
                  User
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => setRole("guest")}
                >
                  Guest
                </Button>
              </div>

              <Badge bg={roleVariant} className="p-2">
                {roleMessage}
              </Badge>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EventsPage;