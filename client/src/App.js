import React, { useState } from "react";
import "./App.css";
import Header from "./componants/Header/Header";
import Footer from "./componants/Footer/Footer";
import { words } from "./words";
import data from "./data.json";
import Filter from "./componants/Filter/Filter";
import Products from "./componants/Products/Products";
function App() {
  const [products, setProducts] = useState(data);
  return (
    <div className="layout">
      <Header> </Header>
      <main>
        <div className="wrapper">
          <Products products={products} />
          <Filter></Filter>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
