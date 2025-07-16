import React, { useContext } from "react";
import { userContext } from "../userContext";

const UserDetails = () => {
  const userData = useContext(userContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
};

export default UserDetails;
