import React, { useState, useEffect, useRef  } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { Modal } from "../components";  // Importați noul pop-up

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const modalProductRef = useRef(null);
  let componentMounted = true;

  const dispatch = useDispatch();

  const openAddProductModal = (product) => {
    modalProductRef.current = product;
    setShowModal(true); // Deschide modalul după adăugarea în coș
  }

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("http://localhost/products/");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  }

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleAddToCart = (product) => {
    dispatch(addCart(product))
    console.log("Produs adăugat în coș");
    setShowModal(false);
    alert("Produsul a fost adăugat în coș cu succes!");
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center py-5">
          <button className="btn btn-primary btn-lg m-2" onClick={() => setFilter(data)}>Toate</button>
          <button className="btn btn-primary btn-lg m-2" onClick={() => filterProduct("men's clothing")}>Barbati</button>
          <button className="btn btn-primary btn-lg m-2" onClick={() => filterProduct("women's clothing")}>
          Femei
          </button>
          <button className="btn btn-primary btn-lg m-2" onClick={() => filterProduct("jewelery")}>Copii</button>
        </div>

        {filter.map((product) => {
          return (
            <div id={product.id} key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
              <div className="card text-center h-100" key={product.id}>
                <img
                  className="card-img-top p-3"
                  src={product.image}
                  alt="Card"
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {product.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text">
                    {product.description.substring(0, 90)}...
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                <li className="list-group-item lead fw-bold">{product.price} RON</li>
                  {/* <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li> */}
                </ul>
                <div className="card-body">
                  <Link to={"/product/" + product.id} className="btn btn-danger btn-lg m-1">
                    Vizualizeaza
                  </Link>
                  <button className="btn btn-success btn-lg m-1" onClick={() => handleAddToCart(product)}>
                    Adauga in cos
                  </button>
                </div>
              </div>
            </div>

          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Cele mai noi produse</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;
