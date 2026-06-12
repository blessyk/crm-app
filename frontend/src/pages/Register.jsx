import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../components/ui/Button";
import { registerUser } from "../services/authService";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      return setError(
        "Passwords do not match"
      );
    }

    try {
      setLoading(true);  
    const response = await registerUser(formData);
    console.log(response.data);
    alert("Registration Successful");
    navigate("/login");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gradient-to-br
      from-indigo-600
      via-purple-600
      to-cyan-500
      "
    >
      <div
        className="
        w-full
        max-w-md
        bg-white
        rounded-3xl
        p-8
        shadow-2xl
        "
      >
        <h1 className="text-3xl font-bold text-center">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Register to access Dashboard
        </p>

        {error && (
          <p className="text-red-500 text-center mt-3">
            {error}
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className="mt-6 space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="
            w-full
            p-3
            border
            rounded-xl
            focus:outline-none
            focus:ring-2
            focus:ring-indigo-500
            "
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="
            w-full
            p-3
            border
            rounded-xl
            focus:outline-none
            focus:ring-2
            focus:ring-indigo-500
            "
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="
            w-full
            p-3
            border
            rounded-xl
            focus:outline-none
            focus:ring-2
            focus:ring-indigo-500
            "
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="
            w-full
            p-3
            border
            rounded-xl
            focus:outline-none
            focus:ring-2
            focus:ring-indigo-500
            "
          />

          <Button type="submit">
            {loading
              ? "Creating..."
              : "Create Account"}
          </Button>
        </form>

        <p className="text-center mt-5">
          Already have an account?
          <Link
            className="text-indigo-600 ml-2 font-medium"
            to="/login"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;