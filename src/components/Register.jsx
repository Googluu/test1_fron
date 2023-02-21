import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate, Link } from "react-router-dom";
import { Alert } from "./Alert";

export const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="row g-3 align-items-center">
      {error && <Alert message={error} />}

      <form onSubmit={handleSubmit} className="form-control">
        <h1 className="uppercase mb-2 fs-1 text-center">Register</h1>
        <div className="col-auto">
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
        </div>

        <div className="col-auto">
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
        </div>
        <button className="btn btn-sm btn btn-primary">Register</button>
      </form>
      <p className="form-text">
        Alredy have an Account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};
