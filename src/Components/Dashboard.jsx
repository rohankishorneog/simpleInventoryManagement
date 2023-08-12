import React, { useState, useEffect } from "react";
import { inventoryData } from "../inventoryData";
import "./Dashboard.css";
import { SideBar } from "./SideBar";

export const Dashboard = () => {
  const [totalStock, setTotalStock] = useState(0);
  const [totalDelivered, setTotalDelivered] = useState(0);
  const [lowStockItems, setLowStockItems] = useState(0);

  useEffect(() => {
    const calculateValues = () => {
      const stockSum = inventoryData.reduce(
        (total, curr) => total + curr.stock,
        0
      );
      const deliveredSum = inventoryData.reduce(
        (total, curr) => total + curr.delivered,
        0
      );
      const lowStockCount = inventoryData.reduce(
        (total, curr) => (curr.stock <= 10 ? total + 1 : total),
        0
      );

      setTotalStock(stockSum);
      setTotalDelivered(deliveredSum);
      setLowStockItems(lowStockCount);
    };

    calculateValues();
  }, []);

  return (
    <div className="dash-main-div">
      <div className="count-container">
        <div className="stock-num">{totalStock}</div>
        <p>Total Stock</p>
      </div>
      <div className="count-container">
        <div className="delivered-num">{totalDelivered}</div>
        <p>Total Delivered</p>
      </div>
      <div className="count-container">
        <div className="low-stock-num">{lowStockItems}</div>
        <p>Low Stock Items</p>
      </div>
    </div>
  );
};
