import React, { useState } from "react";
import CartCard from "../../components/CartProductCard";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../store/cart/selectors";
import { postOrder } from "../../store/postOrder/actions";
// import { selectOrder } from "../../store/postOrder/selector";

import { clearState } from "../../store/cart/actions";

import {
  Jumbotron,
  Container,
  Button,
  // Form,
  Col,
  Card,
  Row,
} from "react-bootstrap";

export default function CartPage() {
  const cartProducts = useSelector(selectCart);
  const dispatch = useDispatch();
  const [delivery, setDelivery] = useState(false);

  const allProducts = Object.values(cartProducts).map((keys, values) => {
    return parseInt(cartProducts[values].id);
  });

  // console.log("CArt products?", cartProducts);

  function submitOrder(id) {
    console.log("Id?", id);
    dispatch(postOrder(id));
    dispatch(clearState());
  }

  const allCartProducts =
    cartProducts &&
    cartProducts.reduce((a, b) => ({ price: a.price + b.price }));

  console.log(`Express deliv?`, delivery);

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
        <Container>
          <Col sm={12} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Total price</Card.Title>
                <Card.Text>Sum of all products {cartProducts}</Card.Text>
              </Card.Body>
            </Card>
          </Col>{" "}
          <Button onClick={() => submitOrder(allProducts)}> Buy now!</Button>
        </Container>
      </div>
      {/* <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h3 className="mt-5 mb-5">Your information</h3>
        <Form.Group>
          <Form.Label>Adress</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control />
        </Form.Group> */}

      {/* </Form> */}
    </main>
  );
}
