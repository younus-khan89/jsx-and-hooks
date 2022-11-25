import { useState, createContext, useContext } from "react";

const UserContext = createContext();

function NetworkUser() {
  const [user, setUser] = useState("5G user");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <FourG />
    </UserContext.Provider>
  );
}

function FourG() {
  return (
    <>
      <h1>FourG</h1>
      <FiveG />
    </>
  );
}

function FiveG() {
    const user = useContext(UserContext);
    return (
      <>
        <h1>FiveG</h1>
        <h2>{`Hello ${user} again!`}</h2>
      </>
    );
}

export default NetworkUser;