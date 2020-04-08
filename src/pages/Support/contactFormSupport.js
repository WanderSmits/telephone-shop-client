import React, { useState } from "react";
import { Container, Form, Col, Table, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
// import { postForm } from "../../store/user/actions";

export default function ContactFormSupport() {
  const dispatch = useDispatch();
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");

  function submitForm(event) {
    event.preventDefault();

    // console.log(name, content, imageUrl);
    // dispatch(postForm(name, question));
  }

  return (
    <Container>
      <Form as={Col} md={{ span: 5, offset: 3 }} className="mt-5">
        <h3 className="mt-5 mb-5">Contact Form</h3>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Reason for contacting us </Form.Label>
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
          <Form.Label>Subject</Form.Label>
          <Form.Control
            rows="5"
            type="text"
            placeholder="Your Subject"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Your Description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Link</Form.Label>
          <Form.Control
            rows="5"
            type="text"
            placeholder="Your Link"
            value={link}
            onChange={(event) => setLink(event.target.value)}
          />
        </Form.Group>

        <Button> Send</Button>
      </Form>
    </Container>
  );
}
