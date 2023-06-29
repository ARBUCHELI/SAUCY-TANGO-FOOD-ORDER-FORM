import React, { useState } from "react";
import styles from "./FoodOrderForm.module.css";

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
    <form onSubmit={handleSubmit} className={styles.mainform}>
      <label htmlFor="name" className={styles.label}>Name:</label>
      <input 
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        name="name"
        type="text"
        className={styles.inputbox}
      />
      <label htmlFor="phone" className={styles.label}>Phone:</label>
      <input
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        name="phone"
        type="text"
        className={styles.inputbox}
      />
      <label htmlFor="address" className={styles.label}>Address:</label>
      <input
        id="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        name="address"
        type="text"
        className={styles.inputbox}
      />
      <label htmlFor="order" className={styles.label}>Order:</label>
      <input
        id="order"
        value={order}
        onChange={(e) => setOrder(e.target.value)}
        name="order"
        type="text"
        className={styles.inputbox}
      />
      <button type="submit" className={styles.formbutton}>Submit Order</button>
    </form>
  )
}

export default FoodOrderForm;