import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { inventoryData } from "../inventoryData";
import "./Departments.css";

export const Departments = () => {
  const [uniqueDepartments, setUniqueDepartments] = useState([]);

  useEffect(() => {
    const uniqueDepts = inventoryData.reduce((uniqueDepts, curr) => {
      if (!uniqueDepts.includes(curr.department)) {
        uniqueDepts.push(curr.department);
      }
      return uniqueDepts;
    }, []);

    setUniqueDepartments(uniqueDepts);
  }, []);

  return (
    <div className="dept-main-div">
      {uniqueDepartments.map((dept, index) => (
        <div key={index} className="dept-container">
          <Link className="dept-link" to={`/departments/${dept}`}>
            {dept}
          </Link>
        </div>
      ))}
    </div>
  );
};
