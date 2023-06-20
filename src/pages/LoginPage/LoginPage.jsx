import React from "react";
import "./auth.css";
import { useState } from "react";
import { useEffect } from "react";

export const LoginPage = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const authData = JSON.parse(localStorage.getItem("user"));

  const user = {
    username: "admin",
    password: "123456",
    avatar:
      "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg",
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const onLogin = (e) => {
    e.preventDefault();
    if (user.username !== userData.username) {
      return setError("Пользователя нет в базе");
    }

    if (user.password !== userData.password) {
      return setError("Неправильный пароль.");
    }

    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "/";
  };

  useEffect(() => {
    if (authData) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div className="auth">
      <div className="auth_box">
        <h1>Войти</h1>

        {error && <p className="error">{error}</p>}

        <form onSubmit={onLogin}>
          <input
            name="username"
            value={userData.username}
            onChange={handleChange}
            type="text"
            placeholder="Username"
          />
          <input
            name="password"
            value={userData.password}
            onChange={handleChange}
            type="password"
            placeholder="Password"
          />
          <button type="submit">Войти</button>
        </form>
      </div>
    </div>
  );
};
