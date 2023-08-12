import { Link } from "react-router-dom";
import "./SideBar.css";

export const SideBar = () => {
  return (
    <div className="side-bar">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/departments">Departments</Link>
      <Link to="/products">Products</Link>
    </div>
  );
};
