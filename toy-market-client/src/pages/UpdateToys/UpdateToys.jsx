import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToys = () => {
  const toys = useLoaderData();
  const { _id, price, quantity, detail } = toys;

  const handleUpdateToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const detail = form.detail.value;
    const updatedToy = {
      price,
      quantity,
      detail,
    };
    console.log(updatedToy);

    Swal.fire({
      title: "Are you sure? You Want save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes, Save",
      denyButtonText: `No, Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-market-server-tan.vercel.app/addToys/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedToy),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              Swal.fire("Saved!", "", "success");
            }
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mt-4">
        <h2 className="text-center text-4xl font-bold text-orange-500">
          Update Toy Details
        </h2>
        <div className="card-body">
          <form onSubmit={handleUpdateToy}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="price"
                  name="price"
                  defaultValue={price}
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
                  defaultValue={quantity}
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
                  defaultValue={detail}
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary btn-block"
                type="submit"
                value="Update The Toy"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateToys;
