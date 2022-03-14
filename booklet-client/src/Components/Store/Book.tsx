import { useState, useCallback } from "react";
import BookView from "./BookView";
import { BookType } from "../../Utils/types";

function Book(props: { book: BookType }) {
  const { title, isbn } = props.book;
  const [viewModal, setModal] = useState(false);
  const toggleModal = useCallback(() => {
    setModal(!viewModal);
  }, [viewModal]);
  // The default=false flag return 404 if the cover doesn't exist
  const bookCover = `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg?default=false`;
  return (
    <td className="book">
      <div className="book-top">
        <img
          className="book-cover"
          src={bookCover}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = "/images/cover.jpg";
          }}
          onClick={toggleModal}
        />
      </div>
      <div className="book-title">
        <p>{title.substring(0, 30)}...</p>
      </div>
      {viewModal && <BookView book={props.book} bookCover={bookCover} onClose={toggleModal} />}
    </td>
  );
}

export default Book;
