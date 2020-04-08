import React from "react";

import { useDispatch } from "react-redux";

import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

export default function CartCard(props) {
  const dispatch = useDispatch();

  return (
    <Card className="mb-3">
      <Card.Body>
        <div style={{ width: "150px" }}>
          <Card.Img
            style={{ height: "100px", float: "left" }}
            variant="left"
            src={props.imageUrl}
            className="mb-3 mr-3"
          />
        </div>
        <Card.Title>{props.productName}</Card.Title>
        <Card.Text>Price: ${props.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}
