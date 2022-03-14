import { Button, Form } from "react-bootstrap";
import CartItem from "./CartItem";
import { CartContext } from "../../Contexts/CartContext";
import { useContext, useState } from "react";
import { BookType } from "../../Utils/types";
import { useHistory } from "react-router-dom";
import "./CartList.css";

export default function CartList() {
  // @ts-ignore
  const { cartItems, setItems, setName, setAddress } = useContext(CartContext);
  const history = useHistory();
  return (
    <div className="cart-view">
      <div className="cart-items">
        {cartItems.length > 0 ? (
          <ul className="cart-list">
            {cartItems.map((book: BookType) => (
              <CartItem key={book.id} book={book} />
            ))}
          </ul>
        ) : (
          <div className="empty-container">
            <h3>Your cart is empty...</h3>
            <img src="/images/empty-cart.gif" />
            <h5>Consider buying a book..or two..or a dozen..</h5>
          </div>
        )}
      </div>
      <div className="checkout-view">
        <img src="/images/cart.gif" />
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            history.push("/success");
          }}
        >
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Full Name:</Form.Label>
            <Form.Control
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
              type="text"
              placeholder="Please enter your name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formAddress">
            <Form.Label>Address:</Form.Label>
            <Form.Control
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              required
              type="text"
              placeholder="Please enter your address..."
            />
          </Form.Group>
          <Button disabled={cartItems.length == 0} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
