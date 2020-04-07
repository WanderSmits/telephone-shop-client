import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { fetchProductById } from "../../store/productDetails/actions";
import { selectProductDetails } from "../../store/productDetails/selectors";
import { Jumbotron } from "react-bootstrap";
import Products from "../Products";

export default function ProductDetails() {
  const { id } = useParams();
  const products = useSelector(selectProductDetails);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  return (
    <Div>
      <Jumbotron>
        <h1>Product Details</h1>
      </Jumbotron>
      <Container>
        <Products
        // id={homepage.id}
        // title={homepage.title}
        // description={homepage.description}
        // backgroundColor={homepage.backgroundColor}
        // color={homepage.color}
        // showLink={false}
        />
      </Container>
    </Div>
  );
}
