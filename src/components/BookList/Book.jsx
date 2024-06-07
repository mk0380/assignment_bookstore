import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./BookList.css";

const Book = (book) => {

  const [books, setBooks] = useState([])

  let myWishlist = [];

  useEffect(() => {
    if(window.localStorage.getItem("wishlist")){
      myWishlist = JSON.parse(window.localStorage.getItem("wishlist"))
      setBooks(myWishlist)
    }else{
      window.localStorage.setItem('wishlist',JSON.stringify([]))
      return
    }    console.log(myWishlist);
  }, [])
  

  const addWishList = (id) => {
    let myBooks = [];

    if(window.localStorage.getItem("wishlist")){
      myBooks = JSON.parse(window.localStorage.getItem("wishlist"))
    }else{
      return
    }

    myBooks.push(id);

    window.localStorage.setItem("wishlist", JSON.stringify(myBooks));

    setBooks(window.localStorage.getItem("wishlist"));
  };

  const removeWishlist = (id) => {
    let myBooks = [];

    if(window.localStorage.getItem("wishlist")){
      myBooks = JSON.parse(window.localStorage.getItem("wishlist"))
    }else{
      return
    }
    myBooks = myBooks.filter((book) => book !== id);

    window.localStorage.removeItem("wishlist");

    window.localStorage.setItem("wishlist", JSON.stringify(myBooks));

    setBooks(window.localStorage.getItem("wishlist"));

  };

  return (
    <div
      className="book-item flex flex-column flex-sb"
    >
      <div className="book-item-img">
        <img src={book.cover_img} alt="cover" />
      </div>
      <div className="book-item-info text-center">
        <Link to={`/book/${book.id}`} {...book}>
          <div className="book-item-info-item title fw-7 fs-18">
            <span>{book.title}</span>
          </div>
        </Link>

        <div className="book-item-info-item author fs-15">
          <span className="text-capitalize fw-7">Author: </span>
          <span>{book.author.join(", ")}</span>
        </div>

        {!books.includes(book.id) && <button
          onClick={() => addWishList(book.id)}
          style={{
            width: "80%",
            margin: "5px auto",
            padding: "10px",
            background: "#a881af",
            fontWeight: "bold",
          }}
        >
          Add to Wishlist
        </button>}
        {books.includes(book.id) && <button
          onClick={() => removeWishlist(book.id)}
          style={{
            width: "80%",
            margin: "5px auto",
            padding: "10px",
            background: "#E4433F",
            fontWeight: "bold",
          }}
        >
          Remove from Wishlist
        </button>}
      </div>
    </div>
  );
};

export default Book;
