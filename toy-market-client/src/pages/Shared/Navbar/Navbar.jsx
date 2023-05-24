import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import bg1 from "../../../assets/bg.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOutUser = () => {
    logOut().then();
    Swal.fire({
      title: "Success!",
      text: "Logged Out Successfully",
      icon: "success",
      confirmButtonText: "ok",
    });
    // .catch((error) => console.log(error));
  };
  const navBarItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="allToys">All Toys</Link>
      </li>
      <li>
        <Link to="blogs">Blogs</Link>
      </li>

      {user?.email ? (
        <>
          <li>
            <Link to="myToys">My Toys</Link>
          </li>
          <li>
            <Link to="addToy">Add A Toy</Link>
          </li>
          <li>
            <div
              className="tooltip tooltip-right rounded-box"
              data-tip={user.displayName}
            >
              <div className="">
                <img
                  className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                  src={user.photoURL}
                  alt=""
                />
              </div>
            </div>
          </li>
          <li>
            <button onClick={handleLogOutUser}>Log Out</button>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login">Log In</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 sm:flex">
      <div className="lg:navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navBarItems}
          </ul>
        </div>
        <div className="lg:ms-28 sm:ms-28">
          <img className="h-[100px]" src={bg1} alt="" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navBarItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
