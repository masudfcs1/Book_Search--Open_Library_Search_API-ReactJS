import React from "react";
import "./Home.css";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import BookDetails from "../../components/BookDetails/BookDetails";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <main>
      <Header />

      <Outlet />
    </main>
  );
};

export default Home;
