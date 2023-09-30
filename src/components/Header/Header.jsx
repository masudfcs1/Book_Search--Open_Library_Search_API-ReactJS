import React from "react";

import "./Header.css";
import Navbar from "../Navbar/Navbar";
import headerimg from "../../images/library-img.jpg";
import SearchForm from "../SearchForm/SearchForm";
const Header = () => {
  return (
    <div className=" holder">
      <div className="header">
        <Navbar />

        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            Discover Your Favorite Book
          </h2>{" "}
          {/* <img src={headerimg} alt="" /> */}
          <br />
          <p className="header-text fs-18 fw-13">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            rerum, culpa praesentium accusantium distinctio molestias officia
            facere suscipit maxime quidem voluptatibus atque amet temporibus
            quis, nemo eligendi facilis eum. Aut.
          </p>
          <SearchForm />
        </div>
      </div>
    </div>
  );
};

export default Header;
