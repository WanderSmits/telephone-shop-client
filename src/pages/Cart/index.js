import React, { useState } from "react";
import CartCard from "../../components/CartProductCard";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../store/cart/selectors";
import { postOrder } from "../../store/postOrder/actions";
import { selectOrder } from "../../store/postOrder/selector";
import { addToCart } from "../../store/cart/actions";
import { clearState } from "../../store/cart/actions";

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

  const allProducts = Object.values(cartProducts).map((keys, values) => {
    return parseInt(cartProducts[values].id);
  });

  console.log("CArt products?", cartProducts);

  function submitOrder(id) {
    console.log("Id?", id);
    dispatch(postOrder(id));
    dispatch(clearState());
  }

  return (
    <main>
      <div>
        <Jumbotron>
          <h2> These are your selected products</h2>
        </Jumbotron>
      </div>
      <Container>
        <Row>
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
        </Row>
      </Container>

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
          <Form.Label>Adress</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control />
        </Form.Group>

        <Button onClick={() => submitOrder(allProducts)}> Buy now!</Button>
      </Form>
    </main>
  );
}
