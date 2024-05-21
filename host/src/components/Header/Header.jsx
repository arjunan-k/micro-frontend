import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <button className="header-text">Google UPI</button>
      <div className="header-account-notification">
        <button className="header-text">Notification</button>
        <button className="header-text">Account</button>
      </div>
    </div>
  );
};

export default Header;
