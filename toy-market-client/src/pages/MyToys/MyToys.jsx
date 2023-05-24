import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToysRows from "./MyToysRows";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  const url = `https://toy-market-server-tan.vercel.app/addToys?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, []);

  const handleDeleteToy = (id) => {
    Swal.fire({
      title: "Are you sure? You want to delete this item?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-market-server-tan.vercel.app/addToys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your item has been deleted successfully.",
                "success"
              );
              const remainingToys = myToys.filter((toy) => toy._id !== id);
              setMyToys(remainingToys);
            }
          });
      }
    });
  };

  return (
    <div className="mx-auto lg:min-h-[56vh]">
      <div>
      <h2 className="text-center text-4xl text-orange-500 font-bold my-6">
        My Toys: {myToys.length}
      </h2>
      <div className="px-4 overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Picture of The Toy</th>
              <th>Name of The Toy</th>
              <th>Seller Name</th>
              <th>Seller Email</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Available Quantity</th>
              <th>Detail Description</th>
              <th>Modification</th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((toy) => (
              <MyToysRows
                key={toy._id}
                toy={toy}
                handleDeleteToy={handleDeleteToy}
              ></MyToysRows>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    
  );
};

export default MyToys;
