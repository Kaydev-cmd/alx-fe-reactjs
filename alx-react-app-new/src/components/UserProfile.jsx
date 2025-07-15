import React from "react";

const UserProfile = (props) => {
  return (
    <div
      style={{
        backgroundColor: "#f5f5f52b",
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        color: "#fff",
        borderRadius: "16px",
      }}
    >
      <img src={props.image} alt="User" />
      <h2>{props.name}</h2>
      <p style={{ fontWeight: "bold" }}>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;
