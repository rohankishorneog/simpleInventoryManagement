import React, { useState } from "react";
import { inventoryData } from "../inventoryData";
import { SideBar } from "./SideBar";

export const Add = () => {
  const [newProduct, setNewProduct] = useState({
    department: "",
    name: "",
    description: "",
    price: 0,
    stock: 0,
    sku: "",
    supplier: "",
    itemsDelivered: 0,
    imageUrl: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNewProduct({
      department: "",
      name: "",
      description: "",
      price: 0,
      stock: 0,
      sku: "",
      supplier: "",
      itemsDelivered: 0,
      imageUrl: ""
    });
    inventoryData.push(newProduct);
  };

  return (
    <div className="add-form">
      <SideBar />
      <div>
        <h2>Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Department:
            <input
              type="text"
              name="department"
              value={newProduct.department}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={newProduct.name}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Description:
            <textarea
              name="description"
              value={newProduct.description}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Price:
            <input
              type="number"
              name="price"
              value={newProduct.price}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Stock:
            <input
              type="number"
              name="stock"
              value={newProduct.stock}
              onChange={handleInputChange}
            />
          </label>
          <label>
            SKU:
            <input
              type="text"
              name="sku"
              value={newProduct.sku}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Supplier:
            <input
              type="text"
              name="supplier"
              value={newProduct.supplier}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Image URL:
            <input
              type="text"
              name="imageUrl"
              value={newProduct.imageUrl}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Add Product</button>
        </form>
      </div>
    </div>
  );
};
