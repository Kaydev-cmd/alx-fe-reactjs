import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { username, email, password } = formData;

    if (!username || !email || !password) {
      return "Please fill out fields";
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(false);
    setSuccess("Submitted successfully.");
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container mx-auto p-6 flex flex-col gap-4"
    >
      <div className="flex flex-col">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter your username"
          value={formData.username}
          onChange={handleChange}
          className="py-4 px-2 border border-blue-500 rounded-lg"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="username">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={handleChange}
          className="py-4 px-2 border border-blue-500 rounded-lg"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          className="py-4 px-2 border border-blue-500 rounded-lg"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 p-4 text-white rounded-lg"
        disabled={loading}
      >
        {loading ? "Processing" : "Submit"}
      </button>
      {error && <p className="text-red-600 text-center mt-4">{error}</p>}
      {success && <p className="text-green-600 text-center mt-4">{success}</p>}
    </form>
  );
};

export default RegistrationForm;
