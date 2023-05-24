import { useEffect, useState } from "react";
import ShopByCategoriesCard from "./ShopByCategoriesCard";

const ShopByCategories = () => {
  const [vehicles, setVehicles] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    fetch("https://toy-market-server-tan.vercel.app/addToys")
      .then((res) => res.json())
      .then((data) => setVehicles(data));
  }, []);

  const categoryIds = [
    ...new Set(vehicles.map((vehicle) => vehicle.subCategory)),
  ];

  const filteredVehicles =
    activeTab === "all"
      ? vehicles
      : vehicles.filter((vehicle) => vehicle.subCategory === activeTab);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mt-16 mb-16">
        <div className="">
          <div className="text-center">
            <h3 className="text-4xl text-orange-500 mb-5 font-semibold">
              Shop by Category
            </h3>
            <p className="mb-5">
              In this section we can see different types of vehicles based on
              their categories
            </p>
          </div>

          <div className="flex justify-center flex-col items-center mb-6 sm:flex-row">
            <button
              className={`mb-4 mr-4 lg:mb-0 px-4 py-2 rounded ${
                activeTab === "all" ? "bg-blue-500 text-white" : "bg-gray-300"
              }`}
              onClick={() => setActiveTab("all")}
            >
              All
            </button>
            {categoryIds.map((categoryId) => (
              <button
                key={categoryId}
                className={`mb-4 lg:mb-0 mr-4 px-4 py-2 rounded ${
                  activeTab === categoryId
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300"
                }`}
                onClick={() => setActiveTab(categoryId)}
              >
                {categoryId}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVehicles.map((vehicle) => (
              <ShopByCategoriesCard
                key={vehicle._id}
                vehicle={vehicle}
              ></ShopByCategoriesCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategories;
