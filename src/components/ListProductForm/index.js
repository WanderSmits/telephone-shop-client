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

  const [operatingSystem, setOperatingSystem] = useState("");
  const [batteryLife, setBatteryLife] = useState("");
  const [screenSize, setScreensize] = useState("");
  const [weightInGrams, setWeightInGrams] = useState("");
  const [virtualAssistant, setVirtualAssistant] = useState("");
  const [guaranteeInYears, setGuaranteeInYears] = useState("");

  const dispatch = useDispatch();

  function submitForm(event) {
    event.preventDefault();

    dispatch(
      postNewProduct(
        productName,
        imageUrl,
        price,
        description,
        operatingSystem,
        batteryLife,
        screenSize,
        weightInGrams,
        virtualAssistant,
        guaranteeInYears
      )
    );
    setProductName("");
    setImageUrl("");
    setPrice("");
    setDescription("");
    setOperatingSystem("");
    setBatteryLife("");
    setScreensize("");
    setWeightInGrams("");
    setVirtualAssistant("");
    setGuaranteeInYears("");
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

        <h1 className="mt-5 mb-5">Specify product details</h1>
        <Form.Group>
          <Form.Label>Operating System</Form.Label>
          <Form.Control
            value={operatingSystem}
            onChange={(event) => setOperatingSystem(event.target.value)}
            type="string"
            placeholder="Operating System"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Battery life</Form.Label>
          <Form.Control
            value={batteryLife}
            onChange={(event) => setBatteryLife(event.target.value)}
            type="string"
            placeholder="Enter Image Url"
            required
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Screen Size</Form.Label>
          <Form.Control
            value={screenSize}
            onChange={(event) => setScreensize(event.target.value)}
            type="integer"
            placeholder="screen size"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Weight in grams</Form.Label>
          <Form.Control
            value={weightInGrams}
            onChange={(event) => setWeightInGrams(event.target.value)}
            type="integer"
            placeholder="Weight in grams"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Virtual Assistant</Form.Label>
          <Form.Control
            value={virtualAssistant}
            onChange={(event) => setVirtualAssistant(event.target.value)}
            type="string"
            placeholder="Virtual assistant"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Guarantee in years</Form.Label>
          <Form.Control
            value={guaranteeInYears}
            onChange={(event) => setGuaranteeInYears(event.target.value)}
            type="integer"
            placeholder="Guarantee"
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
