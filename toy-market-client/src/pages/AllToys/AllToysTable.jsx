import { Link } from "react-router-dom";

const AllToysTable = ({ toys }) => {
  const { _id, sellerName, toyName, subCategory, price, quantity } = toys;
  return (
    <tr>
      <td>{sellerName}</td>
      <td>{toyName}</td>
      <td>{subCategory}</td>
      <td>${price}</td>
      <td className="ps-16">{quantity}</td>
      <th>
        <Link to={`viewToyDetails/${_id}`}>
          <button className="btn btn-outline btn-warning me-3">
            View Toy Details
          </button>
        </Link>
      </th>
    </tr>
  );
};

export default AllToysTable;
