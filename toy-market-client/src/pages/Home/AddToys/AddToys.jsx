import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";

const AddToys = () => {
  const { user } = useContext(AuthContext);
  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const picture = form.picture.value;
    const toyName = form.toyName.value;
    const name = user?.displayName;
    const email = user?.email;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const detail = form.detail.value;
    const added = {
      toyPicture: picture,
      toyName,
      sellerName: name,
      email,
      subCategory,
      price,
      rating,
      quantity,
      detail,
    };
    console.log(added);
    fetch("https://toy-market-server-tan.vercel.app/addToys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(added),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "The toy has been added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mt-4">
        <h2 className="text-center text-4xl font-bold text-orange-500">Toy Description Form</h2>
        <div className="card-body">
          <form onSubmit={handleAddToy}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Picture URL of The Toy</span>
                </label>
                <input
                  type="text"
                  placeholder="Picture URL of The Toy"
                  name="picture"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name of the Toy</span>
                </label>
                <input
                  type="text"
                  placeholder="Name of the Toy"
                  name="toyName"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Seller name</span>
                </label>
                <input
                  type="text"
                  placeholder="Seller name"
                  name="name"
                  defaultValue={user?.displayName}
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Seller email</span>
                </label>
                <input
                  type="text"
                  placeholder="Seller email"
                  name="email"
                  defaultValue={user?.email}
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Sub-category</span>
                </label>
                <input
                  type="text"
                  placeholder="Sub-category"
                  name="subCategory"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="price"
                  name="price"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="text"
                  placeholder="rating"
                  name="rating"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Available quantity</span>
                </label>
                <input
                  type="text"
                  placeholder="quantity"
                  name="quantity"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Detail description</span>
                </label>
                <input
                  type="text"
                  placeholder="Detail"
                  name="detail"
                  required
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary btn-block"
                type="submit"
                value="Add The Toy"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
// vercel file

export default AddToys;
