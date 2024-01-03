import React from "react";
import { NavLink } from 'react-router-dom'


const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/homeMain.png.jpg"
            alt="Card"
            height={200}
          />
          <div className="card-img-overlay d-flex align-items-flex-start">
            <div className="container">
              <h5 className="card-title text fw-bold"
              style={{ fontSize: '2.5em', fontWeight: 'bold', color: 'black' }}
              >Precizie în modă, Potrivit perfect pentru tine!</h5>

              <button class='btn btn-success'
              style={{ fontSize: '1.5em'}}>
                <NavLink className="nav-link" to="/product">Exploreaza produsele</NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
