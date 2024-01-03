import React from "react";
import { Footer, Navbar } from "../components";
const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Contactati-ne!</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div class="form my-3">
                <label for="Name">Nume</label>
                <input
                  type="email"
                  class="form-control"
                  id="Name"
                  placeholder="Introduceti numele"
                />
              </div>
              <div class="form my-3">
                <label for="Email">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="Email"
                  placeholder="name@example.com"
                />
              </div>
              <div class="form  my-3">
                <label for="Password">Mesaj</label>
                <textarea
                  rows={5}
                  class="form-control"
                  id="Password"
                  placeholder="Introduceti mesajul"
                />
              </div>
              <div className="text-center">
                <button
                  class="my-2 px-4 mx-auto btn btn-dark"
                  type="Trimitere"
                  disabled
                >
                  Trimitere
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
