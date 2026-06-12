import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Button from "../components/ui/Button";
import { loginUser } from "../services/authService";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     const data = await loginUser(formData);
     localStorage.setItem("token", data.token);
     // alert("Login Successful");

      navigate("/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Login Failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl">
        <h1 className="text-3xl font-bold text-center">
          Login
        </h1>

        {error && (
          <p className="text-red-500 text-center mt-4">
            {error}
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className="mt-6 space-y-4"
        >
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
            required
          />

          <Button type="submit">
            Login
          </Button>
        </form>

        <p className="text-center mt-5">
          New User?
          <Link
            className="text-indigo-600 ml-2"
            to="/register"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;