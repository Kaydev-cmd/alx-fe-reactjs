import React from "react";

const UserProfile = ({ image, name, age, bio }) => {
  return (
    <div>
      <img src={image} alt="User" />
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>Bio: {bio}</p>
    </div>
  );
};

export default UserProfile;
