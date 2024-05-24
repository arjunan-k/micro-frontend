import { useNavigate } from "react-router";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const logoClickHandler = () => {
    navigate("./");
  };

  return (
    <div className="header-container">
      <button className="header-text" onClick={logoClickHandler}>
        Google UPI
      </button>
      <div className="header-account-notification">
        <button className="header-text">Notification</button>
        <button className="header-text">Account</button>
      </div>
    </div>
  );
};

export default Header;
