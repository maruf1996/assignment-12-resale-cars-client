import React from "react";
import { Link, useRouteError } from "react-router-dom";
import errorImg from "../../img/404-img.png";
import "./Error.css";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="error-container">
      <div className="error">
        <img src={errorImg} className="w-100" alt="" />
        <div className="error_text">
          <h3 className="text-danger mb-3">
            {error.statusText || error.message}
          </h3>
          <Link to="/">
            <button className="btn btn-info btn-lg text-light fw-bold px-4">
              Back To Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
