import { Link, useLocation, useNavigate } from "react-router-dom";
import authPic from "../../assets/Authentication.jpg";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import SocialLogIn from "../Shared/SocialLogIn/SocialLogIn";
import Swal from 'sweetalert2'
const SignUp = () => {
    const {createUser, updateUser} = useContext(AuthContext);
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleSignUPAuth = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, photo, password);
        
        if(password.length<6){
          setError('Password should contain at least 6 characters');
          return;
      }
        
        createUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user)
            updateUser(name, photo)
            .then()
            setError('');
            Swal.fire({
              title: 'Success!',
              text: 'The Profile Has Been Created Successfully',
              icon: 'success',
              confirmButtonText: 'ok'
            })
            navigate(from, { replace: true });
            event.target.reset();
        })
        .catch(error=>console.error(error))


    }
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left w-1/2">
          <img src={authPic} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Register</h1>
            <form onSubmit={handleSignUPAuth}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL for Cover Picture"
                  name="photo"
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
                  value="Register"
                />
              </div>
            </form>
            <p className="my-4 text-center">
              Already Have An Account? 
               <Link className="text-blue-700 font-bold" to="/login">
                 Log In
              </Link>
            </p>
            <div className="divider">Or Sign up with</div>
            <SocialLogIn></SocialLogIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
