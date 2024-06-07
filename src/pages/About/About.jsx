import React from "react";
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">About ReadRover</h2>
            <p className="fs-17">
              Welcome to ReadRover – your ultimate destination for discovering,
              reading, and organizing your favorite books online. At ReadRover,
              we believe in the power of literature to inspire, educate, and
              entertain. Our mission is to make it easier than ever for book
              lovers to find and enjoy the stories they love.
            </p>
            <h3 className="">What We Offer</h3> <br />
            <h4 className="">Search Any Book:</h4>
            <p className="">
              With ReadRover's powerful search engine, you can find any book
              you're looking for. Whether it's a timeless classic, a modern
              bestseller, or a hidden gem, our extensive database covers a wide
              range of genres and authors. Simply type in the title, author, or
              keywords, and let ReadRover do the rest.
            </p>
            <h4 className="">Add to Your Wishlist:</h4>
            <p className="">
              Found a book that piques your interest? Add it to your personal
              wishlist with just one click. Your wishlist is a dedicated space
              where you can save all the books you want to read, making it easy
              to keep track of your literary aspirations. No more forgetting
              titles or losing track of recommendations – everything you need is
              right at your fingertips.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
