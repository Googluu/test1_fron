import { useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "./Alert";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="row g-3 align-items-center">
      {error && <Alert message={error} />}

      <div className="d-flex">
        <form onSubmit={handleSubmit} className="form-control">
          <h1 className="uppercase mb-2 fs-1 text-center">Login</h1>
          <label htmlFor="email" className="col-form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="youremail@gmail.com"
            className="form-control mb-2"
            onChange={handleChange}
          />

          <label htmlFor="password" className="col-form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="**********"
            id="password"
            className="form-control mb-2"
            onChange={handleChange}
          />
          <button className="btn btn-sm btn btn-primary">Login</button>
        </form>
      </div>
      <p className="m-2 form-text">
        Don't have an Account? <Link to="/register">Register</Link>
      </p>
      <div>
        <button className="m-2 btn btn-primary" onClick={handleGoogleSignin}>
          Google Login
        </button>
      </div>
    </div>
  );
};
