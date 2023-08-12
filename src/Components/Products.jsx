import React, { useState } from "react";
import { inventoryData } from "../inventoryData";
import { Link } from "react-router-dom";
import "./Products.css";

export const Products = () => {
  const [departmentFilter, setDepartmentFilter] = useState("All");
  const [lowStockFilter, setLowStockFilter] = useState(false);
  const [sortOption, setSortOption] = useState("");

  const filteredData = inventoryData
    .filter((item) =>
      departmentFilter === "All" ? true : item.department === departmentFilter
    )
    .filter((item) => !lowStockFilter || item.stock <= 10)
    .sort((a, b) => {
      if (sortOption === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortOption === "price") {
        return a.price - b.price;
      } else if (sortOption === "stock") {
        return a.stock - b.stock;
      }
      return 0;
    });

  return (
    <div className="products-main-div">
      <div className="filters">
        <label>
          Department:
          <select
            value={departmentFilter}
            onChange={(e) => setDepartmentFilter(e.target.value)}
          >
            <option value="All">All departments</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Clothing">Clothing</option>
            <option value="Toys">Toys</option>
          </select>
        </label>
        <label>
          Low Stock:
          <input
            type="checkbox"
            checked={lowStockFilter}
            onChange={() => setLowStockFilter(!lowStockFilter)}
          />
        </label>
        <label>
          Sort by:
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">None</option>
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="stock">Stock</option>
          </select>
        </label>

        <Link to="/addNewProducts">Add</Link>
      </div>
      <table className="product-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Supplier</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((curr) => (
            <tr key={curr.id}>
              <td>
                <img className="product-image" src={curr.imageUrl} alt="" />
              </td>
              <td>{curr.name}</td>
              <td>{curr.description}</td>
              <td>${curr.price}</td>
              <td>{curr.stock}</td>
              <td>{curr.supplier}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
