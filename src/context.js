import React, { useState, useContext } from "react";

const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Gwuiin",
    isLoggedIn: false
  });
  const logUserIn = () =>
    setUser({
      ...user,
      isLoggedIn: true
    });
  return (
    <UserContext.Provider
      value={{
        user,
        fn: { logUserIn }
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const { user } = useContext(UserContext);
  return user;
};

export const useFns = () => {
  const { fn } = useContext(UserContext);
  return fn;
};

export default UserContextProvider;
