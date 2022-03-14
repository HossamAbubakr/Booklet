import React from "react";
import "./CartItem.css";
function CartItem(props: { book: { title: string; isbn: string } }) {
  const { title, isbn } = props.book;
  const bookCover = `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg?default=false`;

  return (
    <li className="cart-item">
      <img
        className="item-cover"
        src={bookCover}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = "/images/cover.jpg";
        }}
      />
      <h4>{title.substring(0, 30)}...</h4>
    </li>
  );
}

export default CartItem;
