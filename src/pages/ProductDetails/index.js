import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import DropdownButton from "react-bootstrap/DropdownButton";

export default function ProductDetails(props) {
  return (
    <Col sm={12} md={4} className="mb-4" key={props.id}>
      <h1>Product Details</h1>
      <Card>
        <Card.Body>
          <Card.Img
            variant="right"
            src="data:image/jpeg;base64,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"
            className="mb-3"
          />
        </Card.Body>
      </Card>
      <div>
        <h2> Product Description</h2>
        <div>
          Phasellus orci est, suscipit id ornare sit amet, gravida tempor
          libero. Integer consequat tempor porta. Morbi odio velit, maximus eget
          maximus eu, sollicitudin in ligula. Donec rhoncus risus vel elementum
          faucibus. Sed vel rutrum diam, ut facilisis justo. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          Curae; Mauris molestie varius lacus id laoreet. Aenean euismod elit
          nisi, sit amet ultrices nibh pharetra non.
        </div>
      </div>
    </Col>
  );
}

// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
// import Products from "../Products";

// import { fetchProductById } from "../../store/productDetails/actions";
// import { selectProductDetails } from "../../store/productDetails/selectors";

// export default function ProductDetails() {
//   const { id } = useParams();
//   const product = useSelector(selectProductDetails);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchProductById(id));
//   }, [dispatch, id]);

//   return (
//     <>
//       <Products
//         id={product.id}
//         operatingSystem={product.operatingSystem}
//         batteryLife={product.batteryLife}
//         screenSize={product.screenSize}
//         weightInGrams={product.weightInGrams}
//         virtualAssistant={product.virtualAssistant}
//         guaranteeInYears={product.guaranteeInYears}
//         showLink={false}
//       />
//     </>
//   );
// }
