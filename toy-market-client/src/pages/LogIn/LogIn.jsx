import { Link, useLocation, useNavigate } from "react-router-dom";
import authPic from "../../assets/Authentication.jpg";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import SocialLogIn from "../Shared/SocialLogIn/SocialLogIn";
import Swal from "sweetalert2";
const LogIn = () => {
  const { signInUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLoginAuth = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    if ((email, password)) {
      signInUser(email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          setError("");
          Swal.fire({
            title: "Success!",
            text: "The User Has Been Successfully LoggedIn To The Account",
            icon: "success",
            confirmButtonText: "ok",
          });
          navigate(from, { replace: true });
        })
        .catch(() => {
          setError("Password Is Not Matching With Email");
        });
    }
  };

  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left w-1/2">
          <img src={authPic} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Login</h1>
            <form onSubmit={handleLoginAuth}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  required
                  className="input input-bordered"
                />
              </div>
              <p className="text-error">{error}</p>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Log In"
                />
              </div>
            </form>
            <p className="my-4 text-center">
              New to Toys Territory?{" "}
              <Link className="text-blue-700 font-bold" to="/signup">
                Register
              </Link>
            </p>

            <div className="divider">Or Sign in with</div>

            <SocialLogIn></SocialLogIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
