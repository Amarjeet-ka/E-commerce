import React, { useState } from 'react';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import "./Topcollection.css";
import Cart from '../cart/Cart';

import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";
import g4 from "../assets/g4.jpg";

const Product = ({ id, name, price, addToCart, image }) => {
  const handleAddToCart = () => {
    const newItem = {
      id: id,
      name: name,
      price: price,
      image: image,
      quantity: 1,
    };
    addToCart(newItem);
  };

  return (
    <Col>
      <div className="product-container">
        <Image className="product-image" src={image} thumbnail />
        <h2 className="product-price">Price: ${price}</h2>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </Col>
  );
};

const ProductsList = ({ addToCart }) => {
  const [products] = useState([
    { id: 1, name: 's22', image: g1, price: 10 },
    { id: 2, name: 'boat-rockerz', image: g2, price: 20 },
    { id: 3, name: 'samsung s20', image: g3, price: 30 },
    { id: 4, name: 'laptop', image: g4, price: 40 }
  ]);

  return (
    <Row xs={1} md={2} lg={4} className="g-4" style={{ justifyContent: 'space-between' }}>
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
          addToCart={addToCart}
        />
      ))}
    </Row>
  );
};

const Topcollection = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  return (
    <Container fluid className="top-collection-container" style={{ backgroundColor: 'white' }}>
      <h4 className="text0">Special Offer</h4>
      <h1 className="text1">Top Collection</h1>
      <h3 className="text2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </h3>
      <ProductsList addToCart={addToCart} />
      <Cart cartItems={cartItems} />
    </Container>
  );
};

export default Topcollection;
