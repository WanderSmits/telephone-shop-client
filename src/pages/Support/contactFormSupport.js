import React, { useState } from "react";
import { Container, Form, Col, Table, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
// import { postForm } from "../../store/user/actions";

export default function ContactFormSupport() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");

  function submitForm(event) {
    event.preventDefault();

    // console.log(name, content, imageUrl);
    // dispatch(postForm(name, question));
  }

  return (
    <Container>
      <Form as={Col} md={{ span: 5, offset: 3 }} className="mt-5">
        <h3 className="mt-5 mb-5">Contact Form</h3>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="Name" placeholder="Your Name" />
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>What's this about ? </Form.Label>
          <Form.Control as="select">
            <option>Delivery</option>
            <option>Opening time</option>
            <option>New Products</option>
            <option>Marketing</option>
            <option>Career</option>
            <option>Other</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Question</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your Question"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
          />
        </Form.Group>
        <Button> Send</Button>
      </Form>
    </Container>
  );
}
