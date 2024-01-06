import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";

const Checkout = () => {
  const state = useSelector((state) => state.handleCart);
  const navigate = useNavigate();

  const fNameRef = useRef(null)
  const lNameRef = useRef(null)
  const emailRef = useRef(null)

  const navigateToErr = () => {
    //Identify users here!!!
    global.analytics.identify({
      first_name: fNameRef.current.value,
      last_name: lNameRef.current.value,
      email: emailRef.current.value
    })
    navigate('/err500')
  }

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">Coșul dumneavoastră de cumpărături este gol!</h4>
            <Link to="/mvp" className="btn btn-outline-dark mx-4">
              <i className="fa fa-arrow-left"></i> Continuați cumpărăturile!
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const ShowCheckout = () => {
    let subtotal = 0;
    let shipping = 0.0;
    let totalItems = 0;
    state.map((item) => {
      return (subtotal += item.price * item.qty);
    });

    state.map((item) => {
      return (totalItems += item.qty);
    });
    return (
      <>
        <div className="container py-5">
          <div className="row my-4">
            <div className="col-md-5 col-lg-4 order-md-last">
              <div className="card mb-4">
                <div className="card-header py-3 bg-light">
                  <h5 className="mb-0">Rezumatul Comenzii</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Cost produse ({totalItems})<span>{Math.round((subtotal) * 100) / 100} RON</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Cost livrare
                      <span className="text-success">{shipping} RON</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total de plata</strong>
                      </div>
                      <span>
                        <strong>{Math.round((subtotal + shipping) * 100) / 100} RON</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-lg-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h4 className="mb-0">Adresă de Livrare</h4>
                </div>
                <div className="card-body">
                  <form className="needs-validation" onSubmit={navigateToErr}>
                    <div className="row g-3">
                      <div className="col-sm-6 my-1">
                        <label for="firstName" className="form-label">
                          Prenume
                        </label>
                        <input
                          ref={fNameRef}
                          type="text"
                          className="form-control"
                          id="Prenume"
                          required
                        />
                        <div className="invalid-feedback">
                          Acest câmp este obligatoriu.
                        </div>
                      </div>

                      <div className="col-sm-6 my-1">
                        <label for="lastName" className="form-label">
                          Nume
                        </label>
                        <input
                          ref={lNameRef}
                          type="text"
                          className="form-control"
                          id="Nume"
                          required
                        />
                        <div className="invalid-feedback">
                          Acest câmp este obligatoriu.
                        </div>
                      </div>

                      <div className="col-12 my-1">
                        <label for="email" className="form-label">
                          Email
                        </label>
                        <input
                          ref={emailRef}
                          type="email"
                          className="form-control"
                          id="email"
                          required
                        />
                        <div className="invalid-feedback">
                          Acest câmp este obligatoriu.
                        </div>
                      </div>

                      <div className="col-12 my-1">
                        <label for="address" className="form-label">
                          Adresă
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="address"
                          placeholder="Strada, Numarul"
                          required
                        />
                        <div className="invalid-feedback">
                          Acest câmp este obligatoriu.
                        </div>
                      </div>

                      <div className="col-12">
                        <label for="address2" className="form-label">
                          Adresă 2{" "}
                          <span className="text-muted">(Opțional)</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="address2"
                          placeholder="Blocul, Apartamentul, ..."
                        />
                      </div>

                      <div className="col-md-5 my-1">
                        <label for="country" className="form-label">
                          Țara
                        </label>
                        <br />
                        <input
                          type="text"
                          className="form-control"
                          id="country"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">
                          Acest câmp este obligatoriu.
                        </div>
                      </div>

                      <div className="col-md-4 my-1">
                        <label for="state" className="form-label">
                          Oraș
                        </label>
                        <br />
                        <input
                          type="text"
                          className="form-control"
                          id="state"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">
                          Acest câmp este obligatoriu.
                        </div>
                      </div>

                      <div className="col-md-3 my-1">
                        <label for="state" className="form-label">
                          Județ
                        </label>
                        <br />
                        <input
                          type="text"
                          className="form-control"
                          id="state"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">
                          Acest câmp este obligatoriu.
                        </div>
                      </div>

                      <div className="col-md-3 my-1">
                        <label for="zip" className="form-label">
                          Cod Poștal
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="zip"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">
                          Acest câmp este obligatoriu.
                        </div>
                      </div>
                    </div>

                    <hr className="my-4" />

                    <button
                      className="w-100 btn btn-primary "
                      type="submit"
                    >
                      Către plată!
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Checkout</h1>
        <hr />
        {state.length ? <ShowCheckout /> : <EmptyCart />}
      </div>
    </>
  );
};

export default Checkout;
