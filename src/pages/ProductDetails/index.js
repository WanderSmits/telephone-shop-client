import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../store/productDetails/actions";
import { selectProductDetails } from "../../store/productDetails/selectors";

import Container from "react-bootstrap/Container";
import { Jumbotron } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const product = useSelector(selectProductDetails);
  // const details = product.detail;
  const dispatch = useDispatch();

  // console.log("products in the component", product);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  if (!product.detail) return <h5>Loading</h5>;

  return (
    <div>
      <Jumbotron>
        <h1>Product Details</h1>
      </Jumbotron>
      <Container>
        <Row>
          <Col md="5">
            <img
              style={{ width: "100%" }}
              className="border border-secondary p-4"
              src={product.imageUrl}
              alt="Product"
            />
          </Col>
          <Col md="7">
            <h4>{product.productName}</h4>
            <h5>&euro; {product.price}</h5>
            <p>{product.description}</p>
            <Table className="mt-5 mb-5" striped bordered hover size="sm">
              <thead>
                <tr>
                  <th className="text-center" colSpan="2">
                    Specifications
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Operating system</td>
                  <td>{product.detail.operatingSystem}</td>
                </tr>
                <tr>
                  <td>Battery Life</td>
                  <td>{product.detail.batteryLife}</td>
                </tr>
                <tr>
                  <td>Screen Size</td>
                  <td>{product.detail.screenSize}</td>
                </tr>
                <tr>
                  <td>Weight In Grams</td>
                  <td>{product.detail.weightInGrams}</td>
                </tr>
                <tr>
                  <td>Virtual Assistant</td>
                  <td>{product.detail.virtualAssistant}</td>
                </tr>
                <tr>
                  <td>Guarantee In Years</td>
                  <td>{product.detail.guaranteeInYears}</td>
                </tr>
              </tbody>
            </Table>
            <Button className="mb-5 mt-3" variant="success">
              Add to Cart
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
