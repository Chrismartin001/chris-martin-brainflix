// import react from "react";
import Logo from "../../assets/logo/BrainFlix-logo.svg";
import "./TopBar.scss";

function TopBar() {
  return (
    <div className="topbar">
      <img src={Logo} alt="Video play button with the company title next to it BrainFlix" className="topbar__logo" />
      <div className="comment__overlay">
        <input className="topbar__search" required placeholder="Search" />
        {/* <img src={Search} className="topbar__search--img" /> */}

        <img className="topbar__avatar" />
      </div>

      <button className="topbar__button">UPLOAD</button>
    </div>
  );
}

export default TopBar;
