import { Link } from "react-router-dom";

const MyToysRows = ({ toy, handleDeleteToy }) => {
  const {
    _id,
    sellerName,
    toyPicture,
    toyName,
    email,
    subCategory,
    price,
    rating,
    quantity,
    detail,
  } = toy;

  
  const getCroppedDetail = (text, limit) => {
    const splittedWords = text.split(' ');
    const cropped = splittedWords.slice(0, limit).join(' ');
    if (splittedWords.length > limit) {
      return `${cropped} ...`;
    }
    return cropped;
  };

  
  const croppedDetail = getCroppedDetail(detail, 10);

  return (
    <tr>
      <td>
        <div className="avatar ms-4">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={toyPicture} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>{toyName}</td>
      <td>{sellerName}</td>
      <td>{email}</td>
      <td>{subCategory}</td>
      <td>${price}</td>
      <td>{rating}</td>
      <td>{quantity}</td>
      <td>{croppedDetail}</td>
      <th>
        <Link to={`updateToyDetails/${_id}`}>
          <button className="btn btn-outline btn-warning me-3">Update</button>
        </Link>
        <button onClick={() => handleDeleteToy(_id)} className="btn btn-outline btn-error">Delete</button>
      </th>
    </tr>
  );
};

export default MyToysRows;
