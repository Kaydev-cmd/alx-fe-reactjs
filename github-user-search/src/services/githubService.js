import axios from "axios";
import { BASE_URL } from "../constants";

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    return response.data;
  } catch (err) {
    console.error("Error fetching user data:", err);
    throw err;
  }
};

export const searchUsers = async ({
  username,
  location,
  repoCount,
  page = 1,
}) => {
  try {
    // Building the Query string

    let queryParts = [];

    if (username) queryParts.push(`${username} in:login`);
    if (location) queryParts.push(`location:${location}`);
    if (repoCount) queryParts.push(`repos:>=${repoCount}`);

    const query = queryParts.join(" ");

    const response = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(
        query
      )}&page=${page}&per_page=10`
    );

    return {
      users: response.data.items,
      hasMore: response.data.total_count > page * 10,
    };
    
  } catch (err) {
    console.error("Error performing advanced GitHub user search:", err);
    throw err;
  }
};
