import React from "react";
import { NavLink } from 'react-router-dom'


const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card shadow bg-dark text-white border-0">
          <img
            className="card-img img-fluid"
            src="./assets/homeMain.png.jpg"
            alt="Card"
            height={100}
          />
          <div className="card-img-overlay d-flex align-items-flex-start">
            <div className="container">
              <h5 className="fw-bold display-1 text-center"
              >Precizie în modă, Potrivit perfect pentru tine!</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
