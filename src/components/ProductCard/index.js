import React from "react";
import { addToCart } from "../../store/cart/actions";
import { useDispatch } from "react-redux";

import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const dispatch = useDispatch();

  const cartHandler = (id) => {
    dispatch(addToCart(id));
    // console.log(`click cart`, id);
  };

  return (
    <Col sm={12} md={3} className="mb-4">
      <Card>
        <Card.Body className="text-center">
          <Card.Img
            style={{ height: "100px" }}
            variant="right"
            src={props.imageUrl}
            className="mb-3"
          />
          <Card.Title>{props.productName}</Card.Title>
          {/* <Card.Text>Seller {props.userId}</Card.Text> */}
          <Link to={`/products/${props.id}`}>
            <Button className="mb-2" variant="success">
              See more
            </Button>
          </Link>
          <Button
            className="mb-2"
            variant="success"
            onClick={() => cartHandler(props.id)}
          >
            Put in cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
