import { createContext, useState } from "react";

const UserContext = createContext();

const userValues = {
  name: "Jan",
  lastName: "Vesely",
  age: 31,
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(userValues);

  const values = {
    user,
    setUser,
  };
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserContext;
