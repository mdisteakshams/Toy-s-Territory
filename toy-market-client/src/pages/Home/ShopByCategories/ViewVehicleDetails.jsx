import { useLoaderData } from "react-router-dom";

const ViewVehicleDetails = () => {
  const vehicleDetails = useLoaderData();
  const {
    toyName,
    toyPicture,
    sellerName,
    email,
    subCategory,
    price,
    rating,
    quantity,
    detail,
  } = vehicleDetails;
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-24 mt-16">
        <div className="card lg:card-side bg-white shadow-xl">
          <figure className="lg:w-auto">
            <img src={toyPicture} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="text-center text-3xl font-bold mb-5 text-lg">
              {toyName}
            </h2>
            <p>
              <span className="font-semibold text-lg">Seller Name</span>:{" "}
              {sellerName}
            </p>
            <p>
              <span className="font-semibold text-lg">
                Seller Email Address
              </span>
              : {email}
            </p>
            <p>
              <span className="font-semibold text-lg">Sub-Category</span>:{" "}
              {subCategory}
            </p>
            <p>
              <span className="font-semibold text-lg">Price</span>: {price}
            </p>
            <p>
              <span className="font-semibold text-lg">Rating</span>: {rating}
            </p>
            <p>
              <span className="font-semibold text-lg">Quantity</span>:{" "}
              {quantity}
            </p>
            <p>
              <span className="font-semibold text-lg">Description</span>:{" "}
              {detail}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewVehicleDetails;
