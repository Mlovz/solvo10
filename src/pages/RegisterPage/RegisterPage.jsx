import React from "react";

export const RegisterPage = () => {
  return (
    <div className="auth">
      <div className="auth_box">
        <h1>Регистрация</h1>

        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button type="submit">Регистрация</button>
        </form>
      </div>
    </div>
  );
};
