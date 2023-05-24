import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogIn = () => {
  const { googleSinInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignInUser = () => {
    googleSinInUser()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Success!",
          text: "The User Has Been Successfully LoggedIn To The Account",
          icon: "success",
          confirmButtonText: "ok",
        });
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="text-center">
        <button
          onClick={handleGoogleSignInUser}
          className="btn btn-outline btn-success"
        >
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogIn;
