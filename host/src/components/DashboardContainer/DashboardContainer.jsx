import "./DashboardContainer.css";
import Sidebar from "../Sidebar/Sidebar";
import WalletApp from "walletRemoteApp/WalletApp";
import PaymentApp from "paymentRemoteApp/PaymentApp";

const DashboardContainer = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <WalletApp />
        <PaymentApp />
      </div>
    </div>
  );
};

export default DashboardContainer;
