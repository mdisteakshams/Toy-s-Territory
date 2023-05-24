import { Link } from "react-router-dom";

const ShopByCategoriesCard = ({ vehicle }) => {
  const {_id, toyPicture, toyName, price, rating } = vehicle;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure className="">
        <img src={toyPicture} alt="Shoes" className="h-72" />
      </figure>
      <div className="card-body pt-0">
        <h2 className="text-2xl text-orange-500 text-center font-semibold ">
          {toyName}
        </h2>
        <div className="divider"></div>
        <h2 className="text-lg ps-4 mb-1">
          <span className="font-semibold">Price: </span>
          {price}$
        </h2>
        <h2 className="text-lg ps-4 mb-4">
          <span className="font-semibold">Rating:</span> {rating}
        </h2>
        <div className="card-actions justify-end">
          <Link to={`viewVehicleDetails/${_id}`}><button className="btn btn-primary">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategoriesCard;
