import React, { useEffect, useState, useRef } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { Modal } from "../components";  // Importați noul pop-up

import { Footer, Navbar } from "../components";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const modalProductRef = useRef(null);
  const dispatch = useDispatch();

  const openAddProductModal = (product) => {
    modalProductRef.current = product;
    setShowModal(true); // Deschide modalul după adăugarea în coș
  }

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      setLoading2(true);
      //change api request to read local json
      // const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      // const data = await response.json();
      // setProduct(data);
      // setLoading(false);

      fetch(process.env.PUBLIC_URL + "/products.json",
                {
                  headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                  }
                }
                )
                .then(function(response){
                  return response.json();
                })
                .then(function(myJson) {
                  console.log(myJson[id])
                  setProduct(myJson[id])
                  setLoading(false)
              })
    };
    getProduct();
  }, [id]);

  const Loading = () => {
    return (
      <>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 py-3">
              <Skeleton height={400} width={400} />
            </div>
            <div className="col-md-6 py-5">
              <Skeleton height={30} width={250} />
              <Skeleton height={90} />
              <Skeleton height={40} width={70} />
              <Skeleton height={50} width={110} />
              <Skeleton height={120} />
              <Skeleton height={40} width={110} inline={true} />
              <Skeleton className="mx-3" height={40} width={110} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleAddToCart = () => {
    dispatch(addCart(modalProductRef.current))
    setShowModal(false);
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 col-sm-12 py-3">
              <img
                className="img-fluid"
                src={process.env.PUBLIC_URL + product.image}
                alt={product.title}
                width="400px"
                height="400px"
              />
            </div>
            <div className="col-md-6 col-md-6 py-5">
              <h1 className="display-5">{product.title}</h1>
              <h3 className="display-6  my-4 text-danger"><del>{Math.round((product.price + 20.00) * 100) / 100} RON</del></h3>
              <h3 className="display-6  my-4">{product.price} RON</h3>
              <p className="lead">{product.description}</p>
              <button className="btn btn-success btn-lg m-1" onClick={() => openAddProductModal(product)}>
                Adaugă în coș
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
        {showModal && <Modal onClose={handleModalClose} onAddToCart={handleAddToCart}  />}
      </div>
    </>
  );
};

export default Product;
