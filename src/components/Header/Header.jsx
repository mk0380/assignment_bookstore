import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>At ReadRover, we envision a world where every reader has access to the books they desire, and where discovering new literature is as simple and enjoyable as turning a page. We are committed to creating a user-friendly platform that caters to the diverse tastes and preferences of our community.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header