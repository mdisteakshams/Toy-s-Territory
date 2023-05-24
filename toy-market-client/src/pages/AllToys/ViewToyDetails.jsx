import { useLoaderData } from "react-router-dom";

const ViewToyDetails = () => {
  const toyDetails = useLoaderData();
  const {
    toyPicture,
    toyName,
    sellerName,
    email,
    price,
    rating,
    quantity,
    detail,
  } = toyDetails;
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-24 mt-16">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure className="lg:w-2/3">
            <img src={toyPicture} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="text-center text-3xl font-bold mb-5">{toyName}</h2>
            <p>
              <span className="font-semibold">Seller</span>: {sellerName}
            </p>
            <p>
              <span className="font-semibold">Seller Email Address</span>:{" "}
              {email}
            </p>
            <p>
              <span className="font-semibold">Price</span>: ${price}
            </p>
            <p>
              <span className="font-semibold">Rating</span>: {rating}s
            </p>
            <p>
              <span className="font-semibold">Available Quantity</span>:{" "}
              {quantity}
            </p>
            <p>
              <span className="font-semibold">Detail Description</span>:{" "}
              {detail}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewToyDetails;
