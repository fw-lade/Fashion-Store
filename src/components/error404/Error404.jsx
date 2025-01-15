import React from "react";
import "./error.css";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <>
      <div className="error-wrap">
        <img
          src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
          alt="404 error image"
        />
        <h1>404 Error</h1>
        <p>The page you were looking for could not be found</p>
        <Link to="/">Go to Home</Link>
      </div>
    </>
  );
};

export default Error404;
