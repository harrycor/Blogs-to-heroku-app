import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { apiService, TOKEN_KEY } from "../helperTools/api-service";

const Login = () => {
  let [email, setEmail] = useState<string>("");
  let [password, setPassword] = useState<string>("");
  let navTo = useNavigate();

  let handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    apiService(`/auth/login`, "POST", {
      email,
      password,
    }).then((data) => {
      if (!data.message) {
        localStorage.setItem(TOKEN_KEY, data);
        alert("Login successful!");
        navTo("/")
      } else {
        alert(data.message);
      }
    });
  };

  return (
    <main className="container">
      <section className="mt-4 row justify-content-center">
        <div className="col-12 col-md-4">
          <form className="p-4 border rounded shadow form-group">
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="mb-2 form-control"
              type="email"
              autoComplete="email"
              value={email}
            />
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="mb-2 form-control"
              type="password"
              autoComplete="password"
              value={password}
            />
            <button onClick={handleSubmit} className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Login;
