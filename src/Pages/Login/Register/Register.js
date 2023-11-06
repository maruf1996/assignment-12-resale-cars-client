import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import "./Register.css";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signUpError, setSignUPError] = useState("");
  const { createUser, updateUser, signInGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleSignUp = (data) => {
    setSignUPError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email, data.accountType);
            navigate(from, { replace: true });
            toast("User Created Successfully.");
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        setSignUPError(error.message);
      });
  };

  const handleSignInGoogle = () => {
    signInGoogle()
      .then((result) => {
        const user = result.user;
        const accountType = "user";
        saveUser(user.displayName, user.email, accountType);
        navigate(from, { replace: true });
        toast("User Created Successfully.");
      })
      .catch((error) => {
        console.log(error.message);
        setSignUPError(error.message);
      });
  };

  const saveUser = (name, email, accountType) => {
    const user = { name, email, accountType };
    fetch("https://resale-cars-server.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="login_container">
      <div className="login_form">
        <h1
          style={{ color: " hwb(0 7% 36%)" }}
          className="text-center mb-5 fw-bold fs-3"
        >
          Register
        </h1>
        <button
          onClick={handleSignInGoogle}
          style={{
            color: " hwb(0 7% 36%)",
            border: "1px solid  hwb(0 7% 36%)",
          }}
          className="p-2 rounded fs-4 w-100 fw-bold"
        >
          Continue With Google
        </button>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <label className="form-label mt-3">Name</label>
          <input
            className="form-control form-control-lg mb-3"
            defaultValue=""
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="text-danger">{errors.name?.message}</p>}
          <label className="form-label mt-3">Email</label>
          <input
            className="form-control form-control-lg mb-3"
            defaultValue=""
            {...register("email", { required: "Email Address is required" })}
          />
          {errors.email && (
            <p className="text-danger">{errors.email?.message}</p>
          )}
          <label className="form-label mt-3">Password</label>
          <input
            className="form-control form-control-lg mb-3"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className="text-danger">{errors.password?.message}</p>
          )}
          <label className="form-label mt-3">Type of Account</label>
          <select className="p-2 mb-3 w-100" {...register("accountType")}>
            <option value="user">User Account</option>
            <option value="seller">Seller Account</option>
          </select>
          <input
            style={{ background: " hwb(0 7% 36%)" }}
            className="btn text-light d-block w-100 btn-lg my-3"
            type="submit"
          />
          <div className="">
            {signUpError && <p className="text-danger">{signUpError}</p>}
          </div>
        </form>
        <p className="create_para">
          Already have an account ?{" "}
          <Link to="/login" className="text-decoration-none">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
