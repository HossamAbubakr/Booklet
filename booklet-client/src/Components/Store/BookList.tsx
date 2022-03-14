import { useState, useEffect } from "react";
import { getBooks } from "../../Utils/api";
import Book from "./Book";
import "./BookList.css";
export default function BookList() {
  const [books, setBooks] = useState([]);
  const [comicInfo, setInfo] = useState({ total: 0, count: 0 });
  const [currentIndex, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchMyBooks() {
      try {
        setLoading(true);
        const receivedBooks = await getBooks(currentIndex);
        const { total, books } = receivedBooks;
        setInfo({ total, count: 24 });
        setBooks(books);
        setLoading(false);
      } catch (error) {
        alert("Error Occured, Please Try Again Later");
      }
    }
    fetchMyBooks();
  }, [currentIndex]);
  return (
    <div>
      <p className="tip">
        <span role="img" aria-label="idea">
          💡
        </span>
        Did you know? You can click on a book cover to get a detailed view or add it to your cart!
      </p>
      <div className="book-page-nav">
        Page {currentIndex + 1}⠀
        <button disabled={loading || currentIndex === 0} onClick={() => currentIndex > 0 && setIndex(currentIndex - 1)}>
          ˂
        </button>
        <button
          disabled={loading || (currentIndex + 1) * 24 >= comicInfo.total}
          onClick={() => setIndex(currentIndex + 1)}
        >
          ˃
        </button>
      </div>
      {loading ? (
        <div id="loader">
          <img src="/images/loader.gif" alt="loading indicator" />
          <h3>Loading...</h3>
        </div>
      ) : (
        <table className="books-list">
          <tbody>
            <tr>
              {books.map((book, index) => (
                <Book key={index} book={book} />
              ))}
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}
