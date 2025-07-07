import React from "react";

const UserProfile = ({ name, age, bio }) => {
  return (
    <div>
      <img src="src/assets/image_1.png" alt="User" />
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>Bio: {bio}</p>
    </div>
  );
};

export default UserProfile;
