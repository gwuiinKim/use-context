import React, { useContext } from "react";
import { UserContext } from "./context";

const Header = () => {
  const {
    user: { name, isLoggedIn }
  } = useContext(UserContext);
  return (
    <header>
      <a href="/">Home</a>
      Hello {name} you are {isLoggedIn ? "logged In" : "anonymous"}
    </header>
  );
};

export default Header;
