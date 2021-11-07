import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/BrainFlix-logo.svg";
import "./TopBar.scss";

function TopBar() {
  return (
    <div className="topbar">
      <Link to="/">
        <img src={Logo} alt="Video play button with the company title next to it BrainFlix" className="topbar__logo" />
      </Link>

      <div className="topbar__overlay">
        <input className="topbar__search" required placeholder="Search" />
        <figure className="topbar__avatar" />

        <Link to="/upload">
          <button className="topbar__button">UPLOAD</button>{" "}
        </Link>
      </div>
    </div>
  );
}

export default TopBar;
