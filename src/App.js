import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./Components/Dashboard";
import { Departments } from "./Components/Departments";
import { Products } from "./Components/Products";
import { SingleCategoryProducts } from "./Components/SingleCategoryProducts";
import HomePage from "./Pages/HomePage/HomePage";
import { Add } from "./Components/Add";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/departments/:dept" element={<SingleCategoryProducts />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/products" element={<Products />} />
        <Route path="/addNewProducts" element={<Add />} />
      </Routes>
    </div>
  );
}
