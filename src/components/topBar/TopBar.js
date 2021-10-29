// import react from "react";
import Logo from "../../assets/logo/BrainFlix-logo.svg";
import Avatar from "../../assets/images/Mohan-muruge.jpg";
import "./TopBar.scss";
import Upload from "../../assets/icons/upload.svg";

function TopBar() {
  return (
    <div className="topbar">
      <img src={Logo} className="topbar__logo" />

      <img src={Avatar} className="topbar__avatar" />
      <button>
        <img src={Upload} />
        UPLOAD
      </button>
    </div>
  );
}

export default TopBar;
