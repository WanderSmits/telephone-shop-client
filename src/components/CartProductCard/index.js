import React from "react";

import { useDispatch } from "react-redux";

import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

export default function CartCard(props) {
  const dispatch = useDispatch();

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
          <Card.Text>Price: ${props.price}</Card.Text>
          <Card.Text>
            Choose color: <input type="color" />
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
