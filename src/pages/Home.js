import React from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Product from "../components/Product.js";
import Slider from "../components/Slider.js";
import useProducts from "../hooks/useProducts.js";
import "./../assets/css/home.css";
import Bounce from "react-reveal/Bounce";
import Testimonials from "../components/Testimonials.js";
const Home = () => {
  const products = useProducts();
  return (
    <div>
      <Slider />
      <Container className="collections my-5 mx-auto">
        <Bounce bottom cascade>
          <h2 className="text-center feature">Recent Car</h2>
        </Bounce>
        <p
          style={{ maxWidth: "650px" }}
          className="text-center mb-2 mx-auto mt-3"
        >
          <Bounce>
          “There are clear signs of normal use on the car. The interior shows signs of intense use and wear- we recommend cleaning. During a test drive no undesirable noises were noted. It is in a very good technical state.

          </Bounce>
        </p>
        <Row className="mx-0">
          <Col className="my-2 ms-0" xs={12} md={6} lg={3}>
            <div className="img">
              <img className="img-fluid ms-0 ps-0" src="https://i.ibb.co/TM4bspq/car-1.jpg" alt="" />
              <img src="" alt="" />
            </div>
          </Col>
          <Col className="my-2 ms-0" xs={12} md={6} lg={3}>
          
          





            <div className="img img-fluid">
              <img className="img-fluid ms-0 ps-0" src="https://i.ibb.co/n1n9xDQ/car-2.jpg" alt="" />
            </div>
          </Col>
          <Col className="my-2 ms-0" xs={12} md={6} lg={3}>
            <div className="img img-fluid">
              <img className="img-fluid ms-0 ps-0" src="https://i.ibb.co/RCx3ysB/car-3.jpg" alt="" />
            </div>
          </Col>
          <Col className="my-2 ms-0" xs={12} md={6} lg={3}>
            <div className="img img-fluid">
              <img className="img-fluid ms-0 ps-0" src="https://i.ibb.co/MVq029r/car-4.jpg" alt="" />
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Bounce bottom cascade>
          <h2 className="text-center feature">Explore Vehicles</h2>
          <p style={{ maxWidth: "650px" }} className="text-center mx-auto mt-3">
            {" "}
            CarDekho brings a complete range of new cars in 2022 in India.Also, stay updated with upcoming cars in India, compare cars in your price.
          </p>
        </Bounce>
        {!products.length ? (
          <div className="text-center my-5 private-spinner py-5">
            <Spinner variant="danger" animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            <h6>Loading...</h6>
          </div>
        ) : (
          <Row>
            {products?.slice(0, 6)?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </Row>
        )}
        <div className="text-center">
          <Link to="/products">
            <button className="btn btn-primary mb-5 mt-3">
              Explore all products
            </button>
          </Link>
        </div>
      </Container>
      <Testimonials />
    </div>
  );
};

export default Home;
