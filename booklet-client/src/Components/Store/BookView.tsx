import { Button } from "react-bootstrap";
import { BookType } from "../../Utils/types";
import { CartContext } from "../../Contexts/CartContext";
import "./BookView.css";
import { useContext } from "react";
export default function BookView(props: { book: BookType; bookCover: string; onClose: () => void }) {
  const { book, bookCover } = props;
  const { id, title, authors, average_rating, publisher, isbn, publication_date } = book;
  // @ts-ignore
  const { cartItems, setItems } = useContext(CartContext);
  const cartItem = { id, title, isbn };
  return (
    <div className="book-view-modal">
      <div className="book-view">
        <div className="header">
          <img id="close-button" src="\buttons\arrow-back-black.svg" alt="close" onClick={props.onClose} />
          <h3 className="book-view-title">{title}</h3>
        </div>
        <div className="book-view-details">
          <div className="book-view-cover">
            <img
              src={bookCover}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "/images/cover.jpg";
              }}
              width="168"
              height="252"
              alt="cover"
            />
          </div>
          <div className="book-information">
            <span>
              <p>Average Rating: </p>
              {average_rating}
              <br />
              <p>Authors: </p>
              {authors.substring(0, 30)}...
              <br />
              <p>ISBN: </p>
              {isbn}
              <br />
              <p>Publication Date: </p>
              {publication_date}
              <br />
              <p>Publisher: </p>
              {publisher}
            </span>
            <Button
              variant="outline-primary"
              onClick={() => {
                setItems([...cartItems, cartItem]);
                props.onClose();
              }}
            >
              Add to cart 🛒
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
