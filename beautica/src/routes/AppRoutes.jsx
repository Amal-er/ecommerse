import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetail from "../Components/ProductDetail";
import Checkout from "../Components/Checkout";
import ViewCart from "../Components/ViewCart";

function AppRoutes({ products }) {
  return (
    <Routes>
      <Route path="/" element={<Home products={products} />} />
      <Route
        path="/product/:id"
        element={<ProductDetail products={products} />}
      />
      <Route path="/checkout" element={<Checkout products={products} />} />

      <Route path="/viewcart" element={<ViewCart />} />
    </Routes>
  );
}

export default AppRoutes;
