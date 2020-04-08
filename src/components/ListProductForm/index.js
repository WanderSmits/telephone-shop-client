import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postNewProduct } from "../../store/user/actions";

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";

export default function ListProductForm() {
  const [productName, setProductName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  function submitForm(event) {
    event.preventDefault();

    dispatch(postNewProduct(productName, imageUrl, price, description));
    setProductName("");
    setImageUrl("");
    setPrice("");
    setDescription("");
  }

  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5">Post new product</h1>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={productName}
            onChange={(event) => setProductName(event.target.value)}
            type="text"
            placeholder="Enter name"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Image Url</Form.Label>
          <Form.Control
            value={imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}
            type="string"
            placeholder="Enter Image Url"
            required
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            type="integer"
            placeholder="price"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            type="text"
            placeholder="Descrption"
            required
          />
        </Form.Group>
        <Form.Group className="mt-5">
          <Button variant="primary" type="submit" onClick={submitForm}>
            Post new product
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}
