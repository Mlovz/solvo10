import React from "react";
import { Text } from "../Text/Text";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="wrap">
          <div className="header_logo"></div>

          <div className="header_btns">
            <Link to="/login">Войти</Link>
            <Link to="/register">Регистрация</Link>
          </div>
        </div>
      </div>
    </header>
  );
};
