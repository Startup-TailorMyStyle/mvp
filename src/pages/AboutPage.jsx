import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Despre noi</h1>
        <hr />
        <p className="lead text-center fs-2">
        TailorMyStyle este un marketplace online al cărui element central gravitează în jurul 
        măsurătorilor corpului. La baza platformei noastre stă angajamentul de a sărbători 
        individualitatea și de a ne asigura că moda se potrivește perfect cu tine. Înregistrează-te acum 
        pentru a beneficia de oferte speciale pentru comunitatea TailorMyStyle!
        </p>

        <h2 className="text-center py-4">Produsele noastre</h2>
        <div className="row">
          <div className="col-lg-4 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Imbracaminte Barbati</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Imbracaminte femei</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Imbracaminte copii</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutPage