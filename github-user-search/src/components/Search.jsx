import React from "react";
import { useState } from "react";
import fetchUserData from "../services/githubService";

const Search = () => {
  const [formData, setFormData] = useState({ username: "" });
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "username") {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setUserData(null);

    try {
      const data = await fetchUserData(formData.username.trim());
      //   console.log("Fetched Data:", data);
      setUserData(data);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter GitHub username..."
          className="p-2 border border-blue-500 rounded-md w-[400px] placeholder-white text-white"
          onChange={handleChange}
          value={formData.username}
        />
        <button className="bg-blue-700 text-white p-2 rounded-lg cursor-pointer">
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-white">Loading...</p>}

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {userData && (
        <div className="mt-8 text-white flex flex-col items-center gap-2">
          <img
            src={userData.avatar_url}
            alt={userData.login}
            className="w-20 h-20 rounded-full"
          />
          <p>
            <strong>Username:</strong> {userData.login}
          </p>
          <p>
            <strong>Name:</strong> {userData.name || "N/A"}
          </p>
          <p>
            <strong>Bio:</strong> {userData.bio || "No bio available."}
          </p>
          <p>
            <strong> Followers:</strong> {userData.followers}
          </p>
          <p>
            <strong>Public Repos:</strong> {userData.public_repos}
          </p>
        </div>
      )}
    </div>
  );
};

export default Search;
