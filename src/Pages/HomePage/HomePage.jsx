import { Dashboard } from "../../Components/Dashboard";
import { SideBar } from "../../Components/SideBar";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-main-div">
      <div className="sidebar-div">
        <SideBar />
      </div>
      <div className="content-div">
        <Dashboard />
      </div>
    </div>
  );
};

export default HomePage;
