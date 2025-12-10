import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>LOCATION</h3>
        <p>2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>
      </div>

      <div className="footer-section">
        <h3>AROUND THE WEB</h3>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">F</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">T</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">L</a>
        </div>
      </div>

      <div className="footer-section">
        <h3>ABOUT FREELANCER</h3>
        <p>
          Freelancer is a free to use, licensed Bootstrap theme created by Route.
        </p>
      </div>
    </footer>
  );
}
 