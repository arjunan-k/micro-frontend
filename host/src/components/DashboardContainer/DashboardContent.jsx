import WalletApp from "walletRemoteApp/WalletApp";
import PaymentApp from "paymentRemoteApp/PaymentApp";
import { useParams } from "react-router";

const DashboardContent = () => {
  const { navigationPath } = useParams();

  return (
    <>
      {navigationPath === "payment" && <PaymentApp />}
      {navigationPath === "wallet" && <WalletApp />}
    </>
  );
};

export default DashboardContent;
