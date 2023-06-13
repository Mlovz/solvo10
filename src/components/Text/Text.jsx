import React from "react";
import "./Text.css";

export const Text = ({ as, size, align = "center", children }) => {
  const sizeClasses = {
    12: "size12",
    14: "size14",
    16: "size16",
    18: "size18",
    20: "size20",
  };
  const alignClasses = {
    center: "text_center",
    left: "text_left",
    right: "text_right",
  };

  return (
    <>
      {as === "span" && (
        <span className={`${sizeClasses[size]} ${alignClasses[align]}`}>
          {children}
        </span>
      )}
      {as === "p" && (
        <p className={`${sizeClasses[size]} ${alignClasses[align]}`}>
          {children}
        </p>
      )}
      {as === "h1" && (
        <h1 className={`${sizeClasses[size]} ${alignClasses[align]}`}>
          {children}
        </h1>
      )}
      {as === "h2" && (
        <h2 className={`${sizeClasses[size]} ${alignClasses[align]}`}>
          {children}
        </h2>
      )}
    </>
  );
};
