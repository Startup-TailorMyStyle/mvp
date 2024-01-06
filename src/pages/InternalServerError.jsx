import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components";

const InternalServerError = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 py-5 bg-light text-center">
              <h4 className="p-3 display-5">500: A apărut o problemă! Ne scuzați de inconveniență!</h4>
              <Link to="/mvp" className="btn  btn-outline-dark mx-4">
                <i className="fa fa-arrow-left"></i> Înapoi acasă
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InternalServerError;
