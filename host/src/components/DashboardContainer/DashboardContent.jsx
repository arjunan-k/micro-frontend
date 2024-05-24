import { useParams } from "react-router";
import OrderApp from "../OrderApp/OrderApp";
import ReportApp from "../ReportApp/ReportApp";
import WalletApp from "walletRemoteApp/WalletApp";
import InvoiceApp from "../InvoiceApp/InvoiceApp";
import PaymentApp from "paymentRemoteApp/PaymentApp";

const DashboardContent = () => {
  const { navigationPath } = useParams();

  return (
    <>
      {navigationPath === "payment" && <PaymentApp />}
      {navigationPath === "wallet" && <WalletApp />}
      {navigationPath === "order" && <OrderApp />}
      {navigationPath === "invoice" && <InvoiceApp />}
      {navigationPath === "report" && <ReportApp />}
    </>
  );
};

export default DashboardContent;
