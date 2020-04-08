import React, { useState } from "react";
import { Container, Form, Col, Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { postSupport } from "../../store/support/actions";


export default function ContactFormSupport() {
  const dispatch = useDispatch();
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [optionsState, setOptionsState] = useState("");
  

  function submitForm(event) {
    event.preventDefault();
    // console.log(subject, description, link, optionsState);
    dispatch(postSupport(subject, description, link, optionsState));
    setSubject("");
    setDescription("");
    setLink("");
  }

  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h3 className="mt-5 mb-5">Contact Form</h3>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Reason for contacting us </Form.Label>
          <Form.Control
            as="select"
            defaultValue={optionsState}
            onChange={(event) => {
              setOptionsState(event.target.value);
            }}
            className="form-control"
          >
            <option value={"Delivery"}>Delivery</option>
            <option value={"Opening time"}>Opening time</option>
            <option value={"New Products"}>New Products</option>
            <option value={"Marketing"}>Marketing</option>
            <option value={"Career"}>Career</option>
            <option value={"Other"}>Other</option>
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

        <Button onClick={submitForm}> Send</Button>
      </Form>
    </Container>
  );
}
