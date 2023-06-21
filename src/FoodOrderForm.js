import React, { useState } from "react";

function FoodOrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [order, setOrder] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `
      Order Successful!
      \n\n
      Your order was: ${order}
      \n\n
      Please show your confirmation number for pickup.
    `
    )
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input 
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        name="name"
        type="text"
      />
      <label htmlFor="phone">Phone:</label>
      <input
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        name="phone"
        type="text"
      />
      <label htmlFor="address">Address:</label>
      <input
        id="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        name="address"
        type="text"
      />
      <label htmlFor="order">Order:</label>
      <input
        id="order"
        value={order}
        onChange={(e) => setOrder(e.target.value)}
        name="order"
        type="text"
      />
      <button type="submit">Submit Order</button>
    </form>
  )
}

export default FoodOrderForm;