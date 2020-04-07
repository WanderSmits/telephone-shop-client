import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/products/actions";
import { selectProducts } from "../../store/products/selectors";

import { Jumbotron } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import ProductCard from "../../components/ProductCard";

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  console.log("products", products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (!products) return <h6>Loading</h6>;

  return (
    <div>
      <Jumbotron>
        <h1>Find your mobile here</h1>
      </Jumbotron>
      <Container>
        <Row>
          {products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                productName={product.productName}
                imageUrl={product.imageUrl}
                description={product.description}
                userId={product.userId}
                showLink={true}
              />
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
