import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <hr
        style={{
          borderBottom: "2px",
          borderColor: "white",
          marginTop: "0px",
        }}
      />
      <p>Copyright &#169; 2021 My Portfolio Website</p>
    </footer>
  );
}
