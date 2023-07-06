import React, { useState } from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  const [registrationId, setRegistrationId] = useState(null);
  const [paymentOption, setPaymentOption] = useState(null);

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handlePaymentOption = (option) => {
    setPaymentOption(option);
  };

  const handleCheckout = () => {
    // Simulating an asynchronous registration process
    // Generate a unique registration ID and set it in the state
    const generatedId = generateRegistrationId();
    setRegistrationId(generatedId);
  };

  const generateRegistrationId = () => {
    // Logic to generate a unique registration ID
    // You can use a library or generate it according to your requirements
    return 'PUR' + Math.floor(Math.random() * 100000);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <h2>{item.name}</h2>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
              <button onClick={() => removeFromCart(item)}>Remove from Cart</button>
            </div>
          ))}
          <h3>Total Price: ${calculateTotalPrice()}</h3>
          {paymentOption ? (
            <div>
              <p>Selected Payment Option: {paymentOption}</p>
              <button onClick={handleCheckout}>Buy</button>
            </div>
          ) : (
            <div>
              <p>Select a Payment Option:</p>
              <button onClick={() => handlePaymentOption('Credit Card')}>Credit Card</button>
              <button onClick={() => handlePaymentOption('PayPal')}>PayPal</button>
              <button onClick={() => handlePaymentOption('Bitcoin')}>Bitcoin</button>
            </div>
          )}
          {registrationId && (
            <div>
              <p>Purchase Id: {registrationId}</p>
              <p>Thank you for your purchase!</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
