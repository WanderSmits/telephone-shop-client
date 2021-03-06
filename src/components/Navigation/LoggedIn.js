import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/actions";
import Button from "react-bootstrap/Button";
import { selectUser } from "../../store/user/selectors";
import Nav from "react-bootstrap/Nav";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { selectCart } from "../../store/cart/selectors";

import {
  faShoppingCart,
  faUser,
  faSearch,
} from "@fortawesome/fontawesome-free-solid";

export default function LoggedIn() {
  const cartProducts = useSelector(selectCart);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const numberOfCartItems = cartProducts.length;

  return (
    <>
      <NavbarBrand href="#home">
        <FontAwesomeIcon className="mr-3" icon={faSearch} />
      </NavbarBrand>
      <NavbarBrand as={Link} to="/listproduct">
        <FontAwesomeIcon className="mr-3" icon={faUser} />
      </NavbarBrand>
      <NavbarBrand as={Link} to="/cart">
        <FontAwesomeIcon className="mr-3" icon={faShoppingCart} />
        {numberOfCartItems}
      </NavbarBrand>
      <Button onClick={() => dispatch(logOut())}>Logout</Button>
    </>
  );
}
