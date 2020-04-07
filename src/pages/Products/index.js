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
    const products = useSelector(selectselectProductsArtworks);

  // console.log("products", products);

  useEffect(() => {
    // dispatch(fetchProducts());
    console.log("hi");
  }, [dispatch]);

  return (
    <div>
      <Jumbotron>
        <h1>Find your mobile here</h1>
      </Jumbotron>
      <Container>
        <Row>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />

          {/* {products.map(products => {
            return (
              <ProductCard
                key={product.id}
                // key={product.title}
                id={product.id}
                title={product.title}
                imageUrl={product.imageUrl}
                hearts={product.hearts}
                minimumBid={product.minimumBid}
                userId={product.userId}
                showLink={true}
                bids={product.bids}
              />
            );
          })} */}
        </Row>
      </Container>
    </div>
  );
}
