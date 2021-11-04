import React, { createContext, useState } from "react";
import Login from "../components/login";
import User from "../components/user";

export const AppContext = createContext(null);

const Context = () => {
  const [username, setUsername] = useState("");
  return (
    <div>
      <h2>useContext Hook</h2>
      <AppContext.Provider value={{ username, setUsername }}>
        <Login />
        <User />
      </AppContext.Provider>
    </div>
  );
};

export default Context;
