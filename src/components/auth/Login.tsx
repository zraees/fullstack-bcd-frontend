import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import UserService from "../../services/user-service";

export const LoginPage = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await UserService.authenticate(email, password);
      // Handle successful sign-in (e.g., save token, redirect)
      console.log('Sign-in successful:', response);
      await login(response.username);

    } catch (err: any) {
      setError(err.response ? err.response.data.message : 'An error occurred');
      alert("Invalid email or password");
    } finally {
      setLoading(false);
    }
    
    // if (email === "user@domain.com" && password === "password") {
    //   // Replace with actual authentication logic
    //   await login(email);
    // } else {
    //   alert("Invalid email or password");
    // }
  };

  return (
    <main className="form-signin w-25 m-auto">
      <form onSubmit={handleLogin}>
        
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          ></input>
          <label htmlFor="floatingInput">Email address</label>
        </div>

        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <label htmlFor="floatingPassword">Password</label>
        </div>
        
        <button className="btn btn-primary w-100 py-2" type="submit" disabled={loading}>
          {loading ? 'Signing in...' : 'Sign In'}
        </button>        
        {error && <p style={{ color: 'red' }}>{error}</p>}
        
      </form>
    </main>
  );
};
