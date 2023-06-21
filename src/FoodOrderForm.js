import React, { useState } from "react";

function FoodOrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [order, setOrder] = useState("");
  return (
    <form>
      <label htmlFor="name">Name:</label>
      <input 
        id="name"
        value={name}
      />
      <label htmlFor="phone">Phone:</label>
      <input
        id="phone"
        value={phone}
      />
      <label htmlFor="address">Address:</label>
      <input
        id="address"
        value={address}
      />
      <label htmlFor="order">Order:</label>
      <input
        id="order"
        value={order}
      />
      <button type="submit">Submit Order</button>
    </form>
  )
}

export default FoodOrderForm;