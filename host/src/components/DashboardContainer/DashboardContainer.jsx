import "./DashboardContainer.css";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet, useParams } from "react-router-dom";

const DashboardContainer = () => {
  const { navigationPath } = useParams();

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        {navigationPath ? (
          <Outlet />
        ) : (
          <p>This is a Micro Frontend dashboard setup</p>
        )}
      </div>
    </div>
  );
};

export default DashboardContainer;
