import React from "react";
// import { useDispatch, useSelector } from "react-redux";

import { Jumbotron, Container, Button, Form, Col, Card } from "react-bootstrap";

export default function CartPage() {
  return (
    <main>
      <div>
        <Jumbotron>
          <h2> These are your selected products</h2>
        </Jumbotron>
      </div>
      <Container> Product 1 goes here </Container>
      <Container> Product 2 goes here </Container>
      <div>
        <Col sm={12} md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Choose delivery</Card.Title>
              <Card.Text>
                {" "}
                <input type="checkbox" /> Express delivery (+10$)
              </Card.Text>
              <Card.Text>
                <input type="checkbox" /> Standard delivery (free)
              </Card.Text>
              <Card.Text>Total Price: Sum of all products + delivery</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </div>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h3 className="mt-5 mb-5">Your information</h3>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone number</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group>
          <Form.Label>Adress</Form.Label>
          <Form.Control />
        </Form.Group>

        <Button> Buy now!</Button>
      </Form>
    </main>
  );
}
