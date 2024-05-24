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
          <div className="p-32">
            <h1>Host Repository: Micro Frontend Dashboard Setup</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardContainer;
