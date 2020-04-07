import React from "react";
import { Button, Form, Col, Container, Table } from "react-bootstrap";

export default function Support() {
  return (
    <div>
      <Container>
        <h1>Delivery information</h1>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Cost</th>
              <th>Delivery Time</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Free Delivery</td>
              <td>FREE (Minimum spends apply, see details below).</td>
              <td>
                3 to 5 business days after dispatch. Parcels going to
                residential addresses may be delivered on a Sunday.
              </td>
              <td>
                Orders including at least £10 or more of eligible books qualify
                for FREE Delivery. All orders of £20 or more of eligible items
                across any product category also qualify for FREE Delivery.
                Orders including £10 or more of eligible books, dispatched by
                Amazon, qualify for FREE Delivery to Ireland (Including local
                VAT). All orders of £20 or more of eligible items, dispatched by
                Amazon, across any product category also qualify for FREE
                Delivery to Ireland (Including local VAT). For more information
                see FREE Delivery. Terms & conditions apply.
              </td>
            </tr>
            <tr>
              <td>Premium Delivery</td>
              <td>
                £4.99 per delivery. No extra cost for Amazon Prime members.
                Visit Prime Delivery for more information. Premium Delivery to
                an Amazon Locker or Pickup Location is charged at a flat rate of
                £2.99 for all eligible items for non-Prime members.
              </td>
              <td>
                1 business day after dispatch, including Saturdays but not
                including Public Holidays. Parcels going to residential
                addresses may be delivered on a Sunday.
              </td>
              <td>
                Charged per delivery for non-Prime customers. There is no extra
                charge per eligible item in the delivery. For more information
                see One Day Delivery & Premium Delivery.
              </td>
            </tr>
          </tbody>
        </Table>

        <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
          <h3 className="mt-5 mb-5">Contact Form</h3>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control />
          </Form.Group>
          <Form.Group>
            <Form.Label>Question</Form.Label>
            <Form.Control />
          </Form.Group>

          <Button> Send</Button>
        </Form>
      </Container>
    </div>
  );
}
