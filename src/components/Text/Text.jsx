import React from "react";
import "./Text.css";

const sizeClasses = {
  12: "size_12",
  14: "size_14",
  16: "size_16",
  18: "size_18",
  20: "size_20",
};

const fwClasses = {
  300: "fw300",
  400: "fw400",
  500: "fw500",
  700: "fw700",
  900: "fw900",
};

const Text = ({
  as = "p",
  size = sizeClasses[16],
  fw = fwClasses[400],
  variant,
  children,
}) => {
  return (
    <>
      {as === "h2" && (
        <h2 className={`${sizeClasses[size]} ${fwClasses[fw]} ${variant}`}>
          {children}
        </h2>
      )}
      {as === "h3" && (
        <h3 className={`${sizeClasses[size]} ${fwClasses[fw]} ${variant}`}>
          {children}
        </h3>
      )}
      {as === "span" && (
        <span className={`${sizeClasses[size]} ${fwClasses[fw]} ${variant}`}>
          {children}
        </span>
      )}
      {as === "p" && (
        <p className={`${sizeClasses[size]} ${fwClasses[fw]} ${variant}`}>
          {children}
        </p>
      )}
    </>
  );
};

export default Text;
