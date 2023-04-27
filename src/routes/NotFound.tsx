import React from "react";
import { Link } from "react-router-dom";
import image404 from "../assets/images/404.jpg";
import MetaTag from "../components/Share/MetaTag";

const NotFound = () => {
  return (
    <div className="NotFound position-absolute w-100 top-50 translate-middle-y">
      <MetaTag title="myBlog - 404" description="Page not found" />
      <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xxl-4 offset-xxl-4 d-flex justify-content-center align-items-center flex-column">
        <img className="img-fluid" src={image404} alt="Not found" />
        <h1 className="text-center">Page Not Found</h1>
        <Link className="btn btn-warning mt-2" to="/">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
