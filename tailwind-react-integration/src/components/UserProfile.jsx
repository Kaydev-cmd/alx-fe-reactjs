import React from "react";

const UserProfile = () => {
  return (
    <div className="user-profile bg-gray-100 p-4 max-w-xs mx-auto my-20 rounded-lg shadow-lg md:p-8 md:max-w-ms">
      <img
        src="/assets/images/john_doe.jpeg"
        alt="User"
        className="rounded-full w-24 h-24 mx-auto md:w-36 md:h-36"
      />
      <h1 className="text-lg text-blue-800 my-4 md:text-xl">John Doe</h1>
      <p className="text-gray-600 text-sm md:text-base">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
};

export default UserProfile;
