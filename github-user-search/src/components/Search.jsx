import React from "react";
import { useState } from "react";
import { fetchUserData, searchUsers } from "../services/githubService";

const Search = () => {
  const [formData, setFormData] = useState({
    username: "",
    location: "",
    repoCount: "",
  });
  const [userData, setUserData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setPage(1);
    setUserData([]);

    try {
      let data;

      if (formData.location || formData.repoCount) {
        const { users, hasMore } = await searchUsers({ ...formData, page: 1 });
        setUserData(users);
        setHasMore(hasMore);
      } else {
        const data = await fetchUserData(formData.username.trim());
        setUserData([data]);
      }
      // const data = await fetchUserData(formData.username.trim());
      //   console.log("Fetched Data:", data);
      // setUserData(data);
    } catch (err) {
      setError("Looks like we cant find the user", err);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    setLoading(true);

    try {
      const { users, hasMore } = await searchUsers({
        ...formData,
        page: nextPage,
      });
      setUserData((prev) => [...prev, ...users]);
      setPage(nextPage);
      setHasMore(hasMore);
    } catch (err) {
      setError("Something went wrong while loading more users.", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form className="flex flex-col gap-6 mb-8" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter GitHub username..."
          className="p-2 border border-blue-500 rounded-md w-[600px] placeholder-white text-white"
          onChange={handleChange}
          value={formData.username}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          className="p-2 border border-blue-500 rounded-md w-[600px] placeholder-white text-white"
          onChange={handleChange}
          value={formData.location}
        />
        <input
          type="text"
          name="repoCount"
          placeholder="Enter Repo Count"
          className="p-2 border border-blue-500 rounded-md w-[600px] placeholder-white text-white"
          onChange={handleChange}
          value={formData.repoCount}
        />
        <button className="bg-blue-700 text-white p-2 rounded-lg cursor-pointer">
          Search
        </button>
      </form>

      {userData.length > 0 && (
        <div>
          {userData.map((user) => (
            <div
              key={user.id}
              className="flex flex-col items-center gap-4 text-white p-8"
            >
              <img src={user.avatar_url} alt={user.login} />
              <p>
                <strong>Username:</strong> {user.login}
              </p>
              <p>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Profile
                </a>
              </p>
            </div>
          ))}

          {hasMore && !loading && <button onClick={loadMore}>Load More</button>}
          {loading && <p>Loading...</p>}
        </div>
      )}
    </div>
  );
};

export default Search;
