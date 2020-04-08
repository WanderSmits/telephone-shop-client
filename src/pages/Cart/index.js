import React, { useState } from "react";
import CartCard from "../../components/CartProductCard";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../store/cart/selectors";
import { postOrder } from "../../store/postOrder/actions";
import { selectOrder } from "../../store/postOrder/selector";
import { addToCart } from "../../store/cart/actions";

import {
  Jumbotron,
  Container,
  Button,
  Form,
  Col,
  Card,
  Row,
} from "react-bootstrap";

export default function CartPage() {
  const cartProducts = useSelector(selectCart);
  const dispatch = useDispatch();
  const [expressDel, setExpressDel] = useState(false);
  const [color, setColor] = useState("Black");
  const [description, setDescription] = useState("");

  const allProducts = Object.values(cartProducts).map((keys, values) => {
    return parseInt(cartProducts[values].id);
  });

  function submitOrder(id) {
    // console.log("Id?", allProducts);
    console.log("all products", allProducts);
    dispatch(postOrder(expressDel, color, description));
  }

  function handleChecked(event) {
    setExpressDel(event.target.checked);
  }

  return (
    <main>
      <Jumbotron>
        <h2> These are your selected products</h2>
      </Jumbotron>
      <Container>
        <Row>
          <Col sm={12} md={8}>
            {cartProducts.map((product) => {
              return (
                <CartCard
                  key={product.id}
                  id={product.id}
                  productName={product.productName}
                  imageUrl={product.imageUrl}
                  description={product.description}
                  userId={product.userId}
                  price={product.price}
                  showLink={true}
                />
              );
            })}
            Total: 65
          </Col>
          <Col sm={12} md={4} className="mb-4">
            <Form>
              <h4>Checkout</h4>
              {/* <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Color</Form.Label>
                <Form.Control
                  as="select"
                  defaultValue={color}
                  onChange={(event) => {
                    setColor(event.target.value);
                  }}
                  className="form-control"
                >
                  <option value={"Black"}>Black</option>
                  <option value={"Silver"}>Silver</option>
                  <option value={"White"}>White</option>
                </Form.Control>
              </Form.Group> */}
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Shipping address</Form.Label>
                <Form.Control
                  rows="3"
                  as="textarea"
                  placeholder="Your Description"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Check
                  label="Express delivery (+10$)"
                  type="checkbox"
                  value={expressDel}
                  checked={expressDel}
                  onChange={handleChecked}
                />
              </Form.Group>
              Total Price:
              <Button onClick={submitOrder}>Buy now!</Button>
            </Form>
            <i>By placing the order you agree with the delivery terms.</i>
            <p>Need help?</p>
            <p>Contact us</p>
            <p>Accepted payment methods</p>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
