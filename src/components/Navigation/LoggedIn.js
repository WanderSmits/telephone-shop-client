import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/actions";
import Button from "react-bootstrap/Button";
import { selectUser } from "../../store/user/selectors";
import Nav from "react-bootstrap/Nav";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faShoppingCart,
  faUser,
  faSearch,
} from "@fortawesome/fontawesome-free-solid";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <>
      <NavbarBrand href="#home">
        <FontAwesomeIcon className="mr-3" icon={faSearch} />
      </NavbarBrand>
      <NavbarBrand href="#home">
        <FontAwesomeIcon className="mr-3" icon={faUser} />
      </NavbarBrand>
      <NavbarBrand href="#home">
        <FontAwesomeIcon className="mr-3" icon={faShoppingCart} />
      </NavbarBrand>
      <Button onClick={() => dispatch(logOut())}>Logout</Button>
    </>
  );
}
