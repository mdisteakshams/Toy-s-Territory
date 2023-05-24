import { useEffect, useState } from "react";
import AllToysTable from "./AllToysTable";
import Pagination from "./Pagination";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20; 

  useEffect(() => {
    fetch("https://toy-market-server-tan.vercel.app/addToys")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);

  
  const indexOfLastToy = currentPage * itemsPerPage;
  const indexOfFirstToy = indexOfLastToy - itemsPerPage;
  const currentToys = allToys.slice(indexOfFirstToy, indexOfLastToy);

  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="max-w-7xl mx-auto lg:min-h-[60vh]">
      <div>
        <h3 className="text-center mb-10 mt-5 font-bold text-3xl text-orange-500">
          Toys: {allToys.length}
        </h3>
        <div className="overflow-x-auto w-full mb-10">
          <table className="table w-full">
            
            <thead>
              <tr>
                <th>Seller</th>
                <th>Toy Name</th>
                <th>Sub-Category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {currentToys.map((toys) => (
                <AllToysTable key={toys._id} toys={toys} />
              ))}
            </tbody>
          </table>
        </div>
        <Pagination
          currentPage={currentPage}
          totalItems={allToys.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default AllToys;
