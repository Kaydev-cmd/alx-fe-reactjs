import React from "react";

const UserProfile = (props) => {
  return (
    <div>
      <img src={props.image} alt="User" />
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;
