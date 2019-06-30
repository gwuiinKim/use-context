import React from "react";
import { useUser } from "./context";

const Header = () => {
  const { name, isLoggedIn } = useUser();
  return (
    <header>
      <a href="/">Home</a>
      Hello {name} you are {isLoggedIn ? "logged In" : "anonymous"}
    </header>
  );
};

export default Header;
