import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const onLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <header>
      <div className="container">
        <div className="wrap">
          <div className="header_logo"></div>

          {user ? (
            <div className="header_btns">
              <Link to="/">Добавить пост</Link>
              <button onClick={onLogout}>Выйти</button>
              <img src={user.avatar} alt="" />
              <span>{user.username}</span>
            </div>
          ) : (
            <div className="header_btns">
              <Link to="/login">Войти</Link>
              <Link to="/register">Регистрация</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
