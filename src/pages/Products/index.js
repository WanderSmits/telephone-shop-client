import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchArtworks } from "../../store/artworks/actions";
// import { selectArtworks } from "../../store/artworks/selectors";

import { Jumbotron } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import ProductCard from "../../components/ProductCard";

export default function Products() {
  const dispatch = useDispatch();
  //   const artworks = useSelector(selectArtworks);

  // console.log("ARTWORKS HOME PGAE", typeof artworks);
  // console.log("ARTWORKS", artworks.bids);

  useEffect(() => {
    // dispatch(fetchArtworks());
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

          {/* {artworks.map(artwork => {
            return (
              <ProductCard
                key={artwork.id}
                // key={artwork.title}
                id={artwork.id}
                title={artwork.title}
                imageUrl={artwork.imageUrl}
                hearts={artwork.hearts}
                minimumBid={artwork.minimumBid}
                userId={artwork.userId}
                showLink={true}
                bids={artwork.bids}
              />
            );
          })} */}
        </Row>
      </Container>
    </div>
  );
}
