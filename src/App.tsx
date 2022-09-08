import React, { useEffect } from "react";
import ImgHead from "./components/Head";
import Navbar from "./components/Navbar";
import "./styles/index.scss";
import { useDispatch } from "react-redux";
import {
  START_GET_PRODUCTS,
  START_GET_RECIPES,
  START_GET_TREND,
} from "./store/actions";
import { Route, Routes } from "react-router-dom";
import Recipes from "./views/Recipes";
import Products from "./views/Products";
import Trend from "./views/Trends";
import { Footer } from "./components/Footer";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(START_GET_RECIPES());
    dispatch(START_GET_PRODUCTS());
    dispatch(START_GET_TREND());
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <ImgHead />
      <Routes>
        <Route path="/" element={<Recipes />} />
        <Route path="/products" element={<Products />} />
        <Route path="/trend" element={<Trend />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
