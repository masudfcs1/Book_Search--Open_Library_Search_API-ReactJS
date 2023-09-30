import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import BookList from "./components/BookList/BookList";
import About from "./pages/About/About";
import BookDetails from "./components/BookDetails/BookDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />{" "}
      <Route path="/book" element={<BookList />} />{" "}
      <Route path="/about" element={<About />} />{" "}
      <Route path="/book/:id" element={<BookDetails />} />{" "}
    </Routes>{" "}
  </BrowserRouter>
);
