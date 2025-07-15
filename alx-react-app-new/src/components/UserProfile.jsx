import React from "react";

const UserProfile = (props) => {
  return (
    <div
      style={{
        backgroundColor: "#f5f5f52b",
        // padding: "32px",
        display: "flex",
        flexDirection: "column",
        color: "#fff",
        borderRadius: "16px",
        border: "1px solid gray",
        padding: "10px",
        margin: "10px",
      }}
    >
      <img src={props.image} alt="User" />
      <h2 style={{ color: "blue" }}>{props.name}</h2>
      <p>
        Age: <span style={{ fontWeight: "bold" }}>{props.age}</span>{" "}
      </p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;
