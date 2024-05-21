import "./Sidebar.css";

const Sidebar = () => {
  return (
    <section className="sidebar-container">
      <button className="active">Payment</button>
      <button>Wallet</button>
      <button>Order</button>
      <button>Invoice</button>
      <button>Report</button>
      <button>Netbanking</button>
      <button>Refund</button>
    </section>
  );
};

export default Sidebar;
