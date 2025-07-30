import axios from "axios";
import { BASE_URL } from "../constants";

const fetchUserData = async (username) => {
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

export default fetchUserData;
