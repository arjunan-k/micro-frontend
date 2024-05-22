import "./Sidebar.css";
import { useNavigate, useParams } from "react-router";

const Buttons = [
  {
    label: "Payment",
    navPath: "payment",
  },
  {
    label: "Wallet",
    navPath: "wallet",
  },
  {
    label: "Order",
    navPath: "order",
  },
  {
    label: "Invoice",
    navPath: "invoice",
  },
  {
    label: "Report",
    navPath: "report",
  },
  {
    label: "Netbanking",
    navPath: "netbanking",
  },
  {
    label: "Refund",
    navPath: "refund",
  },
];

const Sidebar = () => {
  const { navigationPath } = useParams();
  const navigate = useNavigate();
  const navigationHandler = (e) => {
    let navPath = e.target.dataset.navPath;
    navigate(`./${navPath}`);
  };

  return (
    <section className="sidebar-container">
      {Buttons.map((button, index) => (
        <button
          key={index}
          onClick={navigationHandler}
          data-nav-path={button.navPath}
          className={navigationPath === button.navPath ? "active" : ""}
        >
          {button.label}
        </button>
      ))}
    </section>
  );
};

export default Sidebar;
