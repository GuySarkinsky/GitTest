import React from "react";
import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

const NotFoundPage = () => {
  return (
    <>
      <Alert variant="danger d-flex justify-content-center">
        <h1>page not found</h1>
      </Alert>
      <Link
        to={{
          pathname: "/"
        }}
        className="h5 d-flex justify-content-center"
      >
        <p>Back Home</p>
      </Link>
    </>
  );
};

export default NotFoundPage;
