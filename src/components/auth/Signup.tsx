import { useForm } from "react-hook-form";
import UserService from "../../services/user-service";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    //console.log("Form Data:", data);
    try {
      const response = await UserService.register(
        data.username,
        data.email,
        data.password
      );

      await login(response.username);
    } catch (err: any) {
      setError(err.response ? err.response.data.message : "An error occurred");
      alert("invalid user information");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5 w-25 m-auto">
      <div className="d-flex mb-3">
        <div className="p-2">
          <h1 className="h3 mb-3 fw-normal text-center">Sign Up / Sign in</h1>
        </div>
        <div className="ms-auto p-2">
          <button
            className="btn btn-primary w-30 py-2"
            type="button"
            onClick={() => navigate("/signin")}
            disabled={loading}
          >
            Sign In
          </button>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="needs-validation"
        noValidate
      >
        <div className="form-floating">
          <input
            {...register("username", { required: "Username is required" })}
            id="username"
            type="text"
            className={`form-control ${errors.username ? "is-invalid" : ""}`}
          ></input>
          <label htmlFor="username" className="form-label">
            Username
          </label>
          {errors.username && (
            <div className="invalid-feedback">{errors.username.message}</div>
          )}
        </div>

        <div className="form-floating">
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
            id="email"
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
          />
          <label htmlFor="email" className="form-label">
            Email
          </label>
          {errors.email && (
            <div className="invalid-feedback">{errors.email.message}</div>
          )}
        </div>

        <div className="form-floating">
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
            id="password"
            type="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
          />
          <label htmlFor="password" className="form-label">
            Password
          </label>
          {errors.password && (
            <div className="invalid-feedback">{errors.password.message}</div>
          )}
        </div>

        <button
          className="btn btn-primary w-100 py-2"
          type="submit"
          disabled={loading}
        >
          {loading ? "Signing in..." : "Sign Up"}
        </button>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default SignUp;
