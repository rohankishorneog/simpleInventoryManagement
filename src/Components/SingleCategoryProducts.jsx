import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { inventoryData } from "../inventoryData";

export const SingleCategoryProducts = () => {
  const { dept } = useParams();

  const [currentCategoryData, setCurrentCategoryData] = useState([]);

  useEffect(() => {
    const data = inventoryData.filter((curr) => curr.department === dept);

    setCurrentCategoryData(data);
  }, [dept]);
  return (
    <div>
      {currentCategoryData.map((curr) => (
        <div key={curr.id}>
          <img src={curr.imageUrl} alt="" />
          <p>{curr.name}</p>
          <p>{curr.description}</p>
          <p>{curr.price}</p>
          <p>{curr.stock}</p>
        </div>
      ))}
    </div>
  );
};
