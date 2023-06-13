import React from "react";

export const LoginPage = () => {
  return (
    <div className="auth">
      <div className="auth_box">
        <h1>Войти</h1>

        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Войти</button>
        </form>
      </div>
    </div>
  );
};
